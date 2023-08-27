import { SiTailwindcss, SiMysql } from 'react-icons/si';
import { FaNodeJs, FaPhp } from 'react-icons/fa';
import { BiLogoMongodb, BiLogoJavascript, BiLogoReact } from 'react-icons/bi';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';

import Skill from './Skill';
import Cv from './Cv';

const MAIN = [
  <AiFillHtml5 className='text-white w-20 h-20' />,
  <DiCss3 className='text-white w-20 h-20' />,
  <BiLogoJavascript className='text-white w-20 h-20' />,
  <BiLogoReact className='text-white w-20 h-20' />,
];
const SIDE = [
  <SiTailwindcss className='text-white w-20 h-20' />,
  <FaNodeJs className='text-white w-20 h-20' />,
  <BiLogoMongodb className='text-white w-20 h-20' />,
  <SiMysql className='text-white w-20 h-20' />,
  <FaPhp className='text-white w-20 h-20' />,
];

function Skills() {
  return (
    <section className='pt-4 relative text-center text-white'>
      <img
        src='./pattern-rings.svg'
        alt=''
        className='absolute -right-20 -bottom-20 translate-x-1/2'
      />
      <div className='mb-4'>
        <h2 className='text-2xl mb-2 font-bold'>Main Technologies</h2>
        <div className='flex flex-col gap-2 items-center'>
          {MAIN.map((skill, i) => (
            <Skill key={i} skill={skill} />
          ))}
        </div>
      </div>
      <div>
        <h2 className='text-2xl mb-2 font-bold'>Technologies I worked with</h2>
        <div className='flex flex-col gap-2 items-center'>
          {SIDE.map((skill, i) => (
            <Skill key={i} skill={skill} />
          ))}
        </div>
      </div>
      <Cv />
    </section>
  );
}

export default Skills;
