"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    //space themed: add little stars that are yellow, include shades of blue and purple, gray and silver/
    <div className="  mb-12 flex flex-row justify-center flex-wrap h-screen bg-black w-full">
      {/* <Navbar/> */}
      <div className="flex flex-row text-white-500 mt-5 font-mono h-[80%]">
        <div className="basis-3/4 text-center flex-column">
          <div className="w-full text-5xl font-mono mb-5 justify-center flex">
            {/* <h1 className="text-yellow-400 text-3xl pb-5">✦</h1> */}
            {/* <h1>I'm Matthew Chang</h1> */}
            {/* <h1 className="text-yellow-400 text-3xl pt-5">✦</h1> */}
          </div>
          <div className="w-full text-5xl font-mono bg-gradient-to-r from-blue-300 via-purple-400 to-gray-300 inline-block text-transparent bg-clip-text">
            <h1>Software Engineer</h1>
          </div>
          <div className="w-full">
            <h1 className="m-3 text-3xl mb-5">
              Student and software developer with experience
              building full stack applications, machine learning projects, and
              DevOps monitoring systems.
            </h1>
          </div>

          <div className=" w-full text-7xl mt-5">
            <h1>2+ years of experience, contributed to 32 repositories</h1>
          </div>
        </div>
        <div className="basis-1/4 object-contain ">
          <Image
            src={"/Profile.jpg"}
            width={400}
            height={400}
            alt="Image of Matthew Chang"
          />
        </div>
        {/*image*/}

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
