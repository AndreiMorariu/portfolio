import { BackgroundBeams } from "./components/background-beams";

import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-zinc-900 font-mono overflow-hidden">
      <div className="container mx-auto py-6 px-3 flex flex-col">
        <BackgroundBeams />
        <Header />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
