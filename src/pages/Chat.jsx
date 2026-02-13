import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, ArrowLeft, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useNavigate, useLocation } from "react-router-dom";

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/animal-chat`;

const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialQuestion = location.state?.question || "";

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const hasSentInitial = useRef(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (initialQuestion && !hasSentInitial.current) {
      hasSentInitial.current = true;
      sendMessage(initialQuestion);
    }
  }, [initialQuestion]);

  const sendMessage = async (text) => {
    const msg = text || input.trim();
    if (!msg || isLoading) return;
    setInput("");

    const userMsg = { role: "user", content: msg };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setIsLoading(true);

    let assistantSoFar = "";
    const upsertAssistant = (chunk) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
          );
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!resp.ok || !resp.body) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || "Failed to get response");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) upsertAssistant(content);
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (e) {
      console.error("Chat error:", e);
      upsertAssistant("Sorry, I couldn't process your request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] flex flex-col">
      {/* Header */}
      <header className="border-b border-[#1a1a1a] px-4 py-3 flex items-center gap-4 bg-[#0f0f0f]">
        <button
          onClick={() => navigate("/")}
          className="p-2 rounded-lg hover:bg-[#1a1a1a] transition-colors text-[#888]"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-[#e0e0e0]" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Animal Health AI
            </h1>
            <p className="text-xs text-[#555]">Ask anything about animal care</p>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
          {messages.length === 0 && !isLoading && (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Bot className="h-8 w-8 text-emerald-400" />
              </div>
              <h2 className="text-xl font-semibold text-[#ccc] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                How can I help?
              </h2>
              <p className="text-sm text-[#555] max-w-md">
                Ask me about animal diseases, treatments, symptoms, and general care tips.
              </p>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center mt-1">
                  <Bot className="h-4 w-4 text-emerald-400" />
                </div>
              )}
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-emerald-600 text-white"
                    : "bg-[#151515] text-[#d0d0d0] border border-[#1f1f1f]"
                }`}
              >
                {msg.role === "assistant" ? (
                  <div className="prose prose-sm prose-invert max-w-none [&>p]:mb-2 [&>p:last-child]:mb-0 [&_strong]:text-emerald-300 [&_li]:text-[#c0c0c0]">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                ) : (
                  msg.content
                )}
              </div>
              {msg.role === "user" && (
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center mt-1">
                  <User className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
          ))}

          {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
            <div className="flex gap-3 justify-start">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Bot className="h-4 w-4 text-emerald-400" />
              </div>
              <div className="bg-[#151515] border border-[#1f1f1f] rounded-2xl px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 bg-[#444] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-[#444] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-[#444] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-[#1a1a1a] bg-[#0f0f0f] p-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question..."
            className="flex-1 bg-[#151515] border border-[#222] rounded-xl px-4 py-3 text-sm text-[#e0e0e0] placeholder:text-[#444] outline-none focus:border-emerald-500/50 transition-colors"
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); sendMessage(); }}
            disabled={!input.trim() || isLoading}
            className="p-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
