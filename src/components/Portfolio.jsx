import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';



const Portfolio = () => {
    const projects = [
        {
            title: 'Social Media Strategy ',
            description: 'Developed a comprehensive social media strategy , resulting in a 50% increase in follower engagement and a 30% boost in brand visibility.',
            image: img1
        },
        {
            title: 'Content Creation for Geek for Geeks',
            description: 'Created engaging blog posts and video content for GFG, driving an 40% increase in website traffic and user retention.',
            image: img2
        },
        {
            title: 'SEO Optimization for DEF Company',
            description: 'Implemented SEO best practices for DEF Company, achieving top 10 search engine rankings for targeted keywords and a 25% increase in organic traffic.',
            image: img3
        },
        {
            title: 'Influencer Marketing Campaign for GHI Brand',
            description: 'Executed a targeted influencer marketing campaign for GHI Brand, resulting in a 45% increase in social media mentions and a 35% growth in product sales.',
            image: img3
        },
        {
            title: 'Graphic Design for a Startup',
            description: 'Designed visually stunning graphics and branding materials for a Startup, helping them establish a strong visual identity and attract new customers.',
            image: img3
        },
        {
            title: 'Web Development for MNO Enterprise',
            description: 'Built a responsive and modern website for MNO Enterprise, enhancing user experience and increasing online conversions by 50%.',
            image: img3
        }
    ];

    return (
        <div className='min-h-screen bg-gradient-to-r from-orange-50 to-blue-100 flex items-center justify-center'>
            <div className='container mx-auto p-6'>
                <h1 className='text-4xl font-bold text-center text-gray-900 mb-8'>
                    Our Portfolio
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full'>
                    {projects.map((project, index) => (
                        <div key={index} className= ' cursor-pointer p-4   transition duration-300  hover:scale-105'>
                            <img src={project.image} alt={project.title} className=' w-60 h-60   object-cover rounded-full mb-4 hover transition duration-300 hover:border-4 hover:border-gray-500' />
                            <h2 className='text-2xl font-bold text-gray-600 mb-2 '>{project.title}</h2>
                            <p className='text-gray-700 mb-4'>{project.description}</p>
                            {/* <button className='bg-orange-200 text-black font-semibold py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300'>
                                See Project
                            </button> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
