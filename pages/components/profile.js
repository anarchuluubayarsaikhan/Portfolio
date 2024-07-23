import Image from "next/image";

export function Profile() {
    return (
            <div className=" m-auto w-full xl:aspect-[5/6] bg-gray-200 xl:max-w-[280px] xl:max-h-[320px] aspect-square">
                <Image src="/Pic.jpg" width={240} height={280}  alt="Profile"  className="xl:order-2 xl:w-full h-full block relative xl:bottom-8 xl:right-8 xl:left-[-32px] xl:object-cover xl:max-w-[280px] xl:max-h-[320px] w-5/6 left-[8%] bottom-10 z-10"/>
            </div>
    )
}