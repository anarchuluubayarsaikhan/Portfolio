import Link from "next/link";
import { FaCopyright } from "react-icons/fa";
export function Subfooter() {
    return (
      <span className="flex justify-center items-center gap-2 bg-gray-50 py-3 mt-16 xl:mt-24 xl:mb-24">
        <FaCopyright />
        <p>2023 | <Link href="https://www.figma.com/design/1N3zLLqiy7So3QN1bguznZ/Personal-Portfolio-Website?node-id=1-461&t=NIQoktbBrxD9gpMq-0">Designed</Link> and <Link href="https://www.figma.com/design/1N3zLLqiy7So3QN1bguznZ/Personal-Portfolio-Website?node-id=1-461&t=NIQoktbBrxD9gpMq-0">coded</Link> ♥️ by Sagar Shah</p>
      </span> 
    );
  }