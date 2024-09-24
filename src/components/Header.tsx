import { FaGithub, FaLinkedin } from "react-icons/fa";

import { FlipWords } from "./flip-words";

const words = ["Andrei Morariu", "a Web Developer"];

function Header() {
  return (
    <header className="pb-2 text-center text-white antialiased relative">
      <div className="flex items-center justify-end gap-5">
        <a
          href="https://github.com/AndreiMorariu"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="w-10 h-10 hover:opacity-70" />
        </a>
        <a
          href="https://www.linkedin.com/in/andrei-morariu-445550259/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="w-10 h-10 hover:opacity-70" />
        </a>
      </div>
      <img src="avatar.png" alt="avatar image" className="h-48 mx-auto mt-5" />
      <h1 className="text-3xl lg:text-4xl font-bold">
        Nice to meet you! <br /> I&apos;m <FlipWords words={words} />
      </h1>
      <p className="mt-5 text-xl lg:text-2xl text-slate-200">
        Based in Romania, graduate in business computer science at
        Babes-Bolyai University, with a strong passion for
        <span className="text-emerald-400 font-bold"> web development</span>
      </p>
    </header>
  );
}

export default Header;
