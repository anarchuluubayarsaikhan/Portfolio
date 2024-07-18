
import { AboutjobText } from "./AboutjobText";
import { Profile } from "./profile";

export function Aboutjob() {
    return (
      <div className="flex flex-col gap-12  xl:flex-row-reverse xl:gap-32 my-24 xl:">
            <Profile/>
            <AboutjobText/>
      </div>
    )
}