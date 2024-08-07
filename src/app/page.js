"use client";

import Navbar from "@/app/components/navbar";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    //space themed
    <div className="  mb-12 flex flex-row justify-center flex-wrap h-screen bg-black w-full">
      {/* <Navbar/> */}
      <div className="flex text-center text-white-500 mt-5 font-mono">
        {/*image*/}
        <h1>
          Welcome to my website. I'm Matthew Chang, student and software
          developer with experience in full stack, machine learning, and DevOps.
        </h1>
        {/*display number of projects and commits etc*/}
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
