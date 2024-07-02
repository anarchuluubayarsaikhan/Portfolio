import { AboutmeText } from "./AboutmeText";
import { Profile } from "./profile";

export function Aboutme() {
    return (
      <div className="xl:grid grid-flow-col justify-between gap-32">
            <Profile/>
            <AboutmeText/>
      </div>
    )
}