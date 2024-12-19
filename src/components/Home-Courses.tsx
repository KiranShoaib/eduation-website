"use client"
import Image from "next/image";
import Link from "next/link";
import homecourse1 from "../../public/homecourse1.png";
import homecourse2 from "../../public/homecourse2.png";
import homecourse3 from "../../public/homecourse3.png";
import homecourse4 from "../../public/homecourse4.png";
import homecourse5 from "../../public/homecourse5.png";
import homecourse6 from "../../public/homecourse6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


function HomeCourses(){
    return(
        <section className="home-courses py-[5rem] px-[10%] max-[1200px]:py-[3rem] max-[1200px]:px-[5%] max-[991px]:py-[3rem] max-[991px]:px-[2rem]">
            <h1 className="heading text-center mb-12 text-[3.5rem] max-[450px]:text-[3rem] capitalize text-[#444]">our popular courses</h1>
            <div className="home-courses-slider">
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
                    <div className="slide group text-center relative bg-[#f0fdfa] overflow-hidden">
                        <div className="image p-8">
                            <Image src={homecourse1} alt="" className="w-[100%] h-[300px] mb-[1.5rem]"/>
                            <h3 className="text-[2rem] capitalize text-[#444]">web development</h3>
                        </div>
                        <div className="content absolute bottom-[-100%] right-0 left-0 bg-[#0eb582] py-[2rem] px-[3rem] group-hover:bottom-0">
                            <h3 className="text-[2rem] text-white capitalize">web development</h3>
                            <p className="py-[1rem] text-[1.5rem] text-[#eee] leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolorem.</p>
                            <Link href={"/"} className="btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] text-[#0eb582] hover:bg-[#444] hover:text-white cursor-pointer capitalize">read more</Link>
                        </div>
                    </div>
                    </SwiperSlide>
         
                    <SwiperSlide>
                    <div className="slide group text-center relative bg-[#f0fdfa] overflow-hidden">
                        <div className="image p-8">
                            <Image src={homecourse2} alt="" className="w-[100%] h-[300px] mb-[1.5rem]"/>
                            <h3 className="text-[2rem] capitalize text-[#444]">web development</h3>
                        </div>
                        <div className="content absolute bottom-[-100%] right-0 left-0 bg-[#0eb582] py-[2rem] px-[3rem] group-hover:bottom-0">
                            <h3 className="text-[2rem] text-white capitalize">web development</h3>
                            <p className="py-[1rem] text-[1.5rem] text-[#eee] leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolorem.</p>
                            <Link href={"/"} className="btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] text-[#0eb582] hover:bg-[#444] hover:text-white cursor-pointer capitalize">read more</Link>
                        </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="slide group text-center relative bg-[#f0fdfa] overflow-hidden">
                        <div className="image p-8">
                            <Image src={homecourse3} alt="" className="w-[100%] h-[300px] mb-[1.5rem]"/>
                            <h3 className="text-[2rem] capitalize text-[#444]">web development</h3>
                        </div>
                        <div className="content absolute bottom-[-100%] right-0 left-0 bg-[#0eb582] py-[2rem] px-[3rem] group-hover:bottom-0">
                            <h3 className="text-[2rem] text-white capitalize">web development</h3>
                            <p className="py-[1rem] text-[1.5rem] text-[#eee] leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolorem.</p>
                            <Link href={"/"} className="btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] text-[#0eb582] hover:bg-[#444] hover:text-white cursor-pointer capitalize">read more</Link>
                        </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="slide group text-center relative bg-[#f0fdfa] overflow-hidden">
                        <div className="image p-8">
                            <Image src={homecourse4} alt="" className="w-[100%] h-[300px] mb-[1.5rem]"/>
                            <h3 className="text-[2rem] capitalize text-[#444]">web development</h3>
                        </div>
                        <div className="content absolute bottom-[-100%] right-0 left-0 bg-[#0eb582] py-[2rem] px-[3rem] group-hover:bottom-0">
                            <h3 className="text-[2rem] text-white capitalize">web development</h3>
                            <p className="py-[1rem] text-[1.5rem] text-[#eee] leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolorem.</p>
                            <Link href={"/"} className="btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] text-[#0eb582] hover:bg-[#444] hover:text-white cursor-pointer capitalize">read more</Link>
                        </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="slide group text-center relative bg-[#f0fdfa] overflow-hidden">
                        <div className="image p-8">
                            <Image src={homecourse5} alt="" className="w-[100%] h-[300px] mb-[1.5rem]"/>
                            <h3 className="text-[2rem] capitalize text-[#444]">web development</h3>
                        </div>
                        <div className="content absolute bottom-[-100%] right-0 left-0 bg-[#0eb582] py-[2rem] px-[3rem] group-hover:bottom-0">
                            <h3 className="text-[2rem] text-white capitalize">web development</h3>
                            <p className="py-[1rem] text-[1.5rem] text-[#eee] leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolorem.</p>
                            <Link href={"/"} className="btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] text-[#0eb582] hover:bg-[#444] hover:text-white cursor-pointer capitalize">read more</Link>
                        </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="slide group text-center relative bg-[#f0fdfa] overflow-hidden">
                        <div className="image p-8">
                            <Image src={homecourse6} alt="" className="w-[100%] h-[300px] mb-[1.5rem]"/>
                            <h3 className="text-[2rem] capitalize text-[#444]">web development</h3>
                        </div>
                        <div className="content absolute bottom-[-100%] right-0 left-0 bg-[#0eb582] py-[2rem] px-[3rem] group-hover:bottom-0">
                            <h3 className="text-[2rem] text-white capitalize">web development</h3>
                            <p className="py-[1rem] text-[1.5rem] text-[#eee] leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolorem.</p>
                            <Link href={"/"} className="btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] text-[#0eb582] hover:bg-[#444] hover:text-white cursor-pointer capitalize">read more</Link>
                        </div>
                    </div>
                    </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default HomeCourses

