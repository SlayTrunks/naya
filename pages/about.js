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

Hi, I'm Insane from Kathmandu nepal,

I'm a passionate full-stack developer constantly learning and improving my skills. My experience includes working with modern web technologies such as Reactjs and Node.js to create optimized websites. I believe in solving real-life problems through programming and enjoy exploring new technologies.

<span >
Currently, I am exploring new opportunities in the field of software engineering where I can apply my skills and contribute to meaningful projects. When I'm not coding, I enjoy spending time with nature, playing chess, and meeting friends. My development process is very hands-on and I always strive to do something new and innovative.
</span>
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