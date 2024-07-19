import Expbtnsum from "./Expbtnsum";
import ExpList from "./ExpList";

export default function Allexperiences() {
    return (
        <div className="flex flex-col gap-12 mt-24 bg-gray-50 py-24 px-20 xl: max-w-screen-xl p-4 xl:m-auto xl:mt-24 xl:mb-24">
            <Expbtnsum/>
            <ExpList/>
        </div>
    )
}