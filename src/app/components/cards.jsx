import Image from "next/image";
import Link from "next/link";

export default function Cards({img, title, description, github}) {
    return(
        <div className="bg-white text-black w-[32%] my-5 mx-2 shadow-lg rounded">
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