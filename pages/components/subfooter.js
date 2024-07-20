import Link from "next/link";
import { FaCopyright } from "react-icons/fa";
export function Subfooter() {
    return (
      <div className="flex justify-center items-center gap-2 bg-gray-50 py-6 xl:py-6 xl:px-20  dark:bg-gray-950">
        <FaCopyright />
        <p className="dark:text-dark-600 text-sm font-normal">2023 | <Link href="https://www.figma.com/design/1N3zLLqiy7So3QN1bguznZ/Personal-Portfolio-Website?node-id=1-461&t=NIQoktbBrxD9gpMq-0" className="underline">Designed</Link> and <Link href="https://www.figma.com/design/1N3zLLqiy7So3QN1bguznZ/Personal-Portfolio-Website?node-id=1-461&t=NIQoktbBrxD9gpMq-0" className="underline">coded</Link> ♥️ by Sagar Shah</p>
      </div> 
    );
  }