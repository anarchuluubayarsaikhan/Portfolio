import Image from "next/image";
import Link from "next/link";

export function Education() {
  const galaxyStyle = {
    backgroundColor: "black",
    backgroundImage: `
      radial-gradient(circle, rgba(118, 60, 172, 0.6) 0%, rgba(50, 15, 133, 0) 80%), 
      radial-gradient(circle, rgba(118, 60, 172, 0.6) 0%, rgba(50, 15, 133, 0) 70%), 
      radial-gradient(circle, rgba(118, 60, 172, 0.6) 0%, rgba(50, 15, 133, 0) 50%)
    `,
    backgroundPosition: `
      20% 10%, 
      50% 90%, 
      90% 30%, 
      80% 20%, 
      10% 90%
    `,
    backgroundSize: `
      400px 400px, 
      300px 300px, 
      350px 350px, 
      5px 5px, 
      12px 12px
    `,
    backgroundRepeat: "no-repeat",
  };

  return (
  
       <div
      style={galaxyStyle}
      className="flex flex-col gap-6 justify-between  bg-black hover:border py-12 px-6 lg:px-28 overflow-x-hidden"
      id="education"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-6  ">
        <h1 className="text-xl flex flex-col gap-4">
          <p className="text-white font-bold">БОЛОВСРОЛ</p>
          <div className="flex lg:gap-3 gap-1 ">
            <div className="bg-black border border-[#320F85] hover:border-white max-w-full lg:max-w-[700px] rounded-lg p-6 hover:cursor-pointer">
              <p className="text-white text-lg">Хүний их эмч /бакалавр/</p>
              <p className="text-[#767776] text-base">АШУҮИС</p>
              <p className="text-[#767776] text-base">2014-2021</p>
            </div>
            <div className="text-white bg-black border border-[#320F85] hover:border-white lg:max-w-[700px] rounded-lg p-6 hover:cursor-pointer">
              <p className="text-white text-lg">Бүрэн дунд боловсрол</p>
              <p className="text-[#767776] text-base">Шинэ Mонгол сургууль</p>
              <p className="text-[#767776] text-base">2012-2014</p>
            </div>
            <div className="text-white border border-[#320F85] hover:border-white bg-black lg:max-w-[700px] rounded-lg p-6 hover:cursor-pointer">
              <p className="text-white text-lg">Бүрэн бус дунд боловсрол</p>
              <p className="text-[#767776] text-base">Радуга сургууль</p>
              <p className="text-[#767776] text-base">2003-2012</p>
            </div>
          </div>
        </h1>
        <h1 className="text-xl flex flex-col gap-4">
          <p className="text-white font-bold">ГАДААД ХЭЛНИЙ МЭДЛЭГ</p>
          <div className="border border-[#320F85] hover:border-white bg-black max-w-72 rounded-lg p-6 hover:cursor-pointer">
            <div className="flex gap-2 items-center">
              <p className="text-white text-lg">Англи хэл:</p>
              <p className="text-[#767776] text-base">C1 түвшин</p>
            </div>
            <div className="flex gap-2">
              <p className="text-white text-lg">Орос хэл:</p>
              <p className="text-[#767776] text-base">C2 түвшин</p>
            </div>
            <div className="flex gap-2">
              <p className="text-white text-lg">Герман хэл:</p>
              <p className="text-[#767776] text-base">В2 түвшин</p>
            </div>
          </div>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <h1 className="text-xl flex flex-col gap-4">
          <p className="text-white font-bold">АЖЛЫН ТУРШЛАГА</p>
          <div className=" flex flex-col gap-4">
            <div className="text-white border border-[#320F85] hover:border-white bg-black lg:max-w-[700px] rounded-lg py-6 pl-6 pr-6 hover:cursor-pointer">
              <p className="text-white text-lg">Case manager</p>
              <p className="text-[#767776] text-base">
                Zevtronic LLC /2023.11-2024.11/
              </p>
              <ul className="text-white text-base list-disc pl-4">
                <li>Хувийн эрүүл мэндийн даатгалын тохиолдлуудыг шийдвэрлэх</li>
                <li>Бүтээгдэхүүний хөгжүүлэлтийн процессын зураглал гаргах</li>
                <li>
                  Хөгжүүлэгч,маркетинг, UI/UX дизайнерын багийг удирдан чиглүүлж
                  ажиллах
                </li>
              </ul>
            </div>
            <div className="text-white border border-[#320F85] hover:border-white bg-black lg:max-w-[700px] rounded-lg p-6 hover:cursor-pointer">
              <p className="text-white text-lg">
                Дотрын анагаах ухааны резидент эмч
              </p>
              <p className="text-[#767776] text-base">УГТЭ /2021.10-2023.10/</p>
              <ul className="text-white text-base list-disc pl-4">
                <li>
                  Эмчлүүлэгчийг үзэх, оношлох, шаардлагатай шинжилгээ эмчилгээг
                  төлөвлөх
                </li>
              </ul>
            </div>
          </div>
        </h1>
        <h1 className="text-xl flex flex-col gap-4">
          <p className="text-white font-bold">Чадвар</p>
          <div className="border border-[#320F85] hover:border-white bg-black lg:max-w-72 rounded-lg p-6 hover:cursor-pointer">
            <ul className="text-white text-base list-disc pl-4">
              <li>Баг удирдан зохион байгуулах чадвартай</li>
              <li>Хариуцлагатай</li>
              <li>Тууштай</li>
              <li>Дасан зохицох чадвартай</li>
              <li>Хөрвөх чадвартай</li>
              <li>Шинэ зүйлийг хурдан сурах чадвартай</li>
            </ul>
          </div>
        </h1>
      </div>
    </div>
   
  );
}
