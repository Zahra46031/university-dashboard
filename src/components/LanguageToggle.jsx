// components/LanguageToggle.jsx

export function LanguageToggle({ language, setLanguage }) {
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 border rounded text-sm bg-white hover:bg-gray-100"
    >
      {language === "en" ? "Français" : "English"}
    </button>
  );
}
