
import { AboutjobText } from "./AboutjobText";
import { Profile } from "./profile";

export function Aboutjob() {
    return (
      <div className="flex flex-col gap-12 xl:grid xl: grid-flow-col xl:justify-between xl:gap-32 w-4/5 m-auto my-24">
            <Profile/>
            <AboutjobText/>
      </div>
    )
}