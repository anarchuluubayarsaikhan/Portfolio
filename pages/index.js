import { useState, useEffect } from "react";
import { Contact } from "@/components/contact";
import { Tech } from "@/components/tech";
import { Header } from "@/components/header";
import { Intro } from "@/components/intro";
import { Works } from "@/components/works";
import { Education } from "@/components/education";
import { Scroll } from "@/components/scroll";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-8 h-8 border-8 border-t-transparent border-black border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="lg:m-auto w-full">
          <Header />
          <Intro />
          <Tech />
          <Works />
          <Education />
          <Contact />
          <Scroll />
        </div>
      )}
    </main>
  );
}
