import Image from "next/image";

import HeroCardsImg from "@/assets/hero-cards.png";
import SampleFormImg from "@/assets/sample-form.png";

import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden relative">
        {/* Background Radial Gradient*/}
        <div className="absolute -right-[15%] h-[90%] top-[5vh] w-[128rem] bg-[#433BFF] rounded-[50%] rotate-0 blur-[300px] opacity-40 -z-10"></div>
        {/* Background Radial Gradient*/}
        <div className="absolute top-20 right-[calc(15%+5rem)] h-[90%] w-[36rem] bg-[#2F27CE] rounded-[50%] rotate-15 blur-[300px] opacity-30 -z-10"></div>

        <Header />

        {/* Hero Section */}
        <section className="flex justify-between items-center min-h-screen 2xl:w-[1536px] lg:w-[1024px]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-black">
                STAND OUT IN THE VACANCIES!
              </p>
              <div className="flex relative justify-center items-end shrink-0 flex-nowrap">
                <div className="flex bg-text-accent opacity-20 h-1/2 w-full absolute -bottom-2"></div>
                <h1 className=" text-6xl font-bold text-black text-nowrap z-10">
                  Craft a Impact Resume.
                </h1>
              </div>
              <p className="text-6xl font-bold text-black">
                Unlock potential.
                <br />
                Get Noticed.
              </p>
              <p className="text-lg font-medium text-black leading-6">
                Our advanced tools make it fast and easy to improve, or do your
                <br />
                best resume, which will pass ATS and get You Standing Out In
                <br />
                All Your Applies.
              </p>
            </div>
            <button className=" py-2 px-4 bg-black rounded-xl text-white w-fit h-fit text-xl">
              Get Started
            </button>
          </div>
          <Image
            src={HeroCardsImg}
            alt="Hero Cards Image"
            className=" max-w-[48rem]"
          />
        </section>

        {/* Feature Section */}
        <section className="flex justify-center items-center min-h-screen 2xl:w-[1536px] lg:w-[1024px] relative">
          <h2 className="text-center text-black text-[3.5rem] leading-none font-bold absolute top-8">
            Craft a powerful resume with
            <br />
            our intuitive platform.
          </h2>
          <div className="flex justify-between items-center gap-12">
            <Image
              src={SampleFormImg}
              alt="Sample Form Image"
              className=" max-w-[48rem]"
            ></Image>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-8">
                <div className="flex relative justify-center items-end shrink-0 flex-nowrap">
                  <div className="flex bg-[#D9D9D9] opacity-50 h-1/5 w-[30rem] absolute bottom-0 right-16"></div>
                  <h2 className=" text-5xl text-black font-bold z-10">
                    A Hassle-Free and User-Friendly
                    <br />
                    Way to Create a New Resume
                  </h2>
                </div>
                <p className="text-lg font-medium text-black leading-6">
                  Just by filling out a pre-made form with the really important
                  stuff, you will
                  <br />
                  already have a nice and compelling resume ready to go and can
                  start applying
                  <br />
                  to the best companies out there.
                </p>
              </div>
              <button className=" py-2 px-4 bg-black rounded-xl text-white w-fit h-fit text-xl">
                Create a New Resume
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
