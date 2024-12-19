"use client"
import Image from "next/image";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import expertteacher1 from "../../public/expertteacher1.png";
import expertteacher2 from "../../public/expertteacher2.png";
import expertteacher3 from "../../public/expertteacher3.png";
import expertteacher4 from "../../public/expertteacher4.png";
import expertteacher5 from "../../public/expertteacher5.png";
import expertteacher6 from "../../public/expertteacher6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Teachers(){
    return(
        <section className="teacher py-[5rem] px-[10%] max-[1200px]:py-[3rem] max-[1200px]:px-[5%] max-[991px]:py-[3rem] max-[991px]:px-[2rem]">
            <h1 className="heading text-center mb-12 text-[3.5rem] max-[450px]:text-[3rem] capitalize text-[#444]">expert teachers</h1>
            <div className="teachers-slider">
                <div className="wrapper">

                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000 }}
                  grabCursor={true}
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    991: {
                      slidesPerView: 3,
                    },
                  }}
                >
                    <SwiperSlide>
                    <div className="slide text-center">
                        <div className="image relative overflow-hidden group">
                            <Image src={expertteacher1} alt="lady teacher picture" className="bg-[#f0fdfa] w-[100%] h-[300px] hover:bg-[#0eb582]"/>
                            <div className="share flex justify-center items-center absolute bottom-[-10rem] right-0 left-0 bg-black bg-opacity-80 p-[2rem] group-hover:bottom-0">
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><TiSocialFacebook/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><AiOutlineTwitter/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><IoLogoInstagram/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><IoLogoLinkedin/></Link>
                            </div>
                        </div>
                        <div className="content flex items-center justify-between p-[1rem]">
                            <h3 className="text-[2rem] capitalize text-[#444]">john deo</h3>
                            <span className="text-[1.5rem] text-[#777] leading-8">export tutor</span>
                        </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="slide text-center">
                        <div className="image relative overflow-hidden group">
                            <Image src={expertteacher2} alt="male teacher picture" className="bg-[#f0fdfa] w-[100%] h-[300px] hover:bg-[#0eb582]"/>
                            <div className="share flex justify-center items-center absolute bottom-[-10rem] right-0 left-0 bg-black bg-opacity-80 p-[2rem] group-hover:bottom-0">
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><TiSocialFacebook/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><AiOutlineTwitter/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><IoLogoInstagram/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><IoLogoLinkedin/></Link>
                            </div>
                        </div>
                        <div className="content flex items-center justify-between p-[1rem]">
                            <h3 className="text-[2rem] capitalize text-[#444]">john deo</h3>
                            <span className="text-[1.5rem] text-[#777] leading-8">export tutor</span>
                        </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="slide text-center">
                        <div className="image relative overflow-hidden group">
                            <Image src={expertteacher3} alt="lady teacher picture" className="bg-[#f0fdfa] w-[100%] h-[300px] hover:bg-[#0eb582]"/>
                            <div className="share flex justify-center items-center absolute bottom-[-10rem] right-0 left-0 bg-black bg-opacity-80 p-[2rem] group-hover:bottom-0">
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><TiSocialFacebook/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><AiOutlineTwitter/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><IoLogoInstagram/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><IoLogoLinkedin/></Link>
                            </div>
                        </div>
                        <div className="content flex items-center justify-between p-[1rem]">
                            <h3 className="text-[2rem] capitalize text-[#444]">john deo</h3>
                            <span className="text-[1.5rem] text-[#777] leading-8">export tutor</span>
                        </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="slide text-center">
                        <div className="image relative overflow-hidden group">
                            <Image src={expertteacher4} alt="lady teacher picture" className="bg-[#f0fdfa] w-[100%] h-[300px] hover:bg-[#0eb582]"/>
                            <div className="share flex justify-center items-center absolute bottom-[-10rem] right-0 left-0 bg-black bg-opacity-80 p-[2rem] group-hover:bottom-0">
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><TiSocialFacebook/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><AiOutlineTwitter/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><IoLogoInstagram/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><IoLogoLinkedin/></Link>
                            </div>
                        </div>
                        <div className="content flex items-center justify-between p-[1rem]">
                            <h3 className="text-[2rem] capitalize text-[#444]">john deo</h3>
                            <span className="text-[1.5rem] text-[#777] leading-8">export tutor</span>
                        </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="slide text-center">
                        <div className="image relative overflow-hidden group">
                            <Image src={expertteacher5} alt="male teacher picture" className="bg-[#f0fdfa] w-[100%] h-[300px] hover:bg-[#0eb582]"/>
                            <div className="share flex justify-center items-center absolute bottom-[-10rem] right-0 left-0 bg-black bg-opacity-80 p-[2rem] group-hover:bottom-0">
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><TiSocialFacebook/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><AiOutlineTwitter/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><IoLogoInstagram/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><IoLogoLinkedin/></Link>
                            </div>
                        </div>
                        <div className="content flex items-center justify-between p-[1rem]">
                            <h3 className="text-[2rem] capitalize text-[#444]">john deo</h3>
                            <span className="text-[1.5rem] text-[#777] leading-8">export tutor</span>
                        </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="slide text-center">
                        <div className="image relative overflow-hidden group">
                            <Image src={expertteacher6} alt="lady teacher picture" className="bg-[#f0fdfa] w-[100%] h-[300px] hover:bg-[#0eb582]"/>
                            <div className="share flex justify-center items-center absolute bottom-[-10rem] right-0 left-0 bg-black bg-opacity-80 p-[2rem] group-hover:bottom-0">
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><TiSocialFacebook/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><AiOutlineTwitter/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><IoLogoInstagram/></Link>
                                <Link href={"/"} className="text-[3rem] px-[1rem] text-white hover:text-[#0eb582]"><IoLogoLinkedin/></Link>
                            </div>
                        </div>
                        <div className="content flex items-center justify-between p-[1rem]">
                            <h3 className="text-[2rem] capitalize text-[#444]">john deo</h3>
                            <span className="text-[1.5rem] text-[#777] leading-8">export tutor</span>
                        </div>
                    </div>
                    </SwiperSlide>
                    </Swiper>      

                </div>
            </div>

        </section>
    )
}

export default Teachers