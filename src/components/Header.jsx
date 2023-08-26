function Header() {
  return (
    <header className='pb-2 text-center text-white'>
      <div className='flex items-center justify-end gap-5'>
        <a
          href='https://github.com/AndreiMorariu'
          target='_blank'
          rel='noreferrer'
        >
          <img src='icon-github.svg' alt='Github icon' className='h-10 z-20' />
        </a>
        <a
          href='https://www.linkedin.com/in/andrei-morariu-445550259/'
          target='_blank'
          rel='noreferrer'
        >
          <img src='icon-linkedin.svg' alt='Linkedin icon' className='h-10' />
        </a>
      </div>
      <img src='avatar.png' alt='' className='h-48 mx-auto mt-5' />
      <p className=' text-3xl'>
        Nice to meet you! <br /> I&apos;m{' '}
        <span className='text-emerald-300'>Andrei Morariu</span>.
      </p>
      <p className='mt-5 text-xl text-slate-200'>
        Based in Cluj-Napoca, graduate in business computer science at UBB.
      </p>
    </header>
  );
}

export default Header;
