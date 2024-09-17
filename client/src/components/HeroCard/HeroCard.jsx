import React from 'react';

import wave from '../../assets/wave Gif.gif';
import { FaReact } from "react-icons/fa";

import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import CyberCrime from '../../assets/cyber.png';
import SC from '../../assets/sc and st.jpg';
import Women from '../../assets/women.jpg';
import Children from '../../assets/children.jpg';
import State from '../../assets/state.jpg'; 
import Economic from '../../assets/Economic.jpg';


const ServiceData = [
    {
        title: "Cyber Crimes ",
        content: "software realted crimes ",
        description: "used for astronomical observations, capturing stunning images of the univers.",
        // icon: <FaReact className='text-7xl' />
        img: CyberCrime,
        aosDelay: "300",
    },
    {
        title: "Crime Against Sc and St",
        content: "it is about the section crimes ",
        description: ", it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory ",
        img: SC,
        aosDelay: "700",

    }, {
        title: "Crime Against Women ",
        content: "type of crime related to women abuse ",
        description: "part of the global Positioning system (GPS) used for navigation  ",
        img:Women,
        aosDelay: "700",
    },{
        title: "Crime Against Children",
        content: "this is about children abuse ",
        description: "part of the global Positioning system (GPS) used for navigation  ",
        img:Children,
        aosDelay: "700",
    },{
        title: "Offense Against State ",
        content: "this is related to corruption",
        description: "part of the global Positioning system (GPS) used for navigation  ",
        img:State,
        aosDelay: "700",
    },{
        title: "Economic Offense ",
        content: "this is the abuse of economy of nation ",
        description: "part of the global Positioning system (GPS) used for navigation  ",
        img:Economic,
        aosDelay: "700",
    }
];


const HeroCard = () => {
    return (
        <>
            <section className="bg-blue-500">
                <div className="container">
                    <div className='min-h-[400px]'>
                        <div>
                            <div className='grid grid-cols-1 sm:grid-cols-3  gap-6 relative z-10'>
                                {ServiceData.map((data, index) => {
                                    return (
                                        <div
                                            data-aos="fade-up"
                                            data-aos-delay={data.aosDelay}
                                            className='min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto '
                                        >
                                           <img src={data.img} alt={data.title} className='text-7xl' />
                                            <h1>{data.title}</h1>
                                            <p>{data.content}</p>
                                            <p className='text-sm'>
                                                {data.description}

                                            </p>

                                        </div>
                                    )
                                })}
                            </div>
                            <img src={wave} alt=""
                                className='h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]'
                            />





                        </div>





                    </div>



                </div>










            </section>









        </>








    )








}


export default HeroCard;