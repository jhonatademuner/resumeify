import EducationInput from "@/components/EducationInput";
import ExperienceInput from "@/components/ExperienceInput";
import LanguageInput from "@/components/LanguageInput";
import React from "react";

const ResumeBuilder = () => {
  return (
    <section className="flex flex-col 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px]">
      <form action="POST" className="flex flex-col">
        <input
          type="text"
          placeholder="First name"
          className="border-2 border-black rounded-lg p-2 m-2"
          name="firstName"
        />
        <input
          type="text"
          placeholder="Last name"
          className="border-2 border-black rounded-lg p-2 m-2"
          name="lastName"
        />
        <input
          type="text"
          placeholder="Wanted Role"
          className="border-2 border-black rounded-lg p-2 m-2"
          name="wantedRole"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-black rounded-lg p-2 m-2"
          name="email"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="border-2 border-black rounded-lg p-2 m-2"
          name="phone"
        />
        <input
          type="text"
          placeholder="Country"
          className="border-2 border-black rounded-lg p-2 m-2"
          name="country"
        />
        <input
          type="text"
          placeholder="City"
          className="border-2 border-black rounded-lg p-2 m-2"
          name="city"
        />
        <input
          type="url"
          placeholder="Github Profile"
          className="border-2 border-black rounded-lg p-2 m-2"
        />
        <input
          type="url"
          placeholder="LinkedIn Profile"
          className="border-2 border-black rounded-lg p-2 m-2"
        />
        <input
          type="url"
          placeholder="Portfolio Link"
          className="border-2 border-black rounded-lg p-2 m-2"
        />
        <textarea
          placeholder="Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills."
          className="border-2 border-black rounded-lg p-2 m-2"
          name="professionalSummary"
        />

        <ExperienceInput />
        <EducationInput />
        <LanguageInput />

        <textarea
          placeholder="Write your best skills."
          className="border-2 border-black rounded-lg p-2 m-2"
          name="skills"
        />

        <button
          className="bg-black text-white p-2 m-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ResumeBuilder;
