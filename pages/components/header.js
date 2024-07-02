import { Logo } from "./Logo";
import { Menu } from "./menu";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <div className="grid grid-flow-col justify-between mx-4 my-4">
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
