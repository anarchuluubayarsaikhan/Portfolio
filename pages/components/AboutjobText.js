import { ExperienceName } from "./ExperienceName";
import { Myavailability } from "./availableLocation";
import { Social } from "./social";

export function AboutjobText() {
    return (
      <div className="flex flex-col gap-12 xl: order-1">
            <ExperienceName/>
            <Myavailability/>
            <Social/>
      </div>
    )
}