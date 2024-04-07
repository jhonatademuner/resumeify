"use client";

import React, { useState } from "react";
import Experience from "@/models/Experience";

const ExperienceInput = () => {
  const [experiences, setExperiences] = useState<Experience[]>([new Experience()]);

  const handleCurrentJobChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences[index].isCurrentJob = event.target.checked;
      if (updatedExperiences[index].isCurrentJob) {
        // Clear endDate if user checks "This is my current job"
        updatedExperiences[index].endDate = "";
      }
      return updatedExperiences;
    });
  };

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setExperiences((prevExperiences) => {
      const updatedExperiences: Experience[] = [...prevExperiences];
      updatedExperiences[index] = {
        ...updatedExperiences[index],
        [event.target.name as keyof Experience]: event.target.value,
      };
      return updatedExperiences;
    });
  };

  const addExperience = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault(); // Prevent default form submission if needed
    setExperiences((prevExperiences) => [
      ...prevExperiences,
      new Experience()
    ]);
  };

  const removeExperience = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault(); // Prevent default form submission if needed
    if (experiences.length > 1) {
      // Prevent removing the only experience
      setExperiences((prevExperiences) =>
        prevExperiences.filter((_, i) => i !== index)
      );
    }
  };

  return (
    <div className="resume-experiences w-full">
      {experiences.map((experience, index) => (
        <div key={index} className="experience-section w-full">
          <div className="w-full">
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="Role"
                className="border-2 border-black rounded-lg p-2  w-1/2"
                name="role"
                value={experience.role}
                onChange={(event) => handleInputChange(index, event)}
              />
              <input
                type="text"
                placeholder="Company"
                className="border-2 border-black rounded-lg p-2  w-1/2"
                name="company"
                value={experience.company}
                onChange={(event) => handleInputChange(index, event)}
              />
            </div>
            <div className="flex items-center">
              <input
                type="date"
                placeholder="Start Date"
                className="border-2 border-black rounded-lg p-2 "
                name="startDate"
                value={experience.startDate}
                onChange={(event) => handleInputChange(index, event)}
              />
              {!experience.isCurrentJob && (
                <input
                  type="date"
                  placeholder="End Date"
                  className="border-2 border-black rounded-lg p-2 "
                  name="endDate"
                  value={experience.endDate}
                  onChange={(event) => handleInputChange(index, event)}
                />
              )}
              <label htmlFor={`currentJob-${index}`}>
                <input
                  type="checkbox"
                  className="border-2 border-black rounded-lg p-2"
                  name="isCurrentJob"
                  checked={experience.isCurrentJob}
                  onChange={(event) => handleCurrentJobChange(index, event)}
                />
                This is my current job
              </label>
            </div>
            <textarea
              placeholder="In the description you should put your key achievements and responsibilities."
              className="border-2 border-black rounded-lg p-2 w-full h-24"
              name="description"
              value={experience.description}
              onChange={(event) => handleInputChange(index, event)}
            />
          </div>
          {index !== experiences.length - 1 && ( // Only show remove button for non-last experience
            <button
              className="btn-remove"
              onClick={(e) => removeExperience(e, index)}
            >
              Remove experience
            </button>
          )}
        </div>
      ))}
      <button className="btn-add" onClick={addExperience}>
        Add experience
      </button>
    </div>
  );
};

export default ExperienceInput;
