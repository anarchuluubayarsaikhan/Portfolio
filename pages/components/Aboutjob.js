
import { AboutjobText } from "./AboutjobText";
import { Profile } from "./profile";

export function Aboutjob() {
    return (
      <div className="flex flex-col gap-12  py-16 px-4 xl:flex-row-reverse xl:gap-32 xl: max-w-screen-xl xl:py-24 xl:px-20 xl:m-auto dark:bg-dark-default">
            <Profile/>
            <AboutjobText/>
      </div>
    )
}