import '@/styles/globals.css'
import Navbar from './navbar'
import {HiSpeakerWave} from 'react-icons/hi'
import { useState,useEffect,useRef } from 'react';
import {RxSpeakerModerate,RxSpeakerOff} from 'react-icons/rx'
import {MdMusicOff,MdMusicNote} from 'react-icons/md'


// import { useState ,useRef, useEffect} from 'react';


 

 
export default function App({ Component, pageProps }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    audioRef.current = new Audio('/audio1.mp3');
    audioRef.current.volume = 0.5; // set default volume
  }, []);
  
 
  return (
 
    
      <div className='wrapper text-cyan-400' >
         {
      
      isPlaying ? <MdMusicOff onClick={togglePlay} className={'absolute  top-6 right-6 text-3xl text-white cursor-pointer'}/> : <MdMusicNote onClick={togglePlay} className={'absolute top-6 right-6 text-3xl text-white cursor-pointer'}/>
      }
      
        <Component {...pageProps} /> 
      </div>

  )
 
}
