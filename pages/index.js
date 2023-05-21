import { useState, useEffect,useRef } from "react";
import Loading from "./loading";
import Navbar from './navbar'
import Menu from '../components/menu'
import {DiJavascript} from 'react-icons/di'
import {FaJava} from 'react-icons/fa'
import {SiPython} from 'react-icons/si'
import Head from "next/head";
import MyAudioPlayer from "@/components/MyAudioPlayer";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [js,setJs]=useState(true)
  const [java,setJava]=useState(false)
  const [python,setPython]=useState(false)
  const handleJs=()=>{
    setJs(true)
    setJava(false)
    setPython(false)
  }
  const handlejava=()=>{
    setJs(false)
    setJava(true)
    setPython(false)
  }
  const handlePython=()=>{
    setJs(false)
    setJava(false)
    setPython(true)
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);
 
  useEffect(() => {
    const startDate = new Date('2021-06-07');

    const intervalId = setInterval(() => {
   
      const secondsSinceStart = Math.floor((new Date() - startDate) / 1000);

      setSeconds(secondsSinceStart);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const date = new Date();
  const year = date.getFullYear();
  const age = year - 2004;
  return (
    
    <div  >
      {/* <p className={'absolute top-6 right-6 text-3xl text-white cursor-pointer'} >music</p> */}
      {/* <MyAudioPlayer /> */}
     <Head>
      <title>Diwas</title>
     </Head>
      {isLoading ? (
        <Loading/>
      ) : (
        <div >
           <Navbar/>
           <div className="flex pl-32 max-sm:pl-6 pt-10 text-white h-screen  justify-between items-center flex-wrap ">
           <div>
            <h1 className="w-50% text-[#CAC7C7]">Hello, I am
              
            </h1>
           <h2 className="text-5xl text-[#fadadd ]  font-bold  shadow-white pl-4"> Diwas Niroula</h2>
           <h2 className="text-xl max-sm:pt-5 text-[#CAC7C7]"> -Fullstack web developer</h2>
           <h2 className="text-xl text-[#CAC7C7]"> -Student</h2>
            <h2 className="text-xl text-[#CAC7C7]"> -Freelancer</h2>

            <h1 className=" text-xl text-[#CAC7C7]">-Coding since <span className="">{seconds} </span> seconds </h1>
           </div>
           
           <div>
           {
            js && <div className="w-96 h-56  bg-[#242424] text-[#f0f0f0] shadow-2xl rounded-lg  max-sm:hidden font-mono text-sm">
            <p className="pl-7 pt-5 pb-1">1 <span className="pl-3">class Person {'{'}</span>    </p>
            <p className="pl-7 pb-1 ">2<span className="pl-7 ">constructor(name,address,age) {'{'}</span>    </p>
             <p className="pl-7 pb-1 ">3 <span className="pl-11 ">this.name=&quot;Diwas Niroula&quot;;</span>    </p>
             <p className="pl-7 pb-1">4 <span className="pl-11 ">this.address=&quot;Birtamode&quot;;</span>    </p>
             <p className="pl-7 pb-1">5<span className="pl-11 ">this.age={age};</span>    </p>
             <p className="pl-7 pb-1">6 <span className="pl-11 ">{'}'}</span>    </p>
             <p className="pl-7 pb-1">7 <span className="pl-7 ">{'}'}</span>    </p>
            </div>
           }
           {
            java && <div className="w-96 h-56 bg-[#242424] shadow-2xl text-[#f0f0f0] rounded-lg  max-sm:hidden font-mono text-sm">
            <p className="pl-7 pt-5 pb-1">
              1<span className="pl-3">class Person {'{'}</span>
            </p>
            <p className="pl-7 pb-1">
              2<span className="pl-7">public Person{'('}String name, String <span className="pl-11">address, int age{')'}</span> {'{'}</span>
            </p>
            <p className="pl-7 pb-1">
              3 <span className="pl-11">this.name = &quot;Diwas Niroula&quot;;</span>
            </p>
            <p className="pl-7 pb-1">
              4 <span className="pl-11">this.address = &quot;Birtamode&quot;;</span>
            </p>
            <p className="pl-7 pb-1">
              5 <span className="pl-11">this.age = {age};</span>
            </p>
            <p className="pl-7 pb-1">
              6 <span className="pl-7">{'}'}</span>
            </p>
            <p className="pl-7 pb-1">
              7 <span className="pl-3">{'}'}</span>
            </p>
          </div>
          
           }
           {
            python && <div className="w-96 h-56 bg-[#242424] text-[#f0f0f0] shadow-2xl rounded-lg max-sm:hidden font-mono text-sm">
            <p className="pl-7 pt-5 pb-1">
              1 <span className="pl-3">class Person {'{'}</span>
            </p>
            <p className="pl-7 pb-1">
              2 <span className="pl-7">def __init__{'('}self, name, address, <span className="pl-11">age{')'}:</span></span>
            </p>
            <p className="pl-7 pb-1">
              3 <span className="pl-11">self.name = &quot;Diwas Niroula&quot;</span>
            </p>
            <p className="pl-7 pb-1">
              4 <span className="pl-11">self.address = &quot;Birtamode&quot;</span>
            </p>
            <p className="pl-7 pb-1">
              5<span className="pl-11">self.age = {age}</span>
            </p>
            <p className="pl-7 pb-1">
              6 <span className="pl-7">{'}'}</span>
            </p>
            <p className="pl-7 pb-1">
              7 <span className="pl-3">{'}'}</span>
            </p>
          </div>
          
           }
           <div className="flex max-sm:hidden justify-center gap-5">
            <DiJavascript onClick={handleJs} className={`text-white  text-5xl mt-[-20px]  hover:text-yellow-400 cursor-pointer ${js ? 'text-yellow-400' :  'text-white'}`}/>
            <FaJava onClick={handlejava} className={`${java ? 'text-purple-400' : 'text-white'}   text-5xl mt-[-20px]  hover:text-purple-400 cursor-pointer `}/>
            <SiPython onClick={handlePython} className={`  text-5xl mt-[-20px]  hover:text-[#4584b6] cursor-pointer ${python ? 'text-[#4584b6]' :  'text-white'}`}/>
            
           </div>
           </div>
         
           </div>
          <Menu/>
        </div>
      )}

    </div>
  );
};

export default HomePage;
