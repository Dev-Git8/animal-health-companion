import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Pill, Shield, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { animalData } from "@/data/animalDiseases";

const AnimalDetail = () => {
  const { animalName } = useParams();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [expandedDisease, setExpandedDisease] = useState(null);

  const animal = animalData[animalName];

  if (!animal) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar 
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
        />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Animal not found</h1>
            <Link to="/animals" className="text-primary hover:underline">
              ← Back to Animals
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const toggleDisease = (diseaseId) => {
    setExpandedDisease(expandedDisease === diseaseId ? null : diseaseId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link 
            to="/animals" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Animals
          </Link>

          {/* Hero Section */}
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <img
              src={animal.image}
              alt={animal.name}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                {animal.name}
              </h1>
              <p className="text-white/80 text-lg mb-2">{animal.nameHi}</p>
              <p className="text-white/70 max-w-2xl">{animal.description}</p>
            </div>
          </div>

          {/* Diseases Section */}
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              Common Diseases & Treatments
            </h2>

            <div className="space-y-4">
              {animal.diseases.map((disease) => (
                <div 
                  key={disease.id}
                  className="bg-card border border-border rounded-xl overflow-hidden shadow-sm"
                >
                  {/* Disease Header */}
                  <button
                    onClick={() => toggleDisease(disease.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground text-lg">
                        {disease.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{disease.nameHi}</p>
                    </div>
                    {expandedDisease === disease.id ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>

                  {/* Disease Details */}
                  {expandedDisease === disease.id && (
                    <div className="px-6 pb-6 border-t border-border animate-fade-in">
                      {/* Symptoms */}
                      <div className="mt-4">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-destructive" />
                          Symptoms
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {disease.symptoms.map((symptom, index) => (
                            <li 
                              key={index}
                              className="text-muted-foreground text-sm flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Causes */}
                      <div className="mt-4">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500" />
                          Causes
                        </h4>
                        <p className="text-muted-foreground text-sm">{disease.causes}</p>
                      </div>

                      {/* Treatment */}
                      <div className="mt-4">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Pill className="h-4 w-4 text-primary" />
                          Treatment
                        </h4>
                        <p className="text-muted-foreground text-sm">{disease.treatment}</p>
                      </div>

                      {/* Prevention */}
                      <div className="mt-4">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Shield className="h-4 w-4 text-green-600" />
                          Prevention
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {disease.prevention.map((tip, index) => (
                            <li 
                              key={index}
                              className="text-muted-foreground text-sm flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-green-600/50" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 md:p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-1">
                  Important Disclaimer
                </h3>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  This information is for educational purposes only. Always consult a qualified veterinarian 
                  for proper diagnosis and treatment of your animals. Do not self-medicate your animals 
                  based on this information alone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AnimalDetail;
