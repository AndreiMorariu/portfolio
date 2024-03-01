import { SiCsharp } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import {
  BiLogoMongodb,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
} from 'react-icons/bi';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { TbSql } from 'react-icons/tb';

import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { HoverEffect } from './components/card-hover-effect';

const items = [
  { icon: <AiFillHtml5 className='text-white w-20 h-20' />, title: 'HTML' },
  { icon: <DiCss3 className='text-white w-20 h-20' />, title: 'CSS' },
  {
    icon: <BiLogoJavascript className='text-white w-20 h-20' />,
    title: 'JavaScript',
  },
  {
    icon: <BiLogoTypescript className='text-white w-20 h-20' />,
    title: 'TypeScript',
  },
  { icon: <BiLogoReact className='text-white w-20 h-20' />, title: 'React' },
  { icon: <FaNodeJs className='text-white w-20 h-20' />, title: 'NodeJS' },
  { icon: <SiCsharp className='text-white w-20 h-20' />, title: 'C#' },
  { icon: <TbSql className='text-white w-20 h-20' />, title: 'SQL' },
  {
    icon: <BiLogoMongodb className='text-white w-20 h-20' />,
    title: 'MongoDB',
  },
];

function App() {
  return (
    <div className='bg-zinc-900 font-mono overflow-hidden'>
      <div className='container mx-auto py-6 px-3 flex flex-col gap-y-'>
        <Header />
        <HoverEffect items={items} />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
