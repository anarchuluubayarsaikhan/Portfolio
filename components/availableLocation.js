import { Availability } from "./availability";
import { Location } from "./location";

export function Myavailability() {
    return (
      <div className="flex flex-col gap-2 ">
            <Location/>
            <Availability/>
      </div>
    )
}