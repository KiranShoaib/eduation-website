"use client"
import Image from "next/image";
import logo1 from "../../public/logo1.png";
import logo2 from "../../public/logo2.png";
import logo3 from "../../public/logo3.png";
import logo4 from "../../public/logo4.png";
import logo5 from "../../public/logo5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function LogoSlider(){
    return(
        <section className="logo-container py-[5rem] px-[10%] max-[1200px]:py-[3rem] max-[1200px]:px-[5%] max-[991px]:py-[3rem] max-[991px]:px-[2rem] text-center">
            <div className="logo-slider">
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
                    450: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    991: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 5,
                    },
                  }}
                >
                    <SwiperSlide>
                    <div className="slide flex justify-center items-center">
                        <Image src={logo1} alt="" className="h-[10rem] w-[10rem] pointer-events-none"/>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="slide flex justify-center items-center">
                        <Image src={logo2} alt="" className="h-[10rem] w-[10rem] pointer-events-none"/>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="slide flex justify-center items-center">
                        <Image src={logo3} alt="" className="h-[10rem] w-[10rem] pointer-events-none"/>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="slide flex justify-center items-center">
                        <Image src={logo4} alt="" className="h-[10rem] w-[10rem] pointer-events-none"/>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="slide flex justify-center items-center">
                        <Image src={logo5} alt="" className="h-[10rem] w-[10rem] pointer-events-none"/>
                    </div>
                    </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </section>

    )
}

export default LogoSlider