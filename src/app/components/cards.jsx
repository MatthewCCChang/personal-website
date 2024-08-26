import Image from "next/image";
import Link from "next/link";

export default function Cards({img, title, description, github, background}) {
    const colors = {
        "white": "bg-white text-black w-[32%] my-5 mx-2 shadow-md rounded-md shadow-white overflow-hidden",
        "blue": "bg-blue-500 text-white w-[32%] my-5 mx-2 shadow-md rounded-md shadow-blue-500 overflow-hidden"
    }
    return(
        <div className={colors[background]}>
            {/* <div className="relative">
             <Image src={img} layout="fill" objectFit="cover" alt='img'></Image> 
            </div> */}
            <img class="w-full" src={img} alt="Sunset in the mountains"></img>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <Link href={github}>View</Link>
            </div>
        </div>
    )
}