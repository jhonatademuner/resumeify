"use client";

import Education from "@/models/Education";
import React, { useState } from "react";

const EducationInput = () => {
  const [educations, setEducations] = useState<Education[]>([new Education()]);

  const handleCurrentEnrollmentChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEducations((prevEducations) => {
      const updatedEducations = [...prevEducations];
      updatedEducations[index].isCurrentlyEnrolled = event.target.checked;
      if (updatedEducations[index].isCurrentlyEnrolled) {
        // Clear endDate if user checks "I'm currently enrolled"
        updatedEducations[index].endDate = "";
      }
      return updatedEducations;
    });
  };

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEducations((prevEducations) => {
      const updatedEducations: Education[] = [...prevEducations];
      updatedEducations[index] = {
        ...updatedEducations[index],
        [event.target.name as keyof Education]: event.target.value,
      };
      return updatedEducations;
    });
  };

  const addEducation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault(); // Prevent default form submission if needed
    setEducations((prevEducations) => [...prevEducations, new Education()]);
  };

  const removeEducation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault(); // Prevent default form submission if needed
    if (educations.length > 1) {
      // Prevent removing the only education
      setEducations((prevEducations) =>
        prevEducations.filter((_, i) => i !== index)
      );
    }
  };

  return (
    <div className="flex flex-col w-full gap-2">
      {educations.map((education, index) => (
        <div key={index} className="flex flex-col gap-2 w-full">
          <div className="flex w-full gap-2 flex-wrap items-center">
            <input
              type="text"
              placeholder="Degree"
              className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-full lg:max-w-[calc(50%-0.25rem)]"
              name="degree"
              value={education.degree}
              onChange={(event) => handleInputChange(index, event)}
            />
            <input
              type="text"
              placeholder="School"
              className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-full lg:max-w-[calc(50%-0.25rem)]"
              name="school"
              value={education.institution}
              onChange={(event) => handleInputChange(index, event)}
            />
            <input
              type="date"
              placeholder="Start Date"
              className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-1/2 lg:max-w-[calc(25%-0.30rem)]"
              name="startDate"
              value={education.startDate}
              onChange={(event) => handleInputChange(index, event)}
            />
            {!education.isCurrentlyEnrolled && (
              <input
                type="date"
                placeholder="End Date"
                className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-1/2 lg:max-w-[calc(25%-0.30rem)] "
                name="endDate"
                value={education.endDate}
                onChange={(event) => handleInputChange(index, event)}
              />
            )}
            <label htmlFor={`currentlyEnrolled-${index}`}>
              <input
                type="checkbox"
                className="border-2 border-black rounded-lg p-2 "
                name="isCurrentlyEnrolled"
                checked={education.isCurrentlyEnrolled}
                onChange={(event) =>
                  handleCurrentEnrollmentChange(index, event)
                }
              />
              Im currently enrolled
            </label>
          </div>
          {index !== educations.length - 1 && ( // Only show remove button for non-last education
            <button
              className="bg-black text-white p-2 rounded-lg w-full"
              onClick={(e) => removeEducation(e, index)}
            >
              Remove education
            </button>
          )}
        </div>
      ))}
      <button
        className="bg-black text-white p-2 rounded-lg"
        onClick={addEducation}
      >
        Add education
      </button>
    </div>
  );
};

export default EducationInput;
