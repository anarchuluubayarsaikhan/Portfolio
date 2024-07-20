import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Logo } from "./Logo";
import { TiDelete } from "react-icons/ti";
import { MdOutlineWbSunny } from "react-icons/md";


export function Menu() {
    const [shown, setShown] = useState(false)
    function menuShow() {
       setShown(true)
    }

    function menuHide() {
        setShown(false)
     }
    return (
      <>
        <button onClick={menuShow}>
             <CiMenuBurger className="h-8 w-8"/>
        </button>
        <div className={shown? "block" : "hidden"}>
            <div className="bg-gray-900/10 fixed inset-0"></div>
            <div className="fixed top-0 right-0 bottom-0 w-80">
                <div className="bg-gray-100 border p-4 flex justify-between items-center">
                    <Logo/>
                    <button onClick={menuHide}>
                        <TiDelete className="h-9 w-9"/>
                    </button>
                </div>
                <div className="flex flex-col gap-4 border bg-gray-100 p-4 dark:text-dark-600">
                    <p className="text-gray-600 text-base font-medium">About</p>
                    <p className="text-gray-600 text-base font-medium">Work</p>
                    <p className="text-gray-600 text-base font-medium">Testimonials</p>
                    <p className="text-gray-600 text-base font-medium">Contact</p>
                </div>
                <div  className="flex flex-col gap-4 border bg-gray-100 p-4">
                    <div className="flex justify-between">
                        <p className=" dark:text-dark-600 text-gray-600 font-normal text-base">Switch Theme</p>
                        <div><MdOutlineWbSunny className="h-8 w-8 "/></div>
                    </div>
                    <button className="bg-gray-900 w-32 h-9 rounded-xl py-1.5 px-4 text-gray-50 text-base font-medium m-auto mb-80">Download_CV </button>
                </div>
            </div>
        </div>
      </>
    )
}
