import Image from "next/image";
import GuyImg from "@/assets/handsome-guy-with-beard-wearing-casual-outfit_1258-38620.png";
import AiImg from "@/assets/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.png"

export default function HeroCards() {
  return (<>
		<div className="flex relative w-full justify-center items-center">

			{/* ========== MAIN CARD ========== */}
			<div className="flex bg-[#DEDCFF] rounded-3xl w-[23rem] h-[34rem] relative overflow-hidden justify-center">
				<div className="absolute left-4 -top-[30%] w-[36rem] h-[36rem] bg-text-accent opacity-60 blur-[100px] rounded-[50%] rotate-25"></div>
				<div className="flex flex-col justify-between items-center z-10">
					<p className="text-white text-lg">Make your</p>
					<p className="text-white text-2xl font-bold underline">BEST RESUME</p>
					<Image src={GuyImg} alt="Guy Image"></Image>
				</div>
			</div>

			{/* ========== AI HELPER ========== */}
			<div className="flex bg-[#807DAB] opacity-80 rounded-3xl w-72 h-[10rem] overflow-hidden justify-center items-center absolute z-10">
				<div className="absolute mb-6 ml-6 w-36 h-36 bg-text-accent rounded-[50%] blur-[50px] opacity-50"></div>
				<div className="absolute mt-6 mr-6 w-36 h-36 bg-pink-500 rounded-[50%] blur-[50px] opacity-50"></div>
				<div className="flex flex-col items-center w-full h-full">
					<p className="z-10 text-white text-lg text center">Improve It with<br/>AI Assistance</p>
					<Image src={AiImg} alt="AI Image" className="absolute"></Image>
				</div>
			</div>

		</div>
	</>);
}
