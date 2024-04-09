import React from "react";

import EducationInput from "@/components/EducationInput";
import ExperienceInput from "@/components/ExperienceInput";
import LanguageInput from "@/components/LanguageInput";
import FormDivider from "./FormDivider";

const ResumeForm = () => {
  return (
    <form
      action="POST"
      className="flex justify-between flex-wrap w-1/2 bg-secondary opacity-80 rounded-xl p-2 relative overflow-x-hidden gap-2 mb-12"
      id="resumeForm"
    >
      <div className="absolute right-[5%] h-[90%] top-8 w-1/3 bg-pink-gradient rounded-[50%] rotate-15 blur-[150px] opacity-30 -z-10"></div>
      <div className="absolute top-20 right-[15%] h-[90%] w-1/2 bg-tertiary rounded-[50%] rotate-5 blur-[150px] opacity-40 -z-10"></div>

      <input
        type="text"
        placeholder="Wanted Role"
        className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-full"
        name="wantedRole"
      />
      <input
        type="text"
        placeholder="First name"
        className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-full lg:max-w-[calc(50%-0.25rem)]"
        name="firstName"
      />
      <input
        type="text"
        placeholder="Last name"
        className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-full lg:max-w-[calc(50%-0.25rem)]"
        name="lastName"
      />
      <input
        type="email"
        placeholder="Email"
        className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-full lg:max-w-[calc(50%-0.25rem)]"
        name="email"
      />
      <input
        type="tel"
        placeholder="Phone"
        className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-full lg:max-w-[calc(50%-0.25rem)]"
        name="phone"
      />
      <input
        type="text"
        placeholder="Country"
        className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-full lg:max-w-[calc(50%-0.25rem)]"
        name="country"
      />
      <input
        type="text"
        placeholder="City"
        className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-full lg:max-w-[calc(50%-0.25rem)]"
        name="city"
      />
      <input
        type="url"
        placeholder="Github Profile"
        className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-full lg:max-w-[calc(33%-0.25rem)]"
      />
      <input
        type="url"
        placeholder="LinkedIn Profile"
        className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-full lg:max-w-[calc(33%-0.25rem)]"
      />
      <input
        type="url"
        placeholder="Website Link"
        className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-full lg:max-w-[calc(33%-0.25rem)]"
      />
      <textarea
        placeholder="Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills."
        className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-full h-24"
        name="professionalSummary"
      />

      <FormDivider title="Experience" />

      <ExperienceInput />

      <FormDivider title="Education" />

      <EducationInput />

      <FormDivider title="Language" />

      <LanguageInput />

      <FormDivider title="Skills" />

      <textarea
        placeholder="Write your best skills."
        className="bg-form-fields bg-opacity-50 rounded-lg px-2 py-1 text-lg text-form-text placeholder-form-text placeholder-opacity-50 outline-none w-full h-24"
        name="skills"
      />

      <button className="bg-black text-white p-2 rounded-lg w-full">Submit</button>
    </form>
  );
};

export default ResumeForm;
