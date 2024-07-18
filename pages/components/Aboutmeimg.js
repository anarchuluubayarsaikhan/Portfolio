import Image from "next/image";

export function Aboutmeimg() {
    return (
      <Image src="/Picture.jpg" height={300} width={300} className="m-auto w-full xl:max-w-[440px] xl:max-h-[520px]"/>
      
    )
}