import { FiGithub } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import Link from "next/link";

const icons= [
    {link: "https://github.com/",
     icon: <FiGithub className="h-6 w-6 dark:text-white"/>
    },
    {link: "https://x.com/",
        icon: <FaTwitter className="h-6 w-6 dark:text-white"/>
    },
    {link: "https://www.figma.com",
        icon: <FaFigma className="h-6 w-6 dark:text-white"/>
    }
]

export function Social () {
    return (
        <div className="flex gap-2">
            {icons.map((icon, index)=> (
            <Link href={icon.link} key={index}>{icon.icon}</Link>))}
         </div>  
        );
}