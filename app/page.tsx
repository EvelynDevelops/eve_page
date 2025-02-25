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
    <div className="bg-white dark:bg-gray-800">
      <div className="h-auto  text-black flex flex-col-2 md:flex-row items-center justify-center px-48 py-20">
        
        {/* Person Information */}
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
        

        {/* Profile photo */}
        <div className="w-64 aspect-square rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
          <img src="/images/profile.jpg" alt="avatar" className="w-full h-full rounded-full border-4 border-gray-300 shadow-md object-cover"/>
        </div>

        {/* skills */}
      </div>

    </div>
  );
}
  

