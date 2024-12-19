import Image from "next/image";
import contactimage from "../../public/contactimage.png";
import { GoClockFill } from "react-icons/go";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMap } from "react-icons/fa";

function ContactSection(){
    return(
        <section className="contactpage py-[5rem] px-[10%] max-[1200px]:py-[3rem] max-[1200px]:px-[5%] max-[991px]:py-[3rem] max-[991px]:px-[2rem]">
            <h1 className="heading text-center mb-12 text-[3.5rem] max-[450px]:text-[3rem] capitalize text-[#444]"> get in touch</h1>
            <div className="icons-container grid grid-cols-[repeat(auto-fit,_minmax(25rem,_1fr))] gap-8 mb-[3rem]">
                <div className="icons flex flex-col items-center justify-center py-[3rem] px-[2rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa]">
                    <div className="flex items-center justify-center h-[6rem] w-[6rem] leading-[6rem] bg-[#0eb582] rounded-full mb-[.5rem]">
                        <GoClockFill className="text-white text-[2rem]" />
                    </div>
                    <h3 className="text-[2rem] capitalize text-[#444] py-[.5rem]">opening hours :</h3>
                    <p className="text-[1.5rem] text-[#777] leading-8">00:07am to 00:06pm</p>
                </div>

                <div className="icons flex flex-col items-center justify-center py-[3rem] px-[2rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa]">
                    <div className="flex items-center justify-center h-[6rem] w-[6rem] leading-[6rem] bg-[#0eb582] rounded-full mb-[.5rem]">
                        <FaPhone className="text-white text-[2rem]" />
                    </div>
                    <h3 className="text-[2rem] capitalize text-[#444] py-[.5rem]">phone :</h3>
                    <p className="text-[1.5rem] text-[#777] leading-8">+123-456-7890</p>
                    <p className="text-[1.5rem] text-[#777] leading-8">+111-222-3333</p>  
                </div>

                <div className="icons flex flex-col items-center justify-center py-[3rem] px-[2rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa]">
                    <div className="flex items-center justify-center h-[6rem] w-[6rem] leading-[6rem] bg-[#0eb582] rounded-full mb-[.5rem]">
                        <FaEnvelope className="text-white text-[2rem]" />
                    </div>
                    <h3 className="text-[2rem] capitalize text-[#444] py-[.5rem]">email :</h3>
                    <p className="text-[1.5rem] text-[#777] leading-8">educa@gmail.com</p>  
                    <p className="text-[1.5rem] text-[#777] leading-8">example@gmail.com</p>
                </div>

                <div className="icons flex flex-col items-center justify-center py-[3rem] px-[2rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa]">
                    <div className="flex items-center justify-center h-[6rem] w-[6rem] leading-[6rem] bg-[#0eb582] rounded-full mb-[.5rem]">
                        <FaMap className="text-white text-[2rem]" />
                    </div>
                    <h3 className="text-[2rem] capitalize text-[#444] py-[.5rem]">address :</h3>
                    <p className="text-[1.5rem] text-[#777] leading-8">karachi, pakistan - 500105</p>  
                </div>
            </div>

            <div className="row flex items-center flex-wrap gap-[2rem] flex-grow flex-shrink basis-[40rem]">
                <div className="image">
                    <Image src={contactimage} alt="" className="w-[100%] "/>
                </div>

                <form className="flex-grow flex-shrink basis-[40rem] border-[.1rem] border-solid border-[#0eb582] p-[2rem]">
                    <h3 className="text-[2.5rem] capitalize text-[#444] pb-[1rem]">send us a message</h3>
                    <input type="text" placeholder="name" className="box w-[100%] py-[1.2rem] px-[1.4rem] border-[.1rem] border-solid border-[#0eb582] text-[1.6rem] my-[.7rem] focus:bg-[#0eb582] focus:text-white  focus:placeholder:text-[#f0fdfa]"/>
                    <input type="email" placeholder="email" className="box w-[100%] py-[1.2rem] px-[1.4rem] border-[.1rem] border-solid border-[#0eb582] text-[1.6rem] my-[.7rem] focus:bg-[#0eb582] focus:text-white  focus:placeholder:text-[#f0fdfa]"/>
                    <input type="tel" placeholder="phone" className="box w-[100%] py-[1.2rem] px-[1.4rem] border-[.1rem] border-solid border-[#0eb582] text-[1.6rem] my-[.7rem] focus:bg-[#0eb582] focus:text-white  focus:placeholder:text-[#f0fdfa]"/>
                    <textarea className="box w-[100%] h-[15rem] resize-none py-[1.2rem] px-[1.4rem] border-[.1rem] border-solid border-[#0eb582] text-[1.6rem] my-[.7rem] focus:bg-[#0eb582] focus:text-white  focus:placeholder:text-[#f0fdfa]" placeholder="message" cols={30} rows={10}></textarea>
                    <input type="submit" value={"send message"} className="btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] text-[#0eb582] hover:bg-[#0eb582] hover:text-white cursor-pointer capitalize"/>
                </form>
            </div>
        </section>
    )
}

export default ContactSection