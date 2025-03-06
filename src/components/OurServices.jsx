import React from 'react';

import './Hero.css';
import { FaInstagram } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineStock } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";


const OurServices = () => {
    const services = [
        {
            Title: 'Social media management',
            subTitle: "Instagram, LinkedIn and more",
            description: "Amplify your social media impact through expert management services. We devise captivating strategies for heightened engagement, follower growth, and extensive reach.",
            icon: <FaInstagram />
        },
        {
            Title: 'Content development',
            subTitle: "Blogs, videos, and more",
            description: "Create and edit compelling content that resonates with your audience. From blog posts to videos, we craft engaging narratives that drive engagement and conversions.",
            icon: <TfiWrite />
        },
        {
            Title: 'SEO Optimization',
            subTitle: "Improve your search rankings",
            description: "Boost your online visibility with our expert SEO services. We optimize your website to rank higher on search engines, driving organic traffic and increasing conversions.",
            icon: <AiOutlineStock />
        },
        {
            Title: 'Influencer Marketing',
            subTitle: "Targeted campaigns",
            description: "Reach your audience with personalized email campaigns. We design and execute email marketing strategies that drive engagement and conversions with brand.",
            icon: <IoIosPeople />
        },
        {
            Title: 'Graphic Design',
            subTitle: "Logos, branding, and more",
            description: "Enhance your brand's visual identity with stunning graphic design. From logos to marketing materials, we create designs that captivate and convert.",
            icon:<SiAdobeillustrator />
        },
        {
            Title: 'Web Development',
            subTitle: "Responsive and modern",
            description: "Build a robust online presence with our web development services. We create responsive, modern websites that engage users and drive conversions.",
            icon: <FaLaptopCode /> 
        },
    ];
    

    return (
        <div className="container min-w-screen  min-h-screen bg-gradient-to-r align-middle from-blue-100 to-orange-50 py-6 flex items-center justify-center flex-col">
   <div>      <h1 className= "font-bold text-4xl flex justify-center items-baseline my-6 ">OUR SERVICES</h1></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 align-middle w-[80%]  " >
                {services && services.map((service, index) => (
                    <div 
                
                        key={index} 
                        className="p-11 bg-gradient-to-r from-orange-50 to-blue-100 border border-gray-200 rounded-lg shadow-lg hover:to-white hover:from-blue-100 hover:shadow-xl transition duration-300 hover:scale-110 hover:border-4 hover:border-blue-400"
                    >
                       <div className='flex justify-between '> <span className="text-2xl font-bold mb-2 text-black">{service.Title}</span>
                       <span className="text-3xl font-bold  text-black"> {service.icon} </span></div>
                        <h4 className="text-md text-gray-950 mb-2">{service.subTitle}</h4>
                        <p className="text-gray-500 text-xl font-semibold ">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
