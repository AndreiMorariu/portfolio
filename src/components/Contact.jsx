import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Message from './Message';

function Contact() {
  const [sent, setSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        form.current,
        'bdgPzNFbLLO0pmT-n'
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            setSent(false);
          }, 3000);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className='pt-4 text-white relative'>
      <h2 className='text-2xl mb-2 font-bold'>Contact</h2>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
        <div className='border-b-2'>
          <input
            type='text'
            name='user_name'
            className='w-full bg-transparent focus:outline-none py-2'
            placeholder='NAME'
          />
        </div>
        <div className='border-b-2'>
          <input
            type='email'
            name='user_email'
            placeholder='EMAIL'
            className='w-full bg-transparent focus:outline-none py-2'
          />
        </div>
        <div className='border-b-2 relative z-10'>
          <img
            src='./pattern-rings.svg'
            alt=''
            className='absolute -translate-x-1/2 translate-y-1/4 -z-10'
          />
          <textarea
            name='message'
            placeholder='YOUR MESSAGE'
            className='w-full bg-transparent focus:outline-none py-2'
          />
        </div>
        <input
          type='submit'
          value='SEND MESSAGE'
          className='p-2 cursor-pointer border-b-2 border-b-emerald-300 hover:border-b-emerald-500 ml-auto'
        />
      </form>
      {sent && (
        <Message
          message={'Message Sent!'}
          className='absolute bottom-0 left-0 z-20'
        />
      )}
    </section>
  );
}

export default Contact;
