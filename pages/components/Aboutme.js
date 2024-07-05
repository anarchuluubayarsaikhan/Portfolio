import { AboutmeImgText } from "./AboutmeImjText";
import { Aboutmebutton } from "./Aboutmebutton";


export function Aboutme() {
    return (
      <div className="flex flex-col gap-6  xl:flex-col xl:gap-12  w-4/5 m-auto my-24">
            <Aboutmebutton/>
            <AboutmeImgText/>
      </div>
    )
}