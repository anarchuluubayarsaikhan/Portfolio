import { AboutmeBtnImg } from "./AboutmeBtnImj";
import { AboutmeText } from "./Aboutmetext";


export function Aboutme() {
    return (
      <div className="flex flex-col gap-12 xl:grid xl: grid-cols-2 xl:gap-48 w-4/5 m-auto my-24">
            <AboutmeBtnImg/>
            <AboutmeText/>
      </div>
    )
}