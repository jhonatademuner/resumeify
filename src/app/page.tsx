import Image from "next/image";

import HeroCardsImg from "@/assets/hero-cards.png";
import SampleFormImg from "@/assets/sample-form.png";
import AiHelperImg from "@/assets/ai-helper.png";

import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-0 justify-center items-center gap-8 min-h-screen 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] px-2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col 2xl:gap-2 xl:gap-1">
            <p className="2xl:text-lg font-semibold text-black">
              STAND OUT IN THE VACANCIES!
            </p>
            <div className="flex flex-col leading-tight 2xl:gap-2 xl:gap-1 gap-0 ">
              <div className="flex relative items-end shrink-0 flex-nowrap w-fit">
                <div className="flex bg-text-accent opacity-20 h-1/2 w-full absolute 2xl:-bottom-2 xl:-bottom-1"></div>
                <h1 className=" 2xl:text-6xl xl:text-5xl sm:text-[2.5rem] font-bold text-black text-nowrap z-10">
                  Craft a Impact Resume.
                </h1>
              </div>
              <p className="2xl:text-6xl xl:text-5xl sm:text-[2.5rem] font-bold text-black">
                Unlock potential.
                <br />
                Get Noticed.
              </p>
            </div>
            <p className="2xl:text-lg font-medium text-black leading-6">
              Our advanced tools make it fast and easy to improve, or do your
              <br />
              best resume, which will pass ATS and get You Standing Out In
              <br />
              All Your Applies.
            </p>
          </div>
          <button className=" py-2 px-4 xl:text-xl bg-black rounded-xl text-white w-fit h-fit text-lg">
            Get Started
          </button>
        </div>
        <Image
          src={HeroCardsImg}
          alt="Hero Cards Image"
          className=" 2xl:max-w-[48rem] xl:max-w-[40rem] sm:max-w-[32rem] hidden sm:block"
        />
      </section>

      {/* Feature Section */}
      <section className="flex justify-center items-center min-h-screen 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] relative px-2 ">
        <div className="flex flex-col text-center text-black 2xl:text-[3.5rem] 2xl:gap-6 xl:text-[2.75rem] xl:gap-2 sm:text-4xl font-bold absolute top-8">
          <p>Craft a powerful resume with</p>
          <p>our intuitive platform.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 ">
          <Image
            src={SampleFormImg}
            alt="Sample Form Image"
            className=" 2xl:max-w-[48rem] xl:max-w-[40rem] sm:max-w-[32rem] hidden sm:block"
          ></Image>
          <div className="flex flex-col gap-6 shrink-0">
            <div className="flex flex-col gap-8">
              <div className="flex relative items-end shrink-0 flex-nowrap">
                <div className="flex bg-form-fields opacity-50 h-1/5 absolute bottom-0 2xl:w-[30rem] 2xl:right-16 xl:w-[22.5rem] xl:right-[4rem] sm:w-[19rem] sm:right-12"></div>
                <h2 className=" 2xl:text-5xl xl:text-4xl sm:text-3xl text-black font-bold z-10">
                  A Hassle-Free and User-Friendly
                  <br />
                  Way to Create a New Resume
                </h2>
              </div>
              <p className="2xl:text-lg font-medium text-black leading-6 2xl:w-[42rem] xl:w-[34rem] lg:w-[28rem] sm:w-[28rem] text-wrap">
                Just by filling out a pre-made form with the really important
                stuff, you will already have a compelling resume ready to go and
                can start applying to the best companies out there.
              </p>
            </div>
            <button className=" py-2 px-4 bg-black rounded-xl text-white w-fit h-fit text-xl">
              Create a New Resume
            </button>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="flex justify-center items-center min-h-screen 2xl:w-[1536px] lg:w-[1024px] px-2">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 ">
          <div className="flex flex-col gap-6 shrink-0">
            <div className="flex flex-col gap-8">
              <div className="flex relative items-end shrink-0 flex-nowrap">
                <div className="flex bg-text-accent opacity-20 h-1/5 absolute bottom-0 2xl:w-52 2xl:left-8 xl:w-40 xl:left-6 sm:w-[8.5rem] sm:left-5"></div>
                <h2 className=" 2xl:text-5xl xl:text-4xl sm:text-3xl text-black font-bold z-10">
                  Improve Your Resumes by Using
                  <br />a AI Helper
                </h2>
              </div>
              <p className="2xl:text-lg font-medium text-black leading-6 2xl:w-[42rem] xl:w-[34rem] lg:w-[28rem] sm:w-[28rem] text-wrap">
                Ditch the hassle of crafting introductions and tailoring skills
                lists! Our AI helper takes care of that. Simply provide your
                skills and a job URL from LinkedIn, and it will generate a
                custom resume for each application.
              </p>
            </div>
            <button className=" py-2 px-4 bg-black rounded-xl text-white w-fit h-fit text-xl">
              Customize your Resume
            </button>
          </div>
          <Image
            src={AiHelperImg}
            alt="Ai Helper Image"
            className=" 2xl:max-w-[48rem] xl:max-w-[40rem] sm:max-w-[32rem] hidden sm:block"
          ></Image>
        </div>
      </section>
    </>
  );
};

export default Home;
