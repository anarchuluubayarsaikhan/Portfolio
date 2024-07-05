import { Aboutmeimg } from "./Aboutmeimg";
import { AboutmeText } from "./Aboutmetext";


export function AboutmeImgText() {
    return (
      <div className="flex flex-col gap-12 w-4/5 m-auto xl:grid xl:grid-cols-2 xl:gap-20">
            <Aboutmeimg/>
            <AboutmeText/>
      </div>
    )
}