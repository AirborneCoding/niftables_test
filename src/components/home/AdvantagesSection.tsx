"use client"
import React from "react";
import { Text } from "../layouts/Text";
import { Img } from "../layouts/Img";
import { Accordion, AccordionItem } from "react-accessible-accordion";
import MainPage1920pxAdvantage from "./MainPage1920pxAdvantage";
const data = [
  {
    img: "img_icon.png",
    title: "Profitability and Growth",
    desc: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
  },
  {
    img: "img_icon_gray_900.png",
    title: "Transparent && Fair Decentralized Earnings",
    desc: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
  },
  {
    img: "img_icon_gray_900_114x100.png",
    title: "Launcging the future",
    desc: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
  },
  {
    img: "img_icon_114x100.png",
    title: "Limitless POSSIBILITIES OF ai & Crypto",
    desc: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
  },
]
const AdvantagesSection = () => {
  return (
    // <section className="body-container container-xs mt-16 flex gap-5">
    //   <div className="">
    //     <Text
    //       size="md"
    //       as="p"
    //       className=" !font-monumentextended uppercase leading-[120%]"
    //     >
    //       <span className="text-white-A700">
    //         Our vision is to support the innovation of AI blockchain projects&nbsp;
    //       </span>
    //       <span className="bg-gradient bg-clip-text text-transparent">
    //         while prioritizing communities and democratizing profits
    //       </span>
    //     </Text>
    //     <picture>
    //       <Img
    //         src="img_creon_1.png"
    //         width={836}
    //         height={467}
    //         alt="primary image"
    //         className="h-[467px] w-full object-cover"
    //       />
    //     </picture>
    //   </div>

    //   <div>
    //     <Accordion
    //       preExpanded={[0]}
    //       allowMultipleExpanded
    //       className="flex-col gap-[30px]"
    //     >
    //       {[...Array(4)].map((_, i) => (
    //         <AccordionItem key={`Expandable List${i}`}>
    //           <MainPage1920pxAdvantage />
    //         </AccordionItem>
    //       ))}
    //     </Accordion>
    //   </div>
    // </section>



    <section className="body-container container-xs mt-[220px] grid md:grid-cols-1 grid-cols-2 place-content-center gap-5">
      <div className="">
        <Text
          size="md"
          as="p"
          className="!font-monumentextended uppercase leading-[120%]"
        >
          <span className="text-white-A700">
            Our vision is to support the innovation of AI blockchain projects&nbsp;
          </span>
          <span className="bg-gradient bg-clip-text text-transparent">
            while prioritizing communities and democratizing profits
          </span>
        </Text>
        <div className="h-[502px] pb-[35px] md:h-auto sm:pb-5 w-full">
          <Img
            src="img_creon_1.png"
            width={836}
            height={467}
            alt="primary image"
            className="h-[467px] w-full object-cover"
          />
        </div>

        {/* <div className="bg-black-900 h-[502px] pb-[35px] md:h-auto sm:pb-5 w-full">
          <div className="relative">
            <Img
              src="img_creon_1.png"
              width={836}
              height={467}
              alt="primary image"
              // className="h-[467px] w-full object-cover"
              // className="w-full h-auto"
              className="h-[467px] w-full object-cover"
            />
            <Img
              src="img_dark_shape.svg"
              width={836}
              height={467}
              alt="shape image"
              // className="relative top-0 left-0 w-full h-auto"
            />
          </div>
        </div> */}

      </div>
      <div className="">
        {/* <Accordion
          preExpanded={[0]}
          allowMultipleExpanded
          className="flex flex-col gap-8 lg:gap-[30px]"
        >
          {[...Array(4)].map((_, i) => (
            <AccordionItem key={`ExpandableList${i}`}>
              <MainPage1920pxAdvantage />
            </AccordionItem>
          ))}
        </Accordion> */}
        <Accordion
          preExpanded={[0]}
          allowMultipleExpanded
          className="flex flex-col gap-8 lg:gap-[30px]"
        >
          {data.map((items, i) => (
            <AccordionItem key={`ExpandableList${i}`}>
              <MainPage1920pxAdvantage {...items} />
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>


    /* 
       <div className="flex flex-col justify-center max-w-lg">
            <p className="text-md font-monumentextended uppercase leading-[120%]">
              <span className="text-white-A700">
                Our vision is to support the innovation of AI blockchain projects&nbsp;
              </span>
              <span className="bg-gradient-to-r from-[#4A90E2] to-[#9013FE] bg-clip-text text-transparent">
                while prioritizing communities and democratizing profits
              </span>
            </p>
            <div className="mt-5 lg:mt-8">
              <picture className="block lg:hidden">
                <img
                  src="/images/img_creon_1.png"
                  alt="primary image"
                  className="h-auto w-full object-cover"
                />
              </picture>
              <picture className="hidden lg:block">
                <img
                  src="/images/img_creon_1.png"
                  alt="primary image"
                  className="h-[467px] w-full object-cover"
                />
              </picture>
            </div>
          </div>
    
          <div className="flex flex-col w-[60%]">
            <Accordion
              preExpanded={[0]}
              allowMultipleExpanded
              className="flex flex-col gap-8 lg:gap-[30px]"
            >
              {[...Array(4)].map((_, i) => (
                <AccordionItem key={`ExpandableList${i}`}>
                  <MainPage1920pxAdvantage />
                </AccordionItem>
              ))}
            </Accordion>
          </div>
    */

  )
};

export default AdvantagesSection;

// absolute right-[0.00px] top-[0.00px] m-auto w-[38%] 

/* 
<section className="body-container container-xs relative mt-64 h-[855px]">
      <div className="absolute bottom-[0.00px] left-[8%] m-auto h-[502px] w-[58%] pb-[35px] md:h-auto sm:pb-5">
        <Img
          src="img_creon_1.png"
          width={836}
          height={467}
          alt="primary image"
          className="h-[467px] w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[467px] w-full md:h-auto">
          <div className="absolute left-0 right-0 top-[30%] m-auto h-[148px] w-[13%] bg-[url(/images/img_group_11.png)] bg-cover bg-no-repeat md:h-auto">
            <Img
              src="img_group_11.png"
              width={112}
              height={148}
              alt="vector image"
              className="h-[148px] w-full object-cover md:h-auto"
            />
          </div>
          <div className="h-[467px] w-[34%] bg-gradient6" />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-center justify-center md:relative md:flex-col">
            <div className="h-[467px] w-[25%] rotate-[180deg] bg-gradient6" />
            <div className="relative ml-[-282px] h-[64px] flex-1 rotate-[-90deg] self-end bg-gradient6 md:ml-0 md:self-stretch" />
          </div>
        </div>
      </div>
      <Accordion
        preExpanded={[0]}
        allowMultipleExpanded
        className="absolute right-[0.00px] top-[0.00px] m-auto w-[38%] flex-col gap-[30px]"
      >
        {[...Array(4)].map((_, i) => (
          <AccordionItem  key={`Expandable List${i}`}>
          <MainPage1920pxAdvantage />
          </AccordionItem>
        ))}
      </Accordion>

      <Text
        size="md"
        as="p"
        className="absolute left-[0.00px] top-[0.00px] m-auto w-[49%] !font-monumentextended uppercase leading-[120%]"
      >
        <span className="text-white-A700">
          Our vision is to support the innovation of AI blockchain projects&nbsp;
        </span>
        <span className="bg-gradient bg-clip-text text-transparent">
          while prioritizing communities and democratizing profits
        </span>
      </Text>
    </section>
*/