import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <div className='bg-zinc-900 font-mono overflow-hidden'>
      <div className='container mx-auto py-6 px-3 flex flex-col'>
        <Header />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
