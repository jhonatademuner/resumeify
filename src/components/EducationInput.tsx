"use client";

import React, { useState } from "react";

interface Education {
  degree: string;
  school: string;
  startDate: string;
  endDate: string; // Include end date for clarity
  isCurrentlyEnrolled: boolean;
  description: string;
}

const EducationInput = () => {
  const [educations, setEducations] = useState<Education[]>([
    {
      degree: "",
      school: "",
      startDate: "",
      endDate: "", // Initially include end date for clarity
      isCurrentlyEnrolled: true, // Mark first education as currently enrolled by default
      description: "",
    },
  ]);

  const handleCurrentEnrollmentChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    setEducations((prevEducations) => [...prevEducations, {
      degree: "",
      school: "",
      startDate: "",
      endDate: "", // Include end date for new education
      isCurrentlyEnrolled: false, // New education shouldn't be currently enrolled by default
      description: "",
    }]);
  };

  const removeEducation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    e.preventDefault(); // Prevent default form submission if needed
    if (educations.length > 1) { // Prevent removing the only education
      setEducations((prevEducations) =>
        prevEducations.filter((_, i) => i !== index)
      );
    }
  };

  return (
    <div className="resume-educations">
      {educations.map((education, index) => (
        <div key={index} className="education-section">
          <div className="bg-green-500">
            <input
              type="text"
              placeholder="Degree"
              className="border-2 border-black rounded-lg p-2 m-2"
              name="degree"
              value={education.degree}
              onChange={(event) => handleInputChange(index, event)}
            />
            <input
              type="text"
              placeholder="School"
              className="border-2 border-black rounded-lg p-2 m-2"
              name="school"
              value={education.school}
              onChange={(event) => handleInputChange(index, event)}
            />
            <input
              type="date"
              placeholder="Start Date"
              className="border-2 border-black rounded-lg p-2 m-2"
              name="startDate"
              value={education.startDate}
              onChange={(event) => handleInputChange(index, event)}
            />
            <label htmlFor={`currentlyEnrolled-${index}`}>
              <input
                type="checkbox"
                className="border-2 border-black rounded-lg p-2 m-2"
                name="isCurrentlyEnrolled"
                checked={education.isCurrentlyEnrolled}
                onChange={(event) => handleCurrentEnrollmentChange(index, event)}
              />
              Im currently enrolled
            </label>
            {!education.isCurrentlyEnrolled && (
              <input
                type="date"
                placeholder="End Date"
                className="border-2 border-black rounded-lg p-2 m-2"
                name="endDate"
                value={education.endDate}
                onChange={(event) => handleInputChange(index, event)}
              />
            )}
            <textarea
              placeholder="In the description you should put your relevant coursework and achievements."
              className="border-2 border-black rounded-lg p-2 m-2"
              name="description"
              value={education.description}
              onChange={(event) => handleInputChange(index, event)}
            />
          </div>
          {index !== educations.length - 1 && ( // Only show remove button for non-last education
            <button className="btn-remove" onClick={(e) => removeEducation(e, index)}>
              Remove education
            </button>
          )}
        </div>
      ))}
      <button className="btn-add" onClick={addEducation}>
        Add education
      </button>
    </div>
  );
};

export default EducationInput;
