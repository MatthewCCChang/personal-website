import Image from "next/image";
import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    
    <div className="justify-center flex">
      <Navbar/>
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