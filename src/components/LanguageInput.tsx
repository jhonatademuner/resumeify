"use client";

import React, { useState } from "react";

interface Language {
  language: string;
  level: string; // Beginner, Elementary, etc.
}

const LanguageInput = () => {
  const [languages, setLanguages] = useState<Language[]>([
    { language: "", level: "beginner" }, // Default language with beginner level
  ]);

  const handleLanguageChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLanguages((prevLanguages) => {
      const updatedLanguages = [...prevLanguages];
      updatedLanguages[index].language = event.target.value;
      return updatedLanguages;
    });
  };

  const handleLevelChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguages((prevLanguages) => {
      const updatedLanguages = [...prevLanguages];
      updatedLanguages[index].level = event.target.value;
      return updatedLanguages;
    });
  };

  const addLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default form submission if needed
    setLanguages((prevLanguages) => [
      ...prevLanguages,
      { language: "", level: "beginner" },
    ]);
  };

  const removeLanguage = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    e.preventDefault(); // Prevent default form submission if needed
    if (languages.length > 1) {
      setLanguages((prevLanguages) =>
        prevLanguages.filter((_, i) => i !== index)
      );
    }
  };

  return (
    <div className="resume-languages">
      {languages.map((language, index) => (
        <div key={index} className="language-section">
          <div className="bg-yellow-500">
            <input
              type="text"
              placeholder="Language"
              className="border-2 border-black rounded-lg p-2 m-2"
              name="language"
              value={language.language}
              onChange={(event) => handleLanguageChange(index, event)}
            />
            <select
              className="border-2 border-black rounded-lg p-2 m-2"
              name={`level-${index}`}
              value={language.level}
              onChange={(event) => handleLevelChange(index, event)}
            >
              <option value="beginner">Beginner</option>
              <option value="elementary">Elementary</option>
              <option value="intermediate">Intermediate</option>
              <option value="upperIntermediate">Upper-Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="proficient">Proficient</option>
            </select>
          </div>
          {index !== languages.length - 1 && ( // Only show remove button for non-last language
            <button
              className="btn-remove"
              onClick={(e) => removeLanguage(e, index)}
            >
              Remove language
            </button>
          )}
        </div>
      ))}
      <button className="btn-add" onClick={addLanguage}>
        Add language
      </button>
    </div>
  );
};

export default LanguageInput;
