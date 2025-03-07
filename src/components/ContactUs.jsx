import React from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import contactImg from '../assets/contact.jpg';
import { SiGmail } from 'react-icons/si';

const ContactUs = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-orange-100 to-white flex flex-col md:flex-row justify-center items-center" id='ContactUs'>
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="w-full md:w-1/2 p-6">
                <img className='opacity-70 rounded-full h-full w-full object-cover' src={contactImg} alt="Contact" />
            </div>
            <div className="relative z-10 w-full md:w-1/2 p-10 bg-orange-50 bg-opacity-20 rounded-lg shadow-xl">
                <div className='text-center mb-6'>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
                    <span className="text-4xl font-bold text-gray-900 mb-2">Let's</span>
                    <span className="text-4xl font-bold text-blue-600 mb-2">Talk</span>
                </div>
                <div className='m-10'>
                    <span className='text-4xl text-blue-500 hover:text-gray-400 m-5 font-bold'>Email</span>
                    <p className='text-xl text-gray-500 hover:text-gray-400 m-5 '>stairsskill@gmail.com</p>
                </div>
                <div className='m-10'>
                    <div className='text-4xl text-blue-500 hover:text-gray-400 m-5 font-bold text-wrap'>Fill out Google Form</div>
                    <div className="my-5"><a className='text-xl text-gray-500 hover:text-gray-400 m-5 underline' href="https://docs.google.com/forms/d/e/1FAIpQLSds4xtiL7DVU--rVjXkttTR4EnEVhd5MpUYW4b_GYnJoyxAwA/viewform?usp=header">Google Form</a></div>
                </div>
                <div className='flex justify-center text-3xl m-2 gap-6 my-5'>
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
                <div className="text-center mt-10">
                    <a href="mailto:stairsskill@gmail.com">
                        <button className='px-14 py-5 shadow-2xl border-2 rounded-full text-2xl border-black hover:scale-105 hover:bg-gray-200 hover:border-blue-500 transition-transform'>
                            Contact
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
