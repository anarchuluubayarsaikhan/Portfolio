
import { Aboutjob} from "./components/Aboutjob";
import { Aboutme } from "./components/Aboutme";
import Allexperiences from "./components/Allexperience";
import { Header } from "./components/header";
import { Skills } from "./components/Skillss";
import { Works } from "./components/works";


export default function Home() {
  return (
    <main className="xl: max-w-screen-xl p-4 xl:m-auto ">
      <Header/>
      <Aboutjob/>
      <Aboutme/>
      <Skills/>
      <Allexperiences/>
      <Works/>
    </main>
  );
}