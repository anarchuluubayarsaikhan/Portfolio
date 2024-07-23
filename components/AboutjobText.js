import { Myavailability } from "./availableLocation";
import { Experiencename } from "./ExperienceName";
import { Social } from "./social";

export function AboutjobText() {
    return (
      <div className="flex flex-col gap-12 xl:order-1 flex-1 ">
            <Experiencename/>
            <Myavailability/>
            <Social/>
      </div>
    )
}