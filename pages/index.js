import { Contact } from "@/components/contact";
import {Tech } from "@/components/tech";
import { Header } from "@/components/header";
import { Intro } from "@/components/intro";
import { Works } from "@/components/works";
import { Education } from "@/components/education";
import { Scroll } from "@/components/scroll";

export default function Home() {
  return (
    <main>
      <div className="lg:m-auto w-full">
      {/* <Header /> */}
      <Intro/>
       <Tech/>
      <Works/>
      {/* <Education/>
      <Contact/>
      <Scroll/>  */}
      </div>
    </main>
  );
}