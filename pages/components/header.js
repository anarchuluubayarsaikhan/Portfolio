import { Logo } from "./Logo";
import { Menu } from "./menu";

export function Header() {
  return (
    <div className="grid grid-flow-col justify-between mx-4 my-4">
      <div> <Logo /> </div>
      <div><Menu/></div>
    </div> 
  );
}
