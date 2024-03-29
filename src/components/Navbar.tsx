export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-16 h-full text-black text-xl font-medium">
      <a href="/resume/create" className=" rotate-5">
        <button className=" xl:py-2 xl:px-4 py-1 px-2 text-white bg-[#807DAB] opacity-80 rounded-xl shadow-[-5px_5px_30px_0px_rgba(0,0,0,0.3)]">
          Create
        </button>
      </a>
      <a href="/resume/improve" className=" -rotate-5">
        <button className=" xl:py-2 xl:px-4 py-1 px-2 text-white bg-[#807DAB] opacity-80 rounded-xl shadow-[-5px_5px_30px_0px_rgba(0,0,0,0.3)]">
          Improve
        </button>
      </a>
      <a href="/resume/check" className=" rotate-5">
        <button className=" xl:py-2 xl:px-4 py-1 px-2 text-white bg-[#807DAB] opacity-80 rounded-xl shadow-[-5px_5px_30px_0px_rgba(0,0,0,0.3)]">
          Check
        </button>
      </a>
    </nav>
  );
}
