import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export function Contact() {
  return (
    <div className="bg-black opacity-90 py-14 px-6 lg:px-0 flex gap-20 justify-center items-center text-white">
      <div className="flex gap-4 items-center">
        <FaPhoneAlt color="white" size={32} />
        <div>
          <p  className="font-bold lg:text-lg text-base">Холбогдох дугаар</p>
          <p className="font-normal lg:text-sm text-xs">88259370</p>
        </div>
      </div>
        <a href="mailto:anarchulu@gmail.com" className="flex gap-4 items-center">
        <MdOutlineEmail color="white" size={32} />
        
        <div>
          <p className="font-bold lg:text-lg text-base">Имэйл хаяг</p>
          <p className="font-normal lg:text-sm text-xs">anarchulu@gmail.com</p>
        </div>
        </a>
      </div>
  );
}
