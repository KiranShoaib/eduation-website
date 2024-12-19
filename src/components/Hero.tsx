"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Hero() {
  return (
    <section className="home p-0">
      <div className="home-slider">
        <div className="wrapper">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            grabCursor={true}
            loop={true}
          >
            <SwiperSlide>
              <section className="slide py-[5rem] px-[10%] max-[1200px]:py-[3rem] max-[1200px]:px-[5%] max-[991px]:py-[3rem] max-[991px]:px-[2rem] bg-[url('/homeslider1.jpg')] bg-no-repeat !bg-cover !bg-center flex items-center h-[60rem]">
                <div className="content w-[50rem]">
                  <h3 className="text-[3rem] md:text-[5rem] capitalize text-white">
                    the best courses you will find here!
                  </h3>
                  <p className="text-[1.6rem] leading-8 text-[#eee] py-[1rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus voluptas quos commodi optio nam vitae.
                  </p>
                  <Link
                    href={"/"}
                    className="btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] text-[#0eb582] hover:bg-[#0eb582] hover:text-white cursor-pointer capitalize"
                  >
                    get started
                  </Link>
                </div>
              </section>
            </SwiperSlide>

            <SwiperSlide>
              <section className="slide py-[5rem] px-[10%] max-[1200px]:py-[3rem] max-[1200px]:px-[5%] max-[991px]:py-[3rem] max-[991px]:px-[2rem] bg-[url('/homeslider2.jpg')] bg-no-repeat !bg-cover !bg-center flex items-center h-[60rem]">
                <div className="content w-[50rem]">
                  <h3 className="text-[3rem] md:text-[5rem] capitalize text-white">
                    the best courses you will find here!
                  </h3>
                  <p className="text-[1.6rem] leading-8 text-[#eee] py-[1rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus voluptas quos commodi optio nam vitae.
                  </p>
                  <Link
                    href={"/"}
                    className="btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] text-[#0eb582] hover:bg-[#0eb582] hover:text-white cursor-pointer capitalize"
                  >
                    get started
                  </Link>
                </div>
              </section>
            </SwiperSlide>

            <SwiperSlide>
              <section className="slide py-[5rem] px-[10%] max-[1200px]:py-[3rem] max-[1200px]:px-[5%] max-[991px]:py-[3rem] max-[991px]:px-[2rem] bg-[url('/homeslider3.jpg')] bg-no-repeat !bg-cover !bg-center flex items-center h-[60rem]">
                <div className="content w-[50rem]">
                  <h3 className="text-[3rem] md:text-[5rem] capitalize text-white">
                    the best courses you will find here!
                  </h3>
                  <p className="text-[1.6rem] leading-8 text-[#eee] py-[1rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus voluptas quos commodi optio nam vitae.
                  </p>
                  <Link
                    href={"/"}
                    className="btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] text-[#0eb582] hover:bg-[#0eb582] hover:text-white cursor-pointer capitalize"
                  >
                    get started
                  </Link>
                </div>
              </section>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Hero;



