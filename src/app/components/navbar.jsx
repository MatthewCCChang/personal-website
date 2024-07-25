import Link from "next/link";

//still need to adjust the height of the links, maybe wrap with button?, try with padding for each li
export default function Navbar() {
    return (
        // <div className="flex justify-end  bg-red-500 w-screen h-20">
        //     <ul className=" pt-5 h-full bg-blue-400 flex-row"> 
        //         <li className="h-full content-center inline mx-5 text-2xl "> 
        //         <Link href="/" >Home</Link>
        //         </li>
        //         <li className="inline mx-5 text-2xl">
        //         <Link href="/projects" >Projects</Link>
        //         </li>
        //         <li className="inline mx-5 text-2xl">
        //         <Link href="/gallery" >Gallery</Link>
        //         </li>
        //         <li className="inline mx-5 text-2xl">
        //         <Link href="/resume" >Resume</Link>
        //         </li>
        //     </ul>
            

        // </div>
        <nav className=""> 
        <div className="flex justify-between">
            <div className=" bg-red-500 flex-wrap inline mx-5 text-2xl ">
            <Link href="/" >Matthew</Link>
            </div>
            <div className=" flex gap-8 p-3 bg-blue-400 "> 
                 <Link href="/projects" >Projects</Link>
    
                 <Link href="/gallery" >Gallery</Link>
     
                 <Link href="/resume" >Resume</Link>
             </div>
        </div>
            
        </nav>
    );
}