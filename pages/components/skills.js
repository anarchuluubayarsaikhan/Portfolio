import { Skilledprograms } from "./skilledprograms";
import { SkillsText } from "./skillsText";

export function Skills() {
    return (
      <div className="flex flex-col gap-12 xl:grid xl: grid-rows-3  xl:gap-y-1 w-4/5 m-auto my-24">
            <SkillsText/>
            <Skilledprograms/>
      </div>
    )
}