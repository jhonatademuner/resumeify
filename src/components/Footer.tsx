import Logo from "./Logo";

export default function Footer(){
  return (
    <footer className="w-full flex justify-center items-center bg-secondary opacity-80 py-16">
    <div className="flex flex-col justify-between items-center 2xl:w-[1536px] lg:w-[1024px] text-white gap-8 px-2">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col justify-between items-start gap-8">
          <Logo />
          <div className="flex flex-col">
            <p className="2xl:text-2xl font-semibold">Contact Me -</p>
            <a
              href="mailto:jhonata.demuner@gmail.com"
              className=" text-gray-300 2xl:text-xl font-medium"
            >
              jhonata.demuner@gmail.com
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center 2xl:text-2xl text-gray-200 font-bold gap-32">
          <a href="https://github.com/jhonatademuner">Github</a>
          <a href="https://www.linkedin.com/in/jhonatademuner/">
            LinkedIn
          </a>
          <a href="https://jhonatapolito.live/">My Website</a>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-300"></div>
      <p className="2xl:text-2xl font-semibold text-gray-300">
        © 2024 Jhonata Demuner. All rights reserved.
      </p>
    </div>
  </footer>
  );
}