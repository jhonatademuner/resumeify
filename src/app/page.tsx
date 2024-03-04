import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden relative">

        {/* Background Radial Gradient*/}
        <div className="absolute -right-[15%] h-[90vh] top-[5vh] w-[128rem] bg-[#433BFF] rounded-[50%] rotate-0 blur-[300px] opacity-40"></div>
        {/* Background Radial Gradient*/}
        {/* <div className="absolute top-20 right-[calc(15%+5rem)] h-[90vh] w-[36rem] bg-[#2F27CE] rounded-[50%] rotate-15 blur-[0px] opacity-30"></div> */}

        <Header />

      </main>
    </>
  );
}
