import Link from "next/link";

export function Header(){
    return(
        <div className="hidden lg:block lg:text-center">
             <div className="text-white flex gap-6 justify-center items-center text-xl font-bold hover:cursor-pointer p-4 bg-black w-full fixed top-0 right-0 z-50 ">
            <Link href="#intro">
            ТАНИЛЦУУЛГА
            </Link>
            <Link href="#tech">
            TECH
            </Link>
            <Link href="#projects">
            ТӨСЛҮҮД
            </Link>
            <Link href="#education">
            БОЛОВСРОЛ
            </Link>
        </div>
        </div>
       
    )
}