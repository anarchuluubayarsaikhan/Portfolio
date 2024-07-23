import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Logo } from "./Logo";
import { TiDelete } from "react-icons/ti";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";


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
                <CiMenuBurger className="h-8 w-8" />
            </button>
            <div className={shown ? "block" : "hidden"}>
                <div className="bg-gray-900/60 fixed inset-0"></div>
                <div className="fixed top-0 right-0 bottom-0 w-80  bg-gray-100 dark:bg-dark-700 h-[667px] z-20">
                    <div className="border p-4 flex justify-between items-center dark:border-slate-600">
                        <Logo/>
                        <button onClick={menuHide}>
                            <TiDelete className="h-9 w-9" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-4 border p-4 dark:text-dark-600 dark:border-slate-600">
                        <p className="text-gray-600 text-base font-medium">About</p>
                        <p className="text-gray-600 text-base font-medium">Work</p>
                        <p className="text-gray-600 text-base font-medium">Testimonials</p>
                        <p className="text-gray-600 text-base font-medium">Contact</p>
                    </div>
                    <div className="flex flex-col gap-4 border p-4 dark:border-slate-600">
                        <div className="flex justify-between">
                            <p className=" dark:text-dark-600 text-gray-600 font-normal text-base">Switch Theme</p>
                            <div>
                                <div><MdOutlineWbSunny className="h-8 w-8 dark:hidden block" /></div>
                                <div><MdOutlineDarkMode className="h-8 w-8 hidden dark:block"/></div>
                            </div>
                        </div>
                        <button className="bg-gray-900 w-[288px] h-9 rounded-xl py-1.5 px-4 text-gray-50 text-base font-medium m-auto dark:bg-dark-900 dark:text-dark-50">Download_CV </button>
                    </div>
                </div>
            </div>
        </>
    )
}