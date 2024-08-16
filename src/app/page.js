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
          <div className="w-full text-5xl font-mono">
            <h1>Welcome to my website</h1>
          </div>
          <div className="w-full">
            <h1 className="m-3 text-4xl mb-5">
              I'm Matthew Chang, student and software developer with experience
              in full stack applications, machine learning, and DevOps.
            </h1>
          </div>

          <div className=" w-full text-4xl">
            <h1>Contributed to 32 repositories, worked with 100+, </h1>
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
