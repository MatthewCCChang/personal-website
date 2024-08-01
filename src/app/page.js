"use client";

import Navbar from "@/app/components/navbar";
import { useEffect, useState } from "react";



export default function Home() {
  const [night, setNight] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90){
        setNight(true);
      }else{
        setNight(false);
      }
    }
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    }
  },[])
  return (
    //have scroll past certain point change to night
    <div className={` mb-12 flex flex-row flex-wrap h-screen bg-cover ${night ? 'custom-img-night' : 'custom-img'} 
     transition-transform duration-1000`}>
      {/* <Navbar/> */}
      <div className="flex text-center text-black">
        <h1>Welcome to my website. I'm Matthew Chang, student and software developer
          with experience in full stack, machine learning, and DevOps.
        </h1>
        
      </div>
    </div>
  );
}
/* 
  I want home page to display pic of myself, some info about me like in 
  the video, no education, in the future show hackathon wins, projects
  worked on (big ones)
  -resume page shows only resume
  -gallery page shows pics
  -projects page shows large projects and small ones, highlight larger oens first

*/