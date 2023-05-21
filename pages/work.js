import React, { useState } from 'react'
import Projects from '@/components/projects'
import Navbar from './navbar'
import Head from 'next/head'
import projects from '../json/projects.json'
import Image from 'next/image'

const Work = () => {
  const [items, setItems] = useState(projects)
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Diwas - works</title>
      </Head>
     <Navbar className='fixed'/>
      
     <div className="bg-transparent container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 mx-[50%] text-pink-600">Projects</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {items.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg w-64 ">
            <Image src={project.image} alt={project.name} width={1000} height={900} className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-bold mb-2 dark:text-white">{project.name}</h2>
            <p className="text-gray-400 mb-4 dark:text-gray-300">{project.description}</p>
            <div className="flex justify-between">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-400">GitHub</a>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-400">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

     
   
    </div>
  );
};

export default Work;

/* <div className={`pl-16 h-screen flex gap-6 max-sm:pl-6 pt-7 text-[#CAC7C7] max-sm:h-[100%] max-md:h-[100%] max-lg:h-[100%]  max-sm:items-start max-sm:justify-start items-center flex-wrap mr-auto `}>
        {items.map((item) => {
          return (
            <div key={item.image} className="card shadow ">
              <Image src={item.image} className='h-24 rounded-xl' width={550} height={1000} />
              <div className="text-center text-cyan-400 text-2xl">{item.name}</div>
              <p className='text-xs mx-2 text-cyan-200'>{item.description}</p>
              <div className="flex justify-around items-start pt-4 ">
                <a href={item.github} target='_blank'><button className=".btn ml-3 text-white"> get code</button></a>
                (<a target='_blank' href={item.link}><button className=".btn text-white"> Live</button></a>)
              </div>
            </div>
          );
        })}
      </div> */

