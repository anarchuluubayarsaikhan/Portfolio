import Image from "next/image";

export function Profile() {
    return (
        <div className=" m-auto w-full xl:max-w-[280px] xl:max-h-[320px]">
            <Image src="/Pic.jpg" width={240} height={280} className="xl:order-2 w-full xl:max-w-[280px] xl:max-h-[320px]"/>
        </div>
    )
}