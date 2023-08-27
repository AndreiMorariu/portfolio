// import { TypeAnimation } from 'react-type-animation';

// function Header() {
//   return (
//     <header className='pb-2 text-center text-white'>
//       <div className='flex items-center justify-end gap-5'>
//         <a
//           href='https://github.com/AndreiMorariu'
//           target='_blank'
//           rel='noreferrer'
//         >
//           <img src='icon-github.svg' alt='Github icon' className='h-10 z-20' />
//         </a>
//         <a
//           href='https://www.linkedin.com/in/andrei-morariu-445550259/'
//           target='_blank'
//           rel='noreferrer'
//         >
//           <img src='icon-linkedin.svg' alt='Linkedin icon' className='h-10' />
//         </a>
//       </div>
//       <img src='avatar.png' alt='' className='h-48 mx-auto mt-5' />
//       <p className='text-3xl'>
//         Nice to meet you! <br /> I&apos;m{' '}
//         <span className='text-emerald-300'>Andrei Morariu</span>.
//       </p>
//       <p className='mt-5 text-xl text-slate-200'>
//         Based in Cluj-Napoca, graduate in business computer science at UBB, with
//         a strong passion for web development.
//       </p>
//       <TypeAnimation
//         sequence={[
//           // Same substring at the start will only be typed out once, initially
//           'We produce food for Mice',
//           1000, // wait 1s before replacing "Mice" with "Hamsters"
//           'We produce food for Hamsters',
//           1000,
//         ]}
//         wrapper='span'
//         speed={50}
//         style={{ fontSize: '2em', display: 'inline-block' }}
//         repeat={Infinity}
//       />
//     </header>
//   );
// }

// export default Header;

import { TypeAnimation } from 'react-type-animation';

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
      <h1 className='text-3xl'>
        Nice to meet you! <br /> I&apos;m{' '}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Andrei Morariu.',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'a web developer.',
          ]}
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
