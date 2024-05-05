"use client"
import React from "react";
import Navbar from "../layouts/bars/Navbar";
import { Heading } from "../layouts/Heading";
import { Text } from "../layouts/Text";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "@/context";
import { Img } from "../layouts/Img";


const HeaderSection = () => {

    const { openSidebar } = useGlobalContext();

    return (
        <section className="relative h-[970px] self-stretch md:h-auto">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/main-background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-950 to-black-900 opacity-90"></div>

            <div className="flex flex-col justify-center gap-[481px] pb-[102px] pt-[30px] md:gap-[360px] md:pb-5 sm:gap-60 sm:py-5 relative">
                <div className="md:justify-between hidden md:flex mr-16 mx-5">
                    <Img
                        src="img_header_logo.png"
                        width={140}
                        height={39}
                        alt="header logo"
                        className="h-[39px] w-[140px] object-contain"
                        
                    />
                    <button onClick={openSidebar} className="text-blue-A200">
                        <FaBars size={30} />
                    </button>
                </div>
                <div className="p-5"></div>

                <div className="body-container flex flex-col items-start bg-white rounded-lg shadow-lg">
                    <Text size="lg" as="div" className="w-full !font-monumentextended uppercase leading-[110%]">
                        <h2 className="text-title">
                            The world&apos;s first
                            <br />
                            platform for Tokenizing
                            <br />
                            AI blockchain projects
                        </h2>
                    </Text>
                    <Heading
                        as="h1"
                        className="blue_A200_purple_A700_01_border border-b border-t border-solid bg-gradient bg-clip-text py-[9px] !text-transparent"
                    >
                        Hold the Creon Pass NFT and earn passive income from AI Tools
                    </Heading>
                </div>
            </div>
        </section>
    )
};

export default HeaderSection;


/*
   <section className="relative h-[970px] self-stretch bg-[url(/images/img_group_27.png)] bg-cover bg-no-repeat md:h-auto">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-950 to-black-900 opacity-90 ">
            </div>

            <div className="flex flex-col items-end justify-center gap-[481px] pb-[102px] pt-[30px] md:gap-[360px] md:pb-5 sm:gap-60 sm:py-5 relative">
                <button
                    onClick={openSidebar}
                    className='text-blue-A200 hidden md:inline mr-16'
                >
                    <FaBars size={30} />
                </button>
                <div className="p-5"></div>

                <div className="body-container flex flex-col items-start  bg-white rounded-lg shadow-lg">
                    <Text size="lg" as="div" className="w-full !font-monumentextended uppercase leading-[110%]">
                        <h2 className="text-title">
                            The world&#39;s first
                            <br />
                            platform for Tokenizing
                            <br />
                            AI blockchain projects
                        </h2>
                    </Text>
                    <Heading
                        as="h1"
                        className="blue_A200_purple_A700_01_border border-b border-t border-solid bg-gradient bg-clip-text py-[9px] !text-transparent"
                    >
                        Hold the Creon Pass NFT and earn passive income from AI Tools
                    </Heading>
                </div>
            </div>
        </section >
*/




// VIDEO
/* 
<section className="relative h-[970px] self-stretch md:h-auto">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/videos/main-background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-950 to-black-900 opacity-90"></div>

            <div className="flex flex-col items-end justify-center gap-[481px] pb-[102px] pt-[30px] md:gap-[360px] md:pb-5 sm:gap-60 sm:py-5 relative">
                <button onClick={openSidebar} className="text-blue-A200 hidden md:inline mr-16">
                    <FaBars size={30} />
                </button>
                <div className="p-5"></div>

                <div className="body-container flex flex-col items-start bg-white rounded-lg shadow-lg">
                    <Text size="lg" as="div" className="w-full !font-monumentextended uppercase leading-[110%]">
                        <h2 className="text-title">
                            The world's first
                            <br />
                            platform for Tokenizing
                            <br />
                            AI blockchain projects
                        </h2>
                    </Text>
                    <Heading
                        as="h1"
                        className="blue_A200_purple_A700_01_border border-b border-t border-solid bg-gradient bg-clip-text py-[9px] !text-transparent"
                    >
                        Hold the Creon Pass NFT and earn passive income from AI Tools
                    </Heading>
                </div>
            </div>
        </section>
*/