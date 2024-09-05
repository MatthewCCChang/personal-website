import Image from "next/image";
import Link from "next/link";

export default function Cards({img, title, description, github, background}) {
    const colors = {
        "magenta": "bg-pink-600 text-white w-[32%] my-5 mx-2 shadow-md rounded-md shadow-pink-700 overflow-hidden",
        "blue": "bg-blue-500 text-white w-[32%] my-5 mx-2 shadow-md rounded-md shadow-blue-500 overflow-hidden ",
        "purple": "bg-purple-400 text-white w-[32%] my-5 mx-2 shadow-md rounded-md shadow-purple-500 overflow-hidden "

    }
    return(
        <div className={colors[background]}>
            {/* <div className="relative">
             <Image src={img} layout="fill" objectFit="cover" alt='img'></Image> 
            </div> */}
            <img className="w-full object-cover aspect-video" src={img} alt="image"></img>
            <div className="px-1 text-lg">
                <h1>{title}</h1>
            </div>
            <div className="px-1">
                <p>{description}</p>
            </div>
            <div className="hover:underline px-1">
                <Link href={github}>View</Link>
            </div>
        </div>
    )
}