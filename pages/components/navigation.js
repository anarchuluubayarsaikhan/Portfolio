import Link from "next/link";
import { MdOutlineWbSunny } from "react-icons/md";

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
          {navs.map((nav) => 
            <Link href={nav.link}>
                {nav.name}
            </Link>
            )}
        </div>
        <div>|</div>
        <div className="flex gap-4 items-center">
          <div><MdOutlineWbSunny className="h-8 w-8 "/></div>
          <button className="bg-gray-900 w-32 h-9 rounded-xl py-1.5 px-4 text-gray-50 text-base font-medium">Download_CV </button>
        </div>
      </div>
    );
  }