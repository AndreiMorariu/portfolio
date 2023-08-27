import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='bg-zinc-900 h-full font-mono overflow-hidden'>
      <div className='container mx-auto py-6 px-3 flex flex-col gap-y-5 divide-y-4 divide-slate-300 overflow-x-hidde'>
        <Header />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
