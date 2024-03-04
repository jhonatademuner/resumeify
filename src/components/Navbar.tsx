export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-16 h-full text-black text-2xl font-medium">
      <a href="/resume/create" className="">
        CREATE
      </a>
      <p>|</p>
      <a href="/resume/improve" className="">
        IMPROVE
      </a>
      <p>|</p>
      <a href="/resume/check" className="">
        CHECK
      </a>
    </nav>
  );
}
