import ResumeForm from "@/components/ResumeForm";
import React from "react";

const ResumeBuilder = () => {
  return (
    <section className="flex flex-col 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px]">
      <ResumeForm />
    </section>
  );
};

export default ResumeBuilder;
