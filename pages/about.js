import React from 'react'
import Skills from '../components/skills'
import { useState,useEffect,useRef } from 'react'
import Navbar from './navbar'
import Script from 'next/script'
import Image from 'next/image'
import Head from 'next/head'
import MyAudioPlayer from '@/components/MyAudioPlayer'


const About = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setAnimationComplete(true);
  }, []);

  return (
    <>
    <div  >
   {/* <MyAudioPlayer/> */}
    <Head>
      <title>Diwas - About</title>
     </Head>
       <Navbar/>
       <div className="flex pl-32  max-sm:pl-6 pt-10 text-[#CAC7C7] h-screen max-sm:items-start max-sm:justify-start items-center justify-around flex-wrap">
       <Image  src={'/code2.png'} alt='image' className='rounded-3xl  shadow-2xl' height={200} width={300}/>
       
       
      

    


       <h4 className='w-[50%]  max-sm:w-screen max-sm:text-sm max-md:text-base max-md:w-screen '>

       Hello! I&apos;m Diwas Niroula from Birtamode, Jhapa, Nepal. I am a passionate full-stack developer dedicated to continuously learning and enhancing my skills. My experience encompasses working with modern web technologies like React.js and Node.js to build optimized and efficient websites. I am a firm believer in using programming to tackle real-world challenges and enjoy exploring new technologies.

Currently, I am delving into Rust for its performance and safety features, and I have a growing interest in machine learning, as well as the underlying mathematics and physics that drive these innovations. I am actively seeking new opportunities in software engineering where I can apply my skills and contribute to meaningful projects.

When I&apos;m not coding, I love spending time gaming, playing chess, and connecting with friends. My development approach is very hands-on, and I always strive to create something new and innovative.

        </h4>
        
       </div>
      
    </div>
    <div className='wrapper'>
      <Skills/>
    </div>
    </>
  )
}

export default About