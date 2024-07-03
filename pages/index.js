
import { Aboutjob} from "./components/Aboutjob";
import { Aboutme } from "./components/Aboutme";
import { Header } from "./components/header";


export default function Home() {
  return (
    <main>
      <Header/>
      <Aboutjob/>
      <Aboutme/>
    </main>
  );
}