import Link from "next/link";
import { FaLightbulb } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

function Footer(){
    return(
        <section className="footer bg-[#f0fdfa] py-[5rem] px-[10%] max-[1200px]:py-[3rem] max-[1200px]:px-[5%] max-[991px]:py-[3rem] max-[991px]:px-[2rem]">

           <div className="box-container grid grid-cols-[repeat(auto-fit,_minmax(25rem,_1fr))] gap-4">

            <div className="box">
                <h3 className="flex items-center text-[2.2rem] text-[#444] capitalize py-[1rem] "><FaLightbulb className="text-[#0eb582]"/><span  className="">educa</span></h3>
                <p className="text-[1.5rem] leading-8 text-[#777] py-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, deserunt?</p>
                <div className="share flex mt-[1rem]">
                    <Link href={"/"} className="facebook flex items-center justify-center h-[4.5rem] w-[4.5rem] leading-[4.5rem] text-[1.7rem] bg-[#0eb582] text-white mr-[.3rem] hover:bg-[#444]"><TiSocialFacebook/></Link>
                    <Link href={"/"} className="twitter flex items-center justify-center h-[4.5rem] w-[4.5rem] leading-[4.5rem] text-[1.7rem] bg-[#0eb582] text-white mr-[.3rem] hover:bg-[#444]"><AiOutlineTwitter/></Link>
                    <Link href={"/"} className="instagram flex items-center justify-center h-[4.5rem] w-[4.5rem] leading-[4.5rem] text-[1.7rem] bg-[#0eb582] text-white mr-[.3rem] hover:bg-[#444]"><IoLogoInstagram/></Link>
                    <Link href={"/"} className="linkedin flex items-center justify-center h-[4.5rem] w-[4.5rem] leading-[4.5rem] text-[1.7rem] bg-[#0eb582] text-white mr-[.3rem] hover:bg-[#444]"><IoLogoLinkedin/></Link>
                </div>
            </div>

            <div className="box">
                <h3 className="text-[2.2rem] text-[#444] capitalize py-[1rem]">quick links</h3>
                <Link href={"/"} className="link text-[1.7rem] leading-8 text-[#777] py-[1rem] block hover:text-[#0eb582] hover:underline">Home</Link>
                <Link href={"/about"} className="link text-[1.7rem] leading-8 text-[#777] py-[1rem] block hover:text-[#0eb582] hover:underline">About</Link>
                <Link href={"/courses"} className="link text-[1.7rem] leading-8 text-[#777] py-[1rem] block hover:text-[#0eb582] hover:underline">Courses</Link>
                <Link href={"/contact"} className="link text-[1.7rem] leading-8 text-[#777] py-[1rem] block hover:text-[#0eb582] hover:underline">Contact</Link>
            </div>

            <div className="box">
                <h3 className="text-[2.2rem] text-[#444] capitalize py-[1rem]">useful links</h3>
                <Link href={"/"} className="link text-[1.7rem] leading-8 text-[#777] py-[1rem] block hover:text-[#0eb582] hover:underline">help center</Link>
                <Link href={"/"} className="link text-[1.7rem] leading-8 text-[#777] py-[1rem] block hover:text-[#0eb582] hover:underline">ask questions</Link>
                <Link href={"/"} className="link text-[1.7rem] leading-8 text-[#777] py-[1rem] block hover:text-[#0eb582] hover:underline">send feedback</Link>
                <Link href={"/"} className="link text-[1.7rem] leading-8 text-[#777] py-[1rem] block hover:text-[#0eb582] hover:underline">private policy</Link>
                <Link href={"/"} className="link text-[1.7rem] leading-8 text-[#777] py-[1rem] block hover:text-[#0eb582] hover:underline">terms of use</Link>
            </div>

            <div className="box">
                <h3 className="text-[2.2rem] text-[#444] capitalize py-[1rem]">newsletter</h3>
                <p className="text-[1.5rem] leading-8 text-[#777] py-[1rem]">subscribe for latest updates</p>
                <form className=""> 
                    <input type="email" name="" placeholder="enter your email" id="email" className="w-[100%] py-[1.2rem] px-[1.4rem] text-[1.6rem] border-[.1rem] border-solid border-[#0eb582] mb-[1rem]"/>
                    <input type="submit" value={"subscribe"} className="btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] text-[#0eb582] hover:bg-[#0eb582] hover:text-white cursor-pointer capitalize"/>
                </form>
            </div>
           </div>

           <div className="credit text-center mt-[3rem] pt-[3rem] text-[2rem] capitalize text-[#444] border-t-[.1rem] border-solid border-[#0eb582]"> created by <span className="text-[#0eb582]">KiranShoaib</span> | all rights reserved!</div>

        </section>
    )
}

export default Footer