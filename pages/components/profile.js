import Image from "next/image";

export function Profile() {
    return (
        <Image src="/Pic.jpg" width={300} height={300} className="m-auto xl:order-2"/>
    )
}