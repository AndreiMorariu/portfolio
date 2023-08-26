import Skill from './Skill';

const MAIN = ['HTML', 'CSS', 'JavaScript', 'React'];
const SIDE = ['Tailwind', 'Node.js', 'MongoDB', 'MySQL', 'PHP'];

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
        <div className='flex flex-col gap-2'>
          {MAIN.map((skill, i) => (
            <Skill key={i} skill={skill} />
          ))}
        </div>
      </div>
      <div>
        <h2 className='text-2xl mb-2 font-bold'>Technologies I worked with</h2>
        <div className='flex flex-col gap-2'>
          {SIDE.map((skill, i) => (
            <Skill key={i} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
