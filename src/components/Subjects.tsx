import Image from "next/image";
import subjecticon1 from "../../public/subjecticon1.png";
import subjecticon2 from "../../public/subjecticon2.jpg";
import subjecticon3 from "../../public/subjecticon3.png";
import subjecticon4 from "../../public/subjecticon4.png";
import subjecticon5 from "../../public/subjecticon5.png";
import subjecticon6 from "../../public/subjecticon6.png";

function Subjects(){
    return (
        <section className="subjects py-[5rem] px-[10%] max-[1200px]:py-[3rem] max-[1200px]:px-[5%] max-[991px]:py-[3rem] max-[991px]:px-[2rem]">
            <h1 className="heading text-center mb-12 text-[3.5rem] max-[450px]:text-[3rem] capitalize text-[#444]">our popular subjects</h1>
            <div className="box-container grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-8">
                <div className="box py-12 px-8 text-center border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] cursor-pointer hover:bg-[#0eb582]">
                    <Image src={subjecticon1} alt="paint with brush icon" className="h-[10rem] w-[10rem] mb-[0.7rem] mx-auto"/>
                    <h3 className="py-[0.5rem] text-[1.7rem] capitalize text-[#444] hover:text-white">graphic design</h3>
                    <p className="text-[1.5rem] leading-8 text-[#777] hover:text-[#eee]">12 modules</p>
                </div>
                <div className="box py-12 px-8 text-center border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] cursor-pointer hover:bg-[#0eb582]">
                    <Image src={subjecticon2} alt="compass icon" className="h-[10rem] w-[10rem] mb-[0.7rem] mx-auto rounded-full"/>
                    <h3 className="py-[0.5rem] text-[1.7rem] capitalize text-[#444] hover:text-white">kids coding</h3>
                    <p className="text-[1.5rem] leading-8 text-[#777] hover:text-[#eee]">12 modules</p>
                </div>
                <div className="box py-12 px-8 text-center border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] cursor-pointer hover:bg-[#0eb582]">
                    <Image src={subjecticon3} alt="teacher teaching icon" className="h-[10rem] w-[10rem] mb-[0.7rem] mx-auto"/>
                    <h3 className="py-[0.5rem] text-[1.7rem] capitalize text-[#444] hover:text-white">teaching</h3>
                    <p className="text-[1.5rem] leading-8 text-[#777] hover:text-[#eee]">12 modules</p>
                </div>
                <div className="box py-12 px-8 text-center border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] cursor-pointer hover:bg-[#0eb582]">
                    <Image src={subjecticon4} alt="world icon" className="h-[10rem] w-[10rem] mb-[0.7rem] mx-auto"/>
                    <h3 className="py-[0.5rem] text-[1.7rem] capitalize text-[#444] hover:text-white">development</h3>
                    <p className="text-[1.5rem] leading-8 text-[#777] hover:text-[#eee]">12 modules</p>
                </div>
                <div className="box py-12 px-8 text-center border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] cursor-pointer hover:bg-[#0eb582]">
                    <Image src={subjecticon5} alt="microscope icon" className="h-[10rem] w-[10rem] mb-[0.7rem] mx-auto"/>
                    <h3 className="py-[0.5rem] text-[1.7rem] capitalize text-[#444] hover:text-white">science</h3>
                    <p className="text-[1.5rem] leading-8 text-[#777] hover:text-[#eee]">12 modules</p>
                </div>
                <div className="box py-12 px-8 text-center border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] cursor-pointer hover:bg-[#0eb582]">
                    <Image src={subjecticon6} alt="scale with pencil icon" className="h-[10rem] w-[10rem] mb-[0.7rem] mx-auto"/>
                    <h3 className="py-[0.5rem] text-[1.7rem] capitalize text-[#444] hover:text-white">engineering</h3>
                    <p className="text-[1.5rem] leading-8 text-[#777] hover:text-[#eee]">12 modules</p>
                </div>
            </div>

        </section>
    )
}

export default Subjects