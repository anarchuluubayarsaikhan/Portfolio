import { AboutmeImgText } from "./AboutmeImjText";
// import { Aboutmebutton } from "./Aboutmebutton";


export function Aboutme() {
    return (
      <div className="flex flex-col gap-6  xl:flex-col xl:gap-12 bg-gray-50 xl: max-w-screen-xl xl:m-auto py-16 px-4 xl:py-24 xl:px-20  dark:bg-gray-900">
            {/* <Aboutmebutton/> */}
            <AboutmeImgText/>
      </div>
    )
}