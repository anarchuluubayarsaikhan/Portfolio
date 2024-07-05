import Image from "next/image";

const Card = ({props}) => {
    const listItems = props.listItems;
    return (
        <div className="bg-gray-100 w-4/5  m-auto grid grid-cols-3 justify-between gap-20 px-8 py-8 drop-shadow-md"> 
            <Image src="/logo-upwork.jpg" width={100} height={100}/>     
            <div className="flex flex-col gap-4">
                <p className="text-gray-900 text-xl font-semibold">{props.title}</p>
                <ul className="list-disc text-gray-600 text-base font-normal mx-4">
                    {listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-row  text-gray-600 text-base font-normal">
                <p>{props.startDate}</p> -
                <p>{props.endDate}</p>
            </div>
         
        </div>
     )
}
export default Card;