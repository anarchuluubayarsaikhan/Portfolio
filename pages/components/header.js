import { Logo } from "./Logo";
import { Menu } from "./menu";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <div className="flex justify-between xl: max-w-screen-xl xl:pl-4 xl:pr-4 xl:m-auto">
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
