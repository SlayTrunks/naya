import React, { useState } from 'react'
import Navbar from '../pages/navbar'
import Head from 'next/head'
import Image from 'next/image'
import projects from '../json/projects.json'

const Projects = () => {
  const [items, setItems] = useState(projects)
  return (
    <div className='wrapper'>
   
      
      {/* <div className='pl-32 pt-11 flex flex-wrap '>
        <div className="h-[16.5rem] w-48 bg-gray-600 flex flex-col  ">
          <Image src={'/code.png'} width={250} height={0}/>
          <div className="text-center text-pink-400 text-2xl">Instagram clone</div>
          <div>

          </div>
        </div>
      </div> */}
     


    

    </div>
  )
}

export default Projects