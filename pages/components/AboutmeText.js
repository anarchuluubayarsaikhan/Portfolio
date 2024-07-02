import { About } from "./About";
import { Introduction } from "./Introduction";
import { Availability } from "./availability";
import { Location } from "./location";
import { Social } from "./social";

export function AboutmeText() {
    return (
      <div>
            <Introduction/>
            <About/>
            <Location/>
            <Availability/>
            <Social/>
      </div>
    )
}