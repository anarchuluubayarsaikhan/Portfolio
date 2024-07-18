import Image from "next/image";

const Card = ({props}) => {
    const listItems = props.listItems;
    return (
        <div className=" w-full m-auto flex flex-col gap-4  p-8 drop-shadow-md xl:max-w-[896px] rounded-xl">
            <div className="flex flex-col gap-y-4 xl:flex xl:flex-row xl:items-center "> 
                <Image src="/logo-upwork.jpg" width={100} height={100} className="order-1 xl:flex-1 "/>     
                <p className="text-gray-900 xl:flex-1 text-xl font-semibold order-3 xl:order-2">{props.title}</p>
                <div className="flex xl:flex-1 flex-row  text-gray-600 text-base font-normal order-2 xl:order-3">
                    <p>{props.startDate}</p> -
                    <p>{props.endDate}</p>
                </div>
            </div>
            <ul className="list-disc text-gray-600 text-base font-normal mx-4 order-4 xl:place-items-center">
                {listItems.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
     )
}
export default Card;