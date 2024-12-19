import Image from "next/image";
import abouthero from "../../public/abouthero.jpg";
import aboutheroicon1 from "../../public/aboutheroicon1.png";
import aboutheroicon2 from "../../public/aboutheroicon2.png";
import aboutheroicon3 from "../../public/aboutheroicon3.png";

function AboutHero(){
    return(
        <section className="about py-[5rem] px-[10%] max-[1200px]:py-[3rem] max-[1200px]:px-[5%] max-[991px]:py-[3rem] max-[991px]:px-[2rem] flex items-center flex-wrap gap-12">
            <div className="images flex-grow flex-shrink basis-[40rem]">
                <Image src={abouthero} alt="" className="w-[100%]"/>
            </div>
            <div className="content flex-grow flex-shrink basis-[40rem]">
                <h3 className="about-title text-[3rem] max-[450px]:text-[4rem] text-[#444] capitalize">we have best courses for you</h3>
                <p className="text-[1.5rem] leading-8 text-[#777] py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam porro similique tempora quaerat repellendus ea est eligendi nesciunt quasi quia! Obcaecati natus voluptate perferendis quisquam. Iure ea voluptatum deleniti doloribus.</p>
                <div className="icons-container mt-4 grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-4">
                    <div className="icons text-center py-[3rem] px-[2rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa]">
                        <Image src={aboutheroicon1} alt="" className="h-[5rem] w-[5rem] mb-[0.5rem] mx-auto"/>
                        <h3 className="text-[3rem] text-[#444] capitalize py-[0.5rem]">350+</h3>
                        <span className="text-[1.5rem] leading-8 text-[#777]">courses</span>
                    </div>
                    <div className="icons text-center py-[3rem] px-[2rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa]">
                        <Image src={aboutheroicon2} alt="" className="h-[5rem] w-[5rem] mb-[0.5rem] mx-auto"/>
                        <h3 className="text-[3rem] text-[#444] capitalize py-[0.5rem]">1200+</h3>
                        <span className="text-[1.5rem] leading-8 text-[#777]">students</span>
                    </div>
                    <div className="icons text-center py-[3rem] px-[2rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa]">
                        <Image src={aboutheroicon3} alt="" className="h-[5rem] w-[5rem] mb-[0.5rem] mx-auto"/>
                        <h3 className="text-[3rem] text-[#444] capitalize py-[0.5rem]">10+</h3>
                        <span className="text-[1.5rem] leading-8 text-[#777]">awards</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutHero