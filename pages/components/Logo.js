import Image from "next/image";

export function Logo() {
  return (
        <div>
          <Image src="/Logo.png" height={36} width={96}  alt="Logo"  className="block dark:hidden"/>
          <Image src="/_.png" height={36} width={96}  alt="Logo"   className="hidden dark:block"/>
        </div>
  );
}
