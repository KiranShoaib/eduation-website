"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";

// Importing images
import course1 from "../../public/course1.jpg";
import course2 from "../../public/course2.jpg";
import course3 from "../../public/course3.jpg";
import course4 from "../../public/course4.jpeg";
import course5 from "../../public/course5.png";
import course6 from "../../public/course6.jpg";
import course7 from "../../public/course7.jpg";
import course8 from "../../public/course8.jpg";
import course9 from "../../public/course9.jpg";

function FamousCourses() {
  const [showMore, setShowMore] = useState(false);

  const courses = [
    { image: course1, title: "development" },
    { image: course2, title: "engineering" },
    { image: course3, title: "mathematics" },
    { image: course4, title: "doctor" },
    { image: course5, title: "science" },
    { image: course6, title: "business" },
    { image: course7, title: "teaching" },
    { image: course8, title: "designing" },
    { image: course9, title: "dancing" },
  ];

  return (
    <section className="courses py-[5rem] px-[10%] max-[1200px]:py-[3rem] max-[1200px]:px-[5%] max-[991px]:py-[3rem] max-[991px]:px-[2rem]">
      <h1 className="heading text-center mb-12 text-[3.5rem] max-[450px]:text-[3rem] capitalize text-[#444]">
        our famous courses
      </h1>

      <div className="box-container grid grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] gap-8">
        {courses.slice(0, showMore ? courses.length : 6).map((course, index) => (
          <div className="box" key={index}>
            <div className="image h-[25rem] overflow-hidden relative">
              <Image
                src={course.image}
                alt={course.title}
                className="h-[100%] w-[100%] bg-cover hover:scale-110"
              />
              <h3 className="text-[1.5rem] capitalize text-[#444] absolute top-[1rem] left-[1rem] py-[.5rem] px-[1.5rem] bg-white">
                {course.title}
              </h3>
            </div>
            <div className="content p-[2rem] text-center border-[.1rem] border-solid border-[#0eb582]">
              <h3 className="text-[2rem] capitalize text-[#444]">
                choose what&#39;s best for you!
              </h3>
              <p className="text-[1.6rem] text-[#777] leading-8 py-[1rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <Link
                href="/"
                className="btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] text-[#0eb582] hover:bg-[#0eb582] hover:text-white cursor-pointer capitalize"
              >
                read more
              </Link>
              <div className="icons flex items-center justify-between mt-[2rem] pt-[2rem] border-t-[.1rem] border-solid border-[#0eb582]">
                <span className="flex items-center justify-center text-[1.5rem] capitalize text-[#444]">
                  <FaBook className="text-[#0eb582] pr-[.5rem]" /> 12 modules
                </span>
                <span className="flex items-center justify-center text-[1.5rem] capitalize text-[#444]">
                  <GoClockFill className="text-[#0eb582] pr-[.5rem]" /> 6 hours
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setShowMore(!showMore)}
          className="btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] text-[#0eb582] hover:bg-[#0eb582] hover:text-white cursor-pointer capitalize"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}

export default FamousCourses;
