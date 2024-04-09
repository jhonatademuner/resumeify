"use client";

import Language from "@/models/Language";
import React, { useState } from "react";

const LanguageInput = () => {
  const [languages, setLanguages] = useState<Language[]>([new Language()]);

  const handleLanguageChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLanguages((prevLanguages) => {
      const updatedLanguages = [...prevLanguages];
      updatedLanguages[index].name = event.target.value;
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
      new Language()
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
    <div className="flex flex-col w-full gap-2">
      {languages.map((language, index) => (
        <div key={index} className="flex flex-col gap-2 w-full">
          <div className="flex w-full gap-2 flex-no-wrap items-center">
            <input
              type="text"
              placeholder="Language"
              className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-full"
              name="language"
              value={language.name}
              onChange={(event) => handleLanguageChange(index, event)}
            />
            <select
              className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none h-9 shrink-0"
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
              className="bg-black text-white p-2 rounded-lg w-full"
              onClick={(e) => removeLanguage(e, index)}
            >
              Remove language
            </button>
          )}
        </div>
      ))}
      <button className="bg-black text-white p-2 rounded-lg" onClick={addLanguage}>
        Add language
      </button>
    </div>
  );
};

export default LanguageInput;
