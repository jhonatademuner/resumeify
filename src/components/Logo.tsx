import Image from "next/image";
import LogoImg from "@/assets/logo.svg";

export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Image src={LogoImg} alt="Logo" width={64} height={64} />
      <p className=" text-[#893BFF] text-3xl font-bold">esumeify</p>
    </div>
  );
}
