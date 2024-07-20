import { FiGithub } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import Link from "next/link";

const icons= [
    {link: "https://github.com/",
     icon: <FiGithub className="h-6 w-6"/>
    },
    {link: "https://x.com/",
        icon: <FaTwitter className="h-6 w-6"/>
    },
    {link: "https://www.figma.com",
        icon: <FaFigma className="h-6 w-6"/>
    }
]

export function Social () {
    return (
        <div className="flex gap-2">
            {icons.map((icon)=> (
            <Link href={icon.link}>{icon.icon}</Link>))}
         </div>  
        );
}