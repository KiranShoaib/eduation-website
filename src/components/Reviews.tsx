"use client"
import Image from "next/image";
import student1 from "../../public/student1.jpg";
import student2 from "../../public/student2.png";
import student3 from "../../public/student3.png";
import student4 from "../../public/student4.jpeg";
import student5 from "../../public/student5.jpg";
import student6 from "../../public/student6.png";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Reviews (){
    return (
        <section className="reviews py-[5rem] px-[10%] max-[1200px]:py-[3rem] max-[1200px]:px-[5%] max-[991px]:py-[3rem] max-[991px]:px-[2rem]">
            <h1 className="heading text-center mb-12 text-[3.5rem] max-[450px]:text-[3rem] capitalize text-[#444]"> our students review</h1>
            <div className="review-slider">
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
                        <p className="text-[1.5rem] text-[#777] leading-8 relative bg-[#f0fdfa] border-[.1rem] border-solid border-[#0eb582] mb-[3rem] p-[2rem] before:content-[''] before:absolute before:bottom-[-1.2rem] before:left-1/2 before:translate-x-[-50%] before:rotate-45 before:bg-[#f0fdfa] before:border-b-[0.1rem] before:border-r-[0.1rem] before:border-solid before:border-[#0eb582] before:h-[2rem] before:w-[2rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dicta eius quis aliquid beatae. Ea voluptatum impedit distinctio. Accusantium, iste expedita sapiente laudantium quisquam non odit ab eum porro pariatur.</p>
                        <Image src={student1} alt="male student picture" className="h-[7rem] w-[7rem] rounded-full mx-auto"/>
                        <h3 className="text-[2.2rem] capitalize text-[#444] py-[0.5rem]">john deo</h3>
                        <div className="stars flex items-center justify-center text-[1.2rem] text-[#0eb582]">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaRegStarHalfStroke/>
                        </div>
                    </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                    <div className="slide text-center">
                        <p className="text-[1.5rem] text-[#777] leading-8 relative bg-[#f0fdfa] border-[.1rem] border-solid border-[#0eb582] mb-[3rem] p-[2rem] before:content-[''] before:absolute before:bottom-[-1.2rem] before:left-1/2 before:translate-x-[-50%] before:rotate-45 before:bg-[#f0fdfa] before:border-b-[0.1rem] before:border-r-[0.1rem] before:border-solid before:border-[#0eb582] before:h-[2rem] before:w-[2rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dicta eius quis aliquid beatae. Ea voluptatum impedit distinctio. Accusantium, iste expedita sapiente laudantium quisquam non odit ab eum porro pariatur.</p>
                        <Image src={student2} alt="male student picture" className="h-[7rem] w-[7rem] rounded-full mx-auto"/>
                        <h3 className="text-[2.2rem] capitalize text-[#444] py-[0.5rem]">john deo</h3>
                        <div className="stars flex items-center justify-center text-[1.2rem] text-[#0eb582]">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaRegStarHalfStroke/>
                        </div>
                    </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                     <div className="slide text-center">
                        <p className="text-[1.5rem] text-[#777] leading-8 relative bg-[#f0fdfa] border-[.1rem] border-solid border-[#0eb582] mb-[3rem] p-[2rem] before:content-[''] before:absolute before:bottom-[-1.2rem] before:left-1/2 before:translate-x-[-50%] before:rotate-45 before:bg-[#f0fdfa] before:border-b-[0.1rem] before:border-r-[0.1rem] before:border-solid before:border-[#0eb582] before:h-[2rem] before:w-[2rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dicta eius quis aliquid beatae. Ea voluptatum impedit distinctio. Accusantium, iste expedita sapiente laudantium quisquam non odit ab eum porro pariatur.</p>
                        <Image src={student3} alt="male student picture" className="h-[7rem] w-[7rem] rounded-full mx-auto"/>
                        <h3 className="text-[2.2rem] capitalize text-[#444] py-[0.5rem]">john deo</h3>
                        <div className="stars flex items-center justify-center text-[1.2rem] text-[#0eb582]">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaRegStarHalfStroke/>
                        </div>
                    </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                    <div className="slide text-center">
                        <p className="text-[1.5rem] text-[#777] leading-8 relative bg-[#f0fdfa] border-[.1rem] border-solid border-[#0eb582] mb-[3rem] p-[2rem] before:content-[''] before:absolute before:bottom-[-1.2rem] before:left-1/2 before:translate-x-[-50%] before:rotate-45 before:bg-[#f0fdfa] before:border-b-[0.1rem] before:border-r-[0.1rem] before:border-solid before:border-[#0eb582] before:h-[2rem] before:w-[2rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dicta eius quis aliquid beatae. Ea voluptatum impedit distinctio. Accusantium, iste expedita sapiente laudantium quisquam non odit ab eum porro pariatur.</p>
                        <Image src={student4} alt="male student picture" className="h-[7rem] w-[7rem] rounded-full mx-auto"/>
                        <h3 className="text-[2.2rem] capitalize text-[#444] py-[0.5rem]">john deo</h3>
                        <div className="stars flex items-center justify-center text-[1.2rem] text-[#0eb582]">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaRegStarHalfStroke/>
                        </div>
                    </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                    <div className="slide text-center">
                        <p className="text-[1.5rem] text-[#777] leading-8 relative bg-[#f0fdfa] border-[.1rem] border-solid border-[#0eb582] mb-[3rem] p-[2rem] before:content-[''] before:absolute before:bottom-[-1.2rem] before:left-1/2 before:translate-x-[-50%] before:rotate-45 before:bg-[#f0fdfa] before:border-b-[0.1rem] before:border-r-[0.1rem] before:border-solid before:border-[#0eb582] before:h-[2rem] before:w-[2rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dicta eius quis aliquid beatae. Ea voluptatum impedit distinctio. Accusantium, iste expedita sapiente laudantium quisquam non odit ab eum porro pariatur.</p>
                        <Image src={student5} alt="male student picture" className="h-[7rem] w-[7rem] rounded-full mx-auto"/>
                        <h3 className="text-[2.2rem] capitalize text-[#444] py-[0.5rem]">john deo</h3>
                        <div className="stars flex items-center justify-center text-[1.2rem] text-[#0eb582]">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaRegStarHalfStroke/>
                        </div>
                    </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                    <div className="slide text-center">
                        <p className="text-[1.5rem] text-[#777] leading-8 relative bg-[#f0fdfa] border-[.1rem] border-solid border-[#0eb582] mb-[3rem] p-[2rem] before:content-[''] before:absolute before:bottom-[-1.2rem] before:left-1/2 before:translate-x-[-50%] before:rotate-45 before:bg-[#f0fdfa] before:border-b-[0.1rem] before:border-r-[0.1rem] before:border-solid before:border-[#0eb582] before:h-[2rem] before:w-[2rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dicta eius quis aliquid beatae. Ea voluptatum impedit distinctio. Accusantium, iste expedita sapiente laudantium quisquam non odit ab eum porro pariatur.</p>
                        <Image src={student6} alt="male student picture" className="h-[7rem] w-[7rem] rounded-full mx-auto"/>
                        <h3 className="text-[2.2rem] capitalize text-[#444] py-[0.5rem]">john deo</h3>
                        <div className="stars flex items-center justify-center text-[1.2rem] text-[#0eb582]">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaRegStarHalfStroke/>
                        </div>
                    </div>
                    </SwiperSlide>
                    </Swiper>

                </div>
            </div>

        </section>
    )
}

export default Reviews