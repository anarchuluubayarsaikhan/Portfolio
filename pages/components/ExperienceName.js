
import { Experience } from "./experience";
import { Name } from "./introduction";

export function Experiencename () {
    return (
        <div className="flex flex-col gap-2">
            <Name/>
            <Experience/>
      </div>
    );
}