import { Logo } from "./Logo";
import { Menu } from "./menu";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <div className="grid grid-flow-col justify-between w-4/5 m-auto">
      <div>
        <Logo/>
      </div>
      <div className="hidden xl:block">
        <Navigation/>
      </div>
      <div className="block xl:hidden">
        <Menu/>
      </div>
    </div> 
  );
}
