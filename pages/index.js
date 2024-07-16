
import { Aboutjob} from "./components/Aboutjob";
import { Aboutme } from "./components/Aboutme";
import Allexperiences from "./components/Allexperience";
import { Header } from "./components/header";
import { Skills } from "./components/skills";
import { Works } from "./components/works";


export default function Home() {
  return (
    <main>
      <Header/>
      <Aboutjob/>
      <Aboutme/>
      <Skills/>
      <Allexperiences/>
      <Works/>
    </main>
  );
}