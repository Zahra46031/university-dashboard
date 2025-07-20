// App.jsx
import { useState } from "react";
import { ChartBar } from "./components/ChartBar";
import { ChartLine } from "./components/ChartLine";
import { LanguageToggle } from "./components/LanguageToggle";
import translations from "./Locales/translations";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          {t.title}
        </h1>
        <LanguageToggle language={language} setLanguage={setLanguage} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartLine t={t} language={language} />
        <ChartBar t={t} language={language} />
      </div>
    </div>
  );
}

export default App;
