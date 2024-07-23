import Link from "next/link";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const navs= [
    {name: "About",
      link:"https://nextjs.org/docs/messages/react-hydration-error"
    }, 
    {name:"Work",
    link:"https://nextjs.org/docs/messages/react-hydration-error"
    }, 
    {name:"Testimonials",
    link:"https://nextjs.org/docs/messages/react-hydration-error"
    }, 
    {name:"Contact",
    link:"https://nextjs.org/docs/messages/react-hydration-error"
    }
]
export function Navigation() {
    return (
      <div className="text-gray-600 font-semibold text-base flex gap-6 items-center">
        <div className="flex gap-6">
          {navs.map((nav, index) => 
            <Link href={nav.link} key={index}>
                {nav.name}
            </Link>
            )}
        </div>
        <div>|</div>
        <div className="flex gap-4 items-center">
          <div>
            <div><MdOutlineWbSunny className="h-8 w-8 dark:hidden block"/></div>
            <div><MdOutlineDarkMode className="h-8 w-8 hidden dark:block"/></div>
          </div>
          <Link href="/download.js">
              <button className="bg-gray-900 w-32 h-9 rounded-xl py-1.5 px-4 text-gray-50 text-base font-medium">Download_CV </button>
          </Link>
        </div>
      </div>
    );
  }