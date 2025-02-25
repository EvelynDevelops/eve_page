"use client";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const words = ["Software Engineer", "Developer"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [delay, setDelay] = useState(150); 
  const [typingSpeed, setTypingSpeed] = useState(120); 
  const [deletingSpeed, setDeletingSpeed] = useState(70);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < words[index].length) {
      timeout = setTimeout(() => {
        setText(words[index].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(words[index].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else {
      if (!isDeleting) {
        setTimeout(() => setIsDeleting(true), 1000); 
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length); // 0 -> 1 -> 2 -> 0
        setCharIndex(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="bg-white dark:bg-gray-800 ">
      <div className="h-auto  text-black flex flex-col-2 md:flex-row items-center justify-center px-48 py-20">
        
        {/* Left-side Person Information */}
        <div className="md:w-4/5 text-center md:text-left">
          <h1 className="text-5xl font-bold">Hi, I'm Evelyn</h1>
          <h2 className="text-3xl font-medium text-gray-600 mt-2">&lt;{text}|&gt;</h2>

          <div className="mt-4 space-x-2">
            <span className="text-blue-500 font-semibold">#Freelancer</span>
            <span className="text-green-500 font-semibold">#Creative Thinker</span>
            <span className="text-purple-500 font-semibold">#Lifelong Learner</span>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-600 max-w-md">
            I'm a passionate software engineer specializing in modern application development. I enjoy designing clean, efficient, and scalable software solutions with a strong focus on user experience and performance.
          </p>

          {/* Soical media */}
          <div className="mt-6 flex space-x-6">
            <a href="https://github.com/EvelynDevelops" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-2xl">
              <FaGithub />
            </a>
            <a href="https://au.linkedin.com/in/evelyn-yin-03850222b" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-2xl">
              <FaLinkedin />
            </a>
            <a href="mailto:yinyuchen2000@gmail.com" className="text-gray-600 hover:text-black text-2xl">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        {/* Right side - Profile photo */}
        <div className="w-64 aspect-square rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
          <img src="/images/profile.jpg" alt="avatar" className="w-full h-full rounded-full border-4 border-gray-300 shadow-md object-cover"/>
        </div>
      </div>

      {/* About Me Section */}
      <div className="bg-gray-100 dark:bg-gray-900 py-20 px-10 md:px-48 text-black dark:text-white">
        <h2 className="text-4xl font-bold text-center md:text-left mb-6">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
          I am a dedicated and passionate software engineer with a keen interest in modern web development. 
          I have experience in building scalable applications, optimizing performance, and creating user-friendly experiences.
          My journey in tech has allowed me to work on diverse projects, ranging from front-end UI/UX development to full-stack solutions.
        </p>

        {/* Skills */}
        <h3 className="text-2xl font-semibold mt-8">Skills & Technologies</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">React</span>
          <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold">Next.js</span>
          <span className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">JavaScript</span>
          <span className="bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold">TypeScript</span>
          <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Node.js</span>
          <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Tailwind CSS</span>
          <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">GraphQL</span>
          <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-semibold">MongoDB</span>
          <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">PostgreSQL</span>
        </div>
      </div>
    </div>
  );
}
  

