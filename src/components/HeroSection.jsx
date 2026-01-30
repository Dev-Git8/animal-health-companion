import { Search } from "lucide-react";
import heroAnimals from "@/assets/hero-animals.jpg";

const HeroSection = ({ searchQuery, onSearchChange, selectedLanguage }) => {
  const translations = {
    en: {
      title: "Caring for Every Creature",
      subtitle: "Find information about animal diseases, symptoms, and treatments in your preferred language",
      placeholder: "Search animal diseases, symptoms...",
      cta: "Search Now",
    },
    hi: {
      title: "हर जीव की देखभाल",
      subtitle: "अपनी पसंदीदा भाषा में पशु रोगों, लक्षणों और उपचारों के बारे में जानकारी प्राप्त करें",
      placeholder: "पशु रोग, लक्षण खोजें...",
      cta: "अभी खोजें",
    },
    bn: {
      title: "প্রতিটি প্রাণীর যত্ন",
      subtitle: "আপনার পছন্দের ভাষায় পশু রোগ, লক্ষণ এবং চিকিৎসা সম্পর্কে তথ্য খুঁজুন",
      placeholder: "পশু রোগ, লক্ষণ খুঁজুন...",
      cta: "এখনই খুঁজুন",
    },
    ta: {
      title: "ஒவ்வொரு உயிரினத்தையும் கவனித்தல்",
      subtitle: "உங்கள் விருப்பமான மொழியில் விலங்கு நோய்கள், அறிகுறிகள் மற்றும் சிகிச்சைகளைப் பற்றிய தகவல்களைக் கண்டறியுங்கள்",
      placeholder: "விலங்கு நோய்கள், அறிகுறிகளைத் தேடு...",
      cta: "இப்போது தேடு",
    },
    ml: {
      title: "എല്ലാ ജീവികളെയും പരിപാലിക്കുന്നു",
      subtitle: "നിങ്ങളുടെ ഇഷ്ട ഭാഷയിൽ മൃഗരോഗങ്ങൾ, ലക്ഷണങ്ങൾ, ചികിത്സകൾ എന്നിവയെക്കുറിച്ചുള്ള വിവരങ്ങൾ കണ്ടെത്തുക",
      placeholder: "മൃഗരോഗങ്ങൾ, ലക്ഷണങ്ങൾ തിരയുക...",
      cta: "ഇപ്പോൾ തിരയുക",
    },
    as: {
      title: "প্ৰতিটো জীৱৰ যত্ন",
      subtitle: "আপোনাৰ পছন্দৰ ভাষাত পশু ৰোগ, লক্ষণ আৰু চিকিৎসাৰ বিষয়ে তথ্য বিচাৰি উলিয়াওক",
      placeholder: "পশু ৰোগ, লক্ষণ বিচাৰক...",
      cta: "এতিয়াই বিচাৰক",
    },
    te: {
      title: "ప్రతి జీవిని చూసుకోవడం",
      subtitle: "మీ ఇష్టమైన భాషలో జంతు వ్యాధులు, లక్షణాలు మరియు చికిత్సల గురించి సమాచారాన్ని కనుగొనండి",
      placeholder: "జంతు వ్యాధులు, లక్షణాలు వెతకండి...",
      cta: "ఇప్పుడు వెతకండి",
    },
    kn: {
      title: "ಪ್ರತಿ ಜೀವಿಯ ಕಾಳಜಿ",
      subtitle: "ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯಲ್ಲಿ ಪ್ರಾಣಿ ರೋಗಗಳು, ಲಕ್ಷಣಗಳು ಮತ್ತು ಚಿಕಿತ್ಸೆಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿಯನ್ನು ಹುಡುಕಿ",
      placeholder: "ಪ್ರಾಣಿ ರೋಗಗಳು, ಲಕ್ಷಣಗಳನ್ನು ಹುಡುಕಿ...",
      cta: "ಈಗ ಹುಡುಕಿ",
    },
    mr: {
      title: "प्रत्येक प्राण्याची काळजी",
      subtitle: "तुमच्या पसंतीच्या भाषेत प्राण्यांचे रोग, लक्षणे आणि उपचारांबद्दल माहिती शोधा",
      placeholder: "प्राण्यांचे रोग, लक्षणे शोधा...",
      cta: "आता शोधा",
    },
    gu: {
      title: "દરેક પ્રાણીની સંભાળ",
      subtitle: "તમારી પસંદગીની ભાષામાં પ્રાણીઓના રોગો, લક્ષણો અને સારવાર વિશે માહિતી શોધો",
      placeholder: "પ્રાણીઓના રોગો, લક્ષણો શોધો...",
      cta: "હમણાં શોધો",
    },
    pa: {
      title: "ਹਰ ਜੀਵ ਦੀ ਦੇਖਭਾਲ",
      subtitle: "ਆਪਣੀ ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ ਵਿੱਚ ਜਾਨਵਰਾਂ ਦੀਆਂ ਬਿਮਾਰੀਆਂ, ਲੱਛਣਾਂ ਅਤੇ ਇਲਾਜਾਂ ਬਾਰੇ ਜਾਣਕਾਰੀ ਲੱਭੋ",
      placeholder: "ਜਾਨਵਰਾਂ ਦੀਆਂ ਬਿਮਾਰੀਆਂ, ਲੱਛਣ ਖੋਜੋ...",
      cta: "ਹੁਣੇ ਖੋਜੋ",
    },
    or: {
      title: "ପ୍ରତ୍ୟେକ ଜୀବର ଯତ୍ନ",
      subtitle: "ଆପଣଙ୍କ ପସନ୍ଦର ଭାଷାରେ ପଶୁ ରୋଗ, ଲକ୍ଷଣ ଏବଂ ଚିକିତ୍ସା ବିଷୟରେ ସୂଚନା ଖୋଜନ୍ତୁ",
      placeholder: "ପଶୁ ରୋଗ, ଲକ୍ଷଣ ଖୋଜନ୍ତୁ...",
      cta: "ବର୍ତ୍ତମାନ ଖୋଜନ୍ତୁ",
    },
  };

  const t = translations[selectedLanguage] || translations.en;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroAnimals}
          alt="Indian animals in a natural setting"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-slide-up">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            {t.subtitle}
          </p>

          {/* Search Bar */}
          <div className="search-glass rounded-full p-2 max-w-2xl mx-auto flex items-center gap-2">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground py-3"
              />
            </div>
            <button className="btn-hero">
              {t.cta}
            </button>
          </div>

          {/* Quick tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Foot and Mouth", "Mastitis", "Rabies", "Anthrax", "Tick Fever"].map((tag) => (
              <button
                key={tag}
                onClick={() => onSearchChange(tag)}
                className="px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium hover:bg-primary-foreground/30 transition-colors backdrop-blur-sm"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
