import { Social } from "./social";
import { CiMail } from "react-icons/ci";
import { PiFilesDuotone } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";

export function Footer() {
    return (
      <div className="flex flex-col place-items-center gap-12 mt-24 xl:mt-24 xl:mb-24">
        <span className="bg-gray-200 rounded-xl px-5 py-2 text-gray-600 font-medium text-sm">
          Get in touch
        </span>
        <div className="text-gray-600 font-normal text-xl">
            What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
        </div>
        <div className="flex flex-col gap-4 place-items-center">
            <div className="flex gap-5">
                <CiMail className="w-8 h-8"/>
                <p className="text-gray-900 font-semibold text-4xl">reachsagarshah@gmail.com</p>
                <PiFilesDuotone className="w-8 h-8"/>
            </div>
            <div className="flex gap-5">
                <FiPhone className="w-8 h-8"/>
                <p className="text-gray-900 font-semibold text-4xl">+91 8980500565</p>
                <PiFilesDuotone className="w-8 h-8"/>
            </div>
        </div>
        <div className="flex flex-col gap-2 place-items-center">
            <p className="text-gray-600 font-normal text-base">You may also find me on these platforms!</p>
            <Social/>
        </div>
      </div> 
    );
  }
  