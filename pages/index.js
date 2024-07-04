
import { Aboutjob} from "./components/Aboutjob";
import { Aboutme } from "./components/Aboutme";
import { Header } from "./components/header";
import { Skills } from "./components/skills";


export default function Home() {
  return (
    <main>
      <Header/>
      <Aboutjob/>
      <Aboutme/>
      <Skills/>
    </main>
  );
}