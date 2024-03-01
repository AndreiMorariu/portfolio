import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header className='pb-2 text-center text-white'>
      <div className='flex items-center justify-end gap-5'>
        <a
          href='https://github.com/AndreiMorariu'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin className='w-10 h-10 hover:opacity-70' />
        </a>
        <a
          href='https://www.linkedin.com/in/andrei-morariu-445550259/'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub className='w-10 h-10 hover:opacity-70' />
        </a>
      </div>
      <img src='avatar.png' alt='' className='h-48 mx-auto mt-5' />
      <h1 className='text-3xl'>
        Nice to meet you! <br /> I&apos;m{' '}
        <TypeAnimation
          sequence={['Andrei Morariu.', 1000, 'a web developer.']}
          cursor='false'
          wrapper='span'
          speed={1}
          className='text-emerald-300'
          repeat={Infinity}
        />
      </h1>
      <p className='mt-5 text-xl text-slate-200'>
        Based in Cluj-Napoca, graduate in business computer science at UBB, with
        a strong passion for web development.
      </p>
    </header>
  );
}

export default Header;
