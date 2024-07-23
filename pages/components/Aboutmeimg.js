import Image from "next/image";

export function Aboutmeimg() {
    return (
        <div className=" m-auto w-full xl:aspect-[5/6] bg-gray-200 xl:max-w-[400px] xl:max-h-[480px] aspect-square mt-11">
              <Image src="/Picture.jpg" width={280} height={360}  alt="Picture" className="xl:order-2 xl:w-full h-full block relative xl:bottom-8 xl:right-8 xl:left-[32px] xl:object-cover xl:max-w-[400px] xl:max-h-[480px] w-5/6 left-[8%] bottom-10 z-10"/>
        </div>
      
    )
}