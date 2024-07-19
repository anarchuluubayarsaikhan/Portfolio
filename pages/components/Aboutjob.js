
import { AboutjobText } from "./AboutjobText";
import { Profile } from "./profile";

export function Aboutjob() {
    return (
      <div className="flex flex-col gap-12  xl:flex-row-reverse xl:gap-32 my-24 xl: max-w-screen-xl xl:pl-4 xl:pr-4 xl:m-auto xl:mt-24 xl:mb-24">
            <Profile/>
            <AboutjobText/>
      </div>
    )
}