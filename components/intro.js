import Image from "next/image";
import { About } from "./about";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export function Intro() {
  return (

      <div className="flex h-screen bg-black pt-5" id="intro">
        <div className="flex-1 text-white flex flex-col gap-10 justify-center items-center">
          <About/>
          <Link href="https://github.com/anarchuluubayarsaikhan" target="blank">
          <FaGithub color="white" size={32}/>
          </Link>
          
        </div>
        <div className="flex-1 flex  flex-col justify-center items-center">
          <div className="p-1 hover:bg-gradient-to-t hover:from-gray-400 hover:via-blue-950 rounded-lg hover:cursor-pointer overflow-hidden max-w-[300px] max-h-[600px]">
            <Image
              src="/allpics/profile.jpg"
              width={300}
              height={600}
              className="rounded-lg w-full h-full aspect-auto object-cover"
            />
          </div>
        </div>
      </div>
  );
}
