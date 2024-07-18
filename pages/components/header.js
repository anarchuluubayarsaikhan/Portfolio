import { Logo } from "./Logo";
import { Menu } from "./menu";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <div className="flex justify-between">
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
