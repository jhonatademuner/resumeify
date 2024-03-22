import Header from "@/components/Header";
import HeroCards from "@/components/HeroCards";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden relative">

        {/* Background Radial Gradient*/}
        <div className="absolute -right-[15%] h-[90vh] top-[5vh] w-[128rem] bg-[#433BFF] rounded-[50%] rotate-0 blur-[300px] opacity-40 -z-10"></div>
        {/* Background Radial Gradient*/}
        <div className="absolute top-20 right-[calc(15%+5rem)] h-[90vh] w-[36rem] bg-[#2F27CE] rounded-[50%] rotate-15 blur-[300px] opacity-30 -z-10"></div>

        <Header />
        <section className="flex justify-between items-center min-h-screen 2xl:w-[1536px] lg:w-[1024px]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-black">STAND OUT IN THE VACANCIES!</p>
              <div className="flex relative justify-center items-end shrink-0 flex-nowrap">
                <div className="flex bg-text-accent opacity-20 h-1/2 w-full absolute -bottom-2"></div>
                <h1 className=" text-6xl font-bold text-black text-nowrap z-10">Craft a Impact Resume.</h1>
              </div>
              <p className="text-6xl font-bold text-black">Unlock potential.<br/>Get Noticed.</p>
              <p className="text-lg font-medium text-black leading-6">
                Our advanced tools make it fast and easy to improve, or do your<br/>
                best resume, which will pass ATS and get You Standing Out In<br/>
                All Your Applies.
              </p>
            </div>
            <button className=" py-2 px-4 bg-black rounded-xl text-white w-fit h-fit text-xl">Get Started</button>
          </div>
          <HeroCards />
          
        </section>

      </main>
    </>
  );
}
