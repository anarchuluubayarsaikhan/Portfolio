import { Experience } from "./Experience";
import { Name } from "./Introduction";

export function Experiencename () {
    return (
        <div className="flex flex-col gap-2">
            <Name/>
            <Experience/>
      </div>
    );
}