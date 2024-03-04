import Logo from "./Logo";
import Navbar from "./Navbar";
import LoginBtn from "./LoginBtn";

export default function Header() {
  return (
    <header className="flex items-center justify-center w-full h-20">
      <div className="flex items-center justify-between h-full 2xl:w-[1536px]">
        <a href="/">
          <div className="flex items-center w-48">
            <Logo />
          </div>
        </a>
        <Navbar />
        <div className="flex items-center justify-end w-48">
          <LoginBtn />
        </div>
      </div>
    </header>
  );
}
