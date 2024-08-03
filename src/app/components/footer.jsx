import Link from "next/link";
import Image from "next/image";

const Footer = function () {
    return(
        <div className=" flex justify-center w-full">
            <div className="ml-3 mr-3 ">
                
                <Link href="https://www.linkedin.com/in/matthew-chang-39754a216/">
                <Image src="/linkedin.png" width={20} height={20} alt="image of linkedin"/>
                </Link>
            </div>
            <div className="ml-3 mr-3 ">
            <Link href="#">
                <Image src="/github.png" width={20} height={20} alt="image of github"/>
            </Link>
            </div>
            <div className="ml-3 mr-3 ">
            <Link href="#">Email</Link>
            </div>
            
        </div>
    )
}

export default Footer;