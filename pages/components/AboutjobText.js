import { ExperienceName } from "./ExperienceName";
import { Myavailability } from "./availableLocation";
import { Social } from "./social";

export function AboutjobText() {
    return (
      <div className="flex flex-col gap-12">
            <ExperienceName/>
            <Myavailability/>
            <Social/>
      </div>
    )
}