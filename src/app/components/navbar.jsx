import Link from "next/link";


export default function Navbar() {
    return (
        <div className="flex justify-end  bg-red-500 w-screen h-20">
            <ul className=" h-full bg-blue-400 flex-row"> 
                <li className="h-full content-center inline mx-5 text-2xl">
                <Link href="/" >Home</Link>
                </li>
                <li className="inline mx-5 text-2xl">
                <Link href="/projects" >Projects</Link>
                </li>
                <li className="inline mx-5 text-2xl">
                <Link href="/gallery" >Gallery</Link>
                </li>
                <li className="inline mx-5 text-2xl">
                <Link href="/resume" >Resume</Link>
                </li>
            </ul>
            

        </div>
        

    );
}