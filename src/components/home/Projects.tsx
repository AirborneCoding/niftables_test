import React from "react";
import MainPage1920pxColumnOne from "../layouts/MainPage1920pxColumnOne";
import { Heading } from "../layouts/Heading";
import { Text } from "../layouts/Text";
import { Img } from "../layouts/Img";

const data = [
    {
        comingsoontext: "COMING SOON",
        tokentext: "token",
        tokendescription: "The Gateway token to the world of AI",
        tokenimage: "img_0_1_1.png",
        launchingintext:
            "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
    },
    {
        comingsoontext: "COMING SOON",
        tokentext: "revenue",
        tokendescription: "Driving income and growth through decentralization",
        tokenimage: "img_0_1_1_234x423.png",
        launchingintext:
            "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
    },
    {
        comingsoontext: "COMING SOON",
        tokentext: "launchpad",
        tokendescription: "Driving the future of AI Innovation",
        tokenimage: "img_0_1_1_1.png",
        launchingintext:
            "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
    },
];

const Projects = () => {
    // flex gap-10 md:flex-col
    return (
        // <section className="container-xs body-container mt-[146px] flex gap-10 md:flex-col">
        //     {data.map((d, index) => (
        //         <MainPage1920pxColumnOne {...d} key={"upcomingList" + index} />
        //     ))}
        // </section>

        <section className="container-xs body-container projects gap-10 mt-[146px]" >
            {
                data.map((item: any, i: number) => {
                    return (
                        <div key={i} className="bg-gray-900_99">
                            <div className="flex flex-col items-end self-stretch">
                                <Heading
                                    size="s"
                                    as="p"
                                    className="p-1 bottom-3 font-bold relative z-[1] mr-[30px] flex items-center justify-center rounded-[9px] bg-white-A700 px-1.5 py-px !text-black-900 md:mr-0">
                                    {item.comingsoontext}
                                </Heading>
                            </div>
                            <div className="px-5 pt-5 ">
                                <Text size="md" as="p" className="!font-monumentextended uppercase">
                                    {item.tokentext}
                                </Text>
                                <h5 className="mt-[19px] text-3xl font-semibold bg-gradient bg-clip-text !text-transparent">
                                    {item.tokendescription}
                                </h5>
                            </div>
                            <picture className="rounded-lg overflow-hidden block">
                                <div className="relative mt-[55px] h-[234px] self-stretch rounded-br-lg rounded-tr-lg md:h-auto transition-transform duration-300 ease-in-out transform hover:scale-110 hover:cursor-pointer">
                                    <Img
                                        src={item.tokenimage}
                                        width={423}
                                        height={234}
                                        alt="token graphic"
                                        className="h-[234px] w-full rounded-br-lg rounded-tr-lg object-cover"
                                    />
                                    <div className="absolute inset-0 m-auto h-[234px] w-full rotate-[180deg] rounded-br-lg rounded-tr-lg bg-gradient1 opacity-50" />
                                </div>
                            </picture>

                            <div className="p-5">
                                <Text as="p" className="mt-7 w-[93%] self-end leading-[130%] md:w-full">
                                    {item.launchingintext}
                                </Text>
                            </div>
                        </div>
                    )
                })
            }
        </section>

    )
};

export default Projects;
