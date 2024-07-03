import { SlSocialGithub } from "react-icons/sl";
import { TbBrandTwitter } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
export function Social () {
    return (
        <div className="flex gap-2">
            <div>
                <SlSocialGithub className="h-6 w-6"/>
            </div>
            <div>
                <TbBrandTwitter className="h-6 w-6"/>
            </div>
            <div>
                <FiFigma className="h-6 w-6"/>
            </div>
        </div>
        

    );
}