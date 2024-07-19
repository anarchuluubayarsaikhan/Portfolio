import { AboutmeImgText } from "./AboutmeImjText";
import { Aboutmebutton } from "./Aboutmebutton";


export function Aboutme() {
    return (
      <div className="flex flex-col gap-6  xl:flex-col xl:gap-12  my-24 xl: max-w-screen-xl xl:m-auto  xl:mt-24 xl:mb-24">
            <Aboutmebutton/>
            <AboutmeImgText/>
      </div>
    )
}