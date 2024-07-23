import { IoLocationOutline } from "react-icons/io5";
export function Location () {
    return (
        <div className="flex items-center gap-2">
            <div>
                <IoLocationOutline className="h-6 w-6 dark:text-white"/>
            </div>
            <div className="text-gray-900 font [Inter] text-base font-normal mr-4 ml-4 mt-2 dark:text-dark-600">
                Ahmedabad, India
            </div> 
        </div>
    );
}