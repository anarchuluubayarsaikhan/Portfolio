import { Aboutmebutton } from "./Aboutmebutton";
import { Aboutmeimg } from "./Aboutmeimg";


export function AboutmeBtnImg() {
    return (
      <div className="flex flex-col gap-6 w-4/5 m-auto my-24 xl:flex-none">
            <Aboutmebutton/>
            <Aboutmeimg/>
      </div>
    )
}