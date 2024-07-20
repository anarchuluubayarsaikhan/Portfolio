import Link from "next/link";
import { Logo } from "./Logo";
import { Menu } from "./menu";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <div className="flex justify-between p-4 xl: max-w-screen-xl xl:py-4 xl:px-20 xl:m-auto dark:bg-dark-default dark:text-dark-600">
      <Link href="http://localhost:3000/">
          <Logo/>
      </Link>
      <div className="hidden xl:block">
        <Navigation/>
      </div>
      <div className="block xl:hidden">
        <Menu/>
      </div>
    </div> 
  );
}
