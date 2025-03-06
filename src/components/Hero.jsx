import React, { useRef, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import hero from '../assets/hero.jpg';
import './Hero.css';
import ContactUs from './ContactUs';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SiGmail } from "react-icons/si";

const Hero = () => {
    const splittedText = "SkillStairs".split("");
    const titleRef = useRef();
   
    const charRefs = useRef([]);

    useGSAP(() => {
        gsap.from(titleRef.current, {
          
            opacity:0,
            duration: 2,
            repeat: -1,
            yoyo:true
           
        });
    });

   

    useEffect(() => {
        gsap.from(charRefs.current, {
            opacity:0,
            duration: 0.3,
            y: 50,
            stagger: 0.08,
            delay:1
         
        });
    }, []);

    return (
        <div className="relative min-h-screen bg-cover bg-center flex flex-col md:flex-row justify-between items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-200 to-white"></div>
            <div className="relative z-10 p-8 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    <div ref={titleRef} className="text-blue-800" >SkillStairs</div>
                    <br /><br />
                    <span className='text-black'>We are</span>
                    <div className=" text-6xl md:text-9xl">
                        {splittedText.map((char, index) => (
                            <span
                                ref={(el) => (charRefs.current[index] = el)}
                                className='inline-block  bg-gradient-to-r from-blue-800 to-blue-400 text-transparent bg-clip-text'
                                key={index}
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                </h1>
                <br />
                <p className="text-xl md:text-2xl text-gray-600 mb-6">
                    A content marketing agency
                </p>
                <br />
                <p className="text-lg text-gray-700 mb-6 font-bold playwrite-gb-j-font">
                    We are a team of enthusiastic individuals who help brands grow by unleashing the potential of social media.
                </p>
                <br />
                <a href="#ContactUs">
                    <button className="text-black border-2 rounded-full font-semibold py-3 px-6 hover:bg-gray-300 transition duration-300">
                        Contact Us
                    </button>
                </a>
                <br />
                <div className='flex text-3xl gap-2 my-5'>
                    <span>
                        <a href="https://www.instagram.com/skillstairs.co" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </span>
                    <span>
                        <a href="http://www.linkedin.com/in/varunsharma0505" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </span>
                    <span>
                        <a href="mailto:stairsskill@gmail.com" target="_blank" rel="noopener noreferrer">
                        <SiGmail />
                        </a>
                    </span>
                </div>
            </div>

           
            <div className='hidden md:block md:w-[70%] '>

              
                <img  className='rounded-3xl opacity-100 mt-5 mr-9 border-black backdrop-blur-3xl w-[90%] md:w-auto' src={hero} alt="heroImg" />
            </div>
        </div>
    );
}

export default Hero;
