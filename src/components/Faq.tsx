"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq py-[5rem] px-[10%] max-[1200px]:py-[3rem] max-[1200px]:px-[5%] max-[991px]:py-[3rem] max-[991px]:px-[2rem]">
      <h1 className="heading text-center mb-12 text-[3.5rem] max-[450px]:text-[3rem] capitalize text-[#444]">
        frequently asked questions
      </h1>
      <div className="accordion-container flex flex-wrap gap-[2rem] items-start">
        
        <div
          className={`accordion ${
            activeIndex === 0 ? "active" : ""
          } flex-grow flex-shrink basis-[40rem] border-[.1rem] border-solid border-[#0eb582]`}
          onClick={() => handleAccordionClick(0)}
        >
          <div
            className={`accordion-heading flex items-center justify-between gap-[1rem] cursor-pointer p-[1.5rem] 
                            ${
                              activeIndex === 0
                                ? "bg-[#0eb582] text-white"
                                : "bg-transparent text-[#444]"
                            }`}
          >
            <h3
              className={`text-[2rem] capitalize ${
                activeIndex === 0 ? "text-white" : "text-[#444]"
              }`}
            >
              how to contact for help?
            </h3>
            <FaAngleDown
              className={`icon text-[2rem] ${
                activeIndex === 0 ? "text-white rotate-180" : "text-[#0eb582]"
              }`}
            />
          </div>
          <p
            className={`accordion-content p-[1.5rem] text-[1.5rem] text-[#777] leading-8 border-t-[.1rem] border-solid border-[#0eb582] ${
              activeIndex === 0 ? "block" : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, doloribus? Velit sed asperiores praesentium cum! Voluptatem magnam dolor consequuntur, iure repudiandae, aut sequi ratione nisi earum, corrupti accusamus. Molestiae, laborum.
          </p>
        </div>

        <div
          className={`accordion ${
            activeIndex === 1 ? "active" : ""
          } flex-grow flex-shrink basis-[40rem] border-[.1rem] border-solid border-[#0eb582]`}
          onClick={() => handleAccordionClick(1)}
        >
          <div
            className={`accordion-heading flex items-center justify-between gap-[1rem] cursor-pointer p-[1.5rem] 
                            ${
                              activeIndex === 1
                                ? "bg-[#0eb582] text-white"
                                : "bg-transparent text-[#444]"
                            }`}
          >
            <h3
              className={`text-[2rem] capitalize ${
                activeIndex === 1 ? "text-white" : "text-[#444]"
              }`}
            >
              what is the best career in 2025?
            </h3>
            <FaAngleDown
              className={`icon text-[2rem] ${
                activeIndex === 1 ? "text-white rotate-180" : "text-[#0eb582]"
              }`}
            />
          </div>
          <p
            className={`accordion-content p-[1.5rem] text-[1.5rem] text-[#777] leading-8 border-t-[.1rem] border-solid border-[#0eb582] ${
              activeIndex === 1 ? "block" : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, doloribus? Velit sed asperiores praesentium cum! Voluptatem magnam dolor consequuntur, iure repudiandae, aut sequi ratione nisi earum, corrupti accusamus. Molestiae, laborum.
          </p>
        </div>

        <div
          className={`accordion ${
            activeIndex === 2 ? "active" : ""
          } flex-grow flex-shrink basis-[40rem] border-[.1rem] border-solid border-[#0eb582]`}
          onClick={() => handleAccordionClick(2)}
        >
          <div
            className={`accordion-heading flex items-center justify-between gap-[1rem] cursor-pointer p-[1.5rem] 
                            ${
                              activeIndex === 2
                                ? "bg-[#0eb582] text-white"
                                : "bg-transparent text-[#444]"
                            }`}
          >
            <h3
              className={`text-[2rem] capitalize ${
                activeIndex === 2 ? "text-white" : "text-[#444]"
              }`}
            >
              how much fees for web development?
            </h3>
            <FaAngleDown
              className={`icon text-[2rem] ${
                activeIndex === 2 ? "text-white rotate-180" : "text-[#0eb582]"
              }`}
            />
          </div>
          <p
            className={`accordion-content p-[1.5rem] text-[1.5rem] text-[#777] leading-8 border-t-[.1rem] border-solid border-[#0eb582] ${
              activeIndex === 2 ? "block" : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, doloribus? Velit sed asperiores praesentium cum! Voluptatem magnam dolor consequuntur, iure repudiandae, aut sequi ratione nisi earum, corrupti accusamus. Molestiae, laborum.
          </p>
        </div>

        <div
          className={`accordion ${
            activeIndex === 3 ? "active" : ""
          } flex-grow flex-shrink basis-[40rem] border-[.1rem] border-solid border-[#0eb582]`}
          onClick={() => handleAccordionClick(3)}
        >
          <div
            className={`accordion-heading flex items-center justify-between gap-[1rem] cursor-pointer p-[1.5rem] 
                            ${
                              activeIndex === 3
                                ? "bg-[#0eb582] text-white"
                                : "bg-transparent text-[#444]"
                            }`}
          >
            <h3
              className={`text-[2rem] capitalize ${
                activeIndex === 3 ? "text-white" : "text-[#444]"
              }`}
            >
              can i choose my own tutor?
            </h3>
            <FaAngleDown
              className={`icon text-[2rem] ${
                activeIndex === 3 ? "text-white rotate-180" : "text-[#0eb582]"
              }`}
            />
          </div>
          <p
            className={`accordion-content p-[1.5rem] text-[1.5rem] text-[#777] leading-8 border-t-[.1rem] border-solid border-[#0eb582] ${
              activeIndex === 3 ? "block" : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, doloribus? Velit sed asperiores praesentium cum! Voluptatem magnam dolor consequuntur, iure repudiandae, aut sequi ratione nisi earum, corrupti accusamus. Molestiae, laborum.
          </p>
        </div>

        <div
          className={`accordion ${
            activeIndex === 4 ? "active" : ""
          } flex-grow flex-shrink basis-[40rem] border-[.1rem] border-solid border-[#0eb582]`}
          onClick={() => handleAccordionClick(4)}
        >
          <div
            className={`accordion-heading flex items-center justify-between gap-[1rem] cursor-pointer p-[1.5rem] 
                            ${
                              activeIndex === 4
                                ? "bg-[#0eb582] text-white"
                                : "bg-transparent text-[#444]"
                            }`}
          >
            <h3
              className={`text-[2rem] capitalize ${
                activeIndex === 4 ? "text-white" : "text-[#444]"
              }`}
            >
              what payment method are available?
            </h3>
            <FaAngleDown
              className={`icon text-[2rem] ${
                activeIndex === 4 ? "text-white rotate-180" : "text-[#0eb582]"
              }`}
            />
          </div>
          <p
            className={`accordion-content p-[1.5rem] text-[1.5rem] text-[#777] leading-8 border-t-[.1rem] border-solid border-[#0eb582] ${
              activeIndex === 4 ? "block" : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, doloribus? Velit sed asperiores praesentium cum! Voluptatem magnam dolor consequuntur, iure repudiandae, aut sequi ratione nisi earum, corrupti accusamus. Molestiae, laborum.
          </p>
        </div>

        <div
          className={`accordion ${
            activeIndex === 5 ? "active" : ""
          } flex-grow flex-shrink basis-[40rem] border-[.1rem] border-solid border-[#0eb582]`}
          onClick={() => handleAccordionClick(5)}
        >
          <div
            className={`accordion-heading flex items-center justify-between gap-[1rem] cursor-pointer p-[1.5rem] 
                            ${
                              activeIndex === 5
                                ? "bg-[#0eb582] text-white"
                                : "bg-transparent text-[#444]"
                            }`}
          >
            <h3
              className={`text-[2rem] capitalize ${
                activeIndex === 5 ? "text-white" : "text-[#444]"
              }`}
            >
              can i have free trial for a month?
            </h3>
            <FaAngleDown
              className={`icon text-[2rem] ${
                activeIndex === 5 ? "text-white rotate-180" : "text-[#0eb582]"
              }`}
            />
          </div>
          <p
            className={`accordion-content p-[1.5rem] text-[1.5rem] text-[#777] leading-8 border-t-[.1rem] border-solid border-[#0eb582] ${
              activeIndex === 5 ? "block" : "hidden"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, doloribus? Velit sed asperiores praesentium cum! Voluptatem magnam dolor consequuntur, iure repudiandae, aut sequi ratione nisi earum, corrupti accusamus. Molestiae, laborum.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Faq;

