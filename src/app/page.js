import Image from "next/image";
import Navbar from "@/app/components/navbar";


export default function Home() {
  return (
    
    <div className=" flex flex-row flex-wrap">
      {/* <Navbar/> */}
      <div className="flex text-center">
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