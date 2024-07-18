import Image from "next/image";

export function Profile() {
    return (
        <div className="relative m-auto w-full xl:max-w-[280px] xl:max-h-[320px]">
            <Image src="/Pic.jpg" width={240} height={280} className="xl:order-2 z-10 w-full xl:max-w-[280px] xl:max-h-[320px]"/>
            {/* <div className="bg-gray-200 w-[280px] h-[280px] absolute top-5 z-0"></div> */}
        </div>
    )
}