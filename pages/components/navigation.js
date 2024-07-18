import { MdOutlineWbSunny } from "react-icons/md";

const navs= ["About", "Work", "Testimonials", "Contact"]
export function Navigation() {
    return (
      <div className="text-gray-600 font-semibold text-base flex gap-6 items-center">
        <div className="flex gap-6">
          {navs.map((nav) => 
            <p>{nav}</p>)}
        </div>
        <div>|</div>
        <div className="flex gap-4 items-center">
          <div><MdOutlineWbSunny className="h-8 w-8 "/></div>
          <button className="bg-gray-900 w-32 h-9 rounded-xl py-1.5 px-4 text-gray-50 text-base font-medium">Download_CV </button>
        </div>
      </div>
    );
  }