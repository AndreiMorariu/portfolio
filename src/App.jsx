import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='bg-zinc-900 font-mono overflow-hidden'>
      <div className='container mx-auto py-6 px-3 flex flex-col gap-y-5 divide-y-4 divide-slate-300 xl:w-5/6'>
        <Header />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
