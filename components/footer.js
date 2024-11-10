import { Social } from "./social";
import { CiMail } from "react-icons/ci";
import { PiFilesDuotone } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

export function Footer() {
    return (
      <div className="flex flex-col place-items-center gap-12 py-16 px-4 xl:py-24 xl:px-20 dark:bg-gray-950">
        {/* <span className="bg-gray-200 rounded-xl px-5 py-2 text-gray-600 font-medium text-sm dark:bg-dark-200 dark:text-dark-600">
          Get in touch
        </span> */}
        <div className="text-gray-600 font-normal text-xl dark:text-dark-600">
            What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
        </div>
        <div className="flex flex-col gap-4 place-items-center">
            <div className="flex gap-5">
                {/* <CiMail className="w-8 h-8 dark:text-white"/> */}
                <Link href="mailto:reachsagarshah@gmail.com" className="text-gray-900 font-semibold text-4xl dark:text-dark-900">reachsagarshah@gmail.com</Link>
                {/* <PiFilesDuotone className="w-8 h-8 dark:text-white"/> */}
            </div>
            <div className="flex gap-5">
                {/* <FiPhone className="w-8 h-8 dark:text-white"/> */}
                <p className="text-gray-900 font-semibold text-4xl dark:text-dark-900">+91 8980500565</p>
                {/* <PiFilesDuotone className="w-8 h-8 dark:text-white"/> */}
            </div>
        </div>
        <div className="flex flex-col gap-2 place-items-center">
            <p className="text-gray-600 font-normal text-base dark:text-dark-600">You may also find me on these platforms!</p>
            <Social/>
        </div>
      </div> 
    );
  }
  