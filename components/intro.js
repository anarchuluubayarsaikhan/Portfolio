import Image from "next/image";
import { About } from "./about";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export function Intro() {
  return (

      <div className="flex flex-col lg:flex-row lg:h-screen bg-black lg:pt-5" id="intro" >
        <div className="lg:flex-1 text-white flex flex-col gap-3 lg:gap-10 justify-center items-center order-2 lg:order-1 py-6 lg:py-0">
          <About/>
          <Link href="https://github.com/anarchuluubayarsaikhan" target="blank">
          <FaGithub color="white" size={32}/>
          </Link>
          
        </div>
        <div className="lg:flex-1 flex flex-col justify-center px-16 lg:px-0 items-center py-12 lg:py-0 order-1 lg:order-2">
  <div className="p-1 hover:bg-gradient-to-t hover:from-gray-400 hover:via-blue-950 rounded-lg hover:cursor-pointer overflow-hidden lg:max-w-[300px] max-w-full w-full">
    <Image
      src="/allpics/profile.jpg"
      width={300}
      height={600}
      className="rounded-lg w-full h-auto object-contain"
    />
  </div>
</div>
      </div>
  );
}
