

import React, { useState, useRef, useEffect } from 'react';
import {RxSpeakerModerate,RxSpeakerOff} from 'react-icons/rx'

const MyAudioPlayer = () => {
 
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
      // Retrieve previous state from local storage
      const prevIsPlaying = localStorage.getItem('isPlaying') === 'true';
      setIsPlaying(prevIsPlaying);
    }, [isPlaying]);
  
    useEffect(() => {
      // Save current state to local storage
      localStorage.setItem('isPlaying', isPlaying.toString());
    }, [isPlaying]);
  
    useEffect(() => {
      // Load audio and set default volume
      audioRef.current = new Audio('/audio1.mp3');
      audioRef.current.volume = 0.5;
  
      // If audio was previously playing, start it automatically
      if (isPlaying) {
        audioRef.current.play();
      }
  
      // Cleanup function to pause audio and reset state
      return () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      };
    }, []);

  return (
    <div>
       {
      
      isPlaying ? <RxSpeakerOff onClick={togglePlay} className={'absolute top-6 right-6 text-3xl text-white cursor-pointer'}/> : <RxSpeakerModerate onClick={togglePlay} className={'absolute top-6 right-6 text-3xl text-white cursor-pointer'}/>
      }
    </div>
  );
};

export default MyAudioPlayer;
