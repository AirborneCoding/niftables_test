import React from "react";
import { Text } from "../layouts/Text";
import { Heading } from "../layouts/Heading";
import { Button } from "../layouts/Button";
import { Img } from "../layouts/Img";

const FeaturesSection = () => {
    return (
        <section className="body-container mt-[81px] flex w-[81%] items-center gap-10 self-end md:w-full md:flex-col">
            <div className="flex w-[46%] flex-col items-start md:w-full">
                <Text size="lg" as="p" className="w-full !font-monumentextended uppercase leading-[110%]">
                    creon pass nft
                </Text>
                <div className="mt-[30px] h-px w-full self-stretch bg-gray-900" />
                <Heading as="h2" className="mt-[30px] w-full bg-gradient bg-clip-text leading-[130%] !text-transparent">
                    The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate
                    passive income through AI-driven tools
                </Heading>
                <div className="mt-10 flex w-[75%] flex-col items-start gap-2.5 md:w-full">
                    <div className="w-full text-white border border-gray-900 rounded-lg text-white-A700 p-3">
                        Pre-launch investment opportunities for upcoming AI projects
                    </div>
                    <div className="w-full text-white border border-gray-900 rounded-lg text-white-A700 p-3">
                        Free and early access to Creon built AI projects
                    </div>
                    <div className="w-full text-white border border-gray-900 rounded-lg text-white-A700 p-3">
                        Higher allocation limits on the Creon AI Launchpad
                    </div>
                    <div className="w-full text-white border border-gray-900 rounded-lg text-white-A700 p-3">
                        Revenue share distribution from Creon built AI projects
                    </div>
                </div>
                <Button
                    size="lg"
                    variant="gradient"
                    shape="round"
                    color="blue_A200_purple_A700_01"
                    className="mt-[72px] min-w-[453px] font-bold sm:px-5"
                >
                    Buy Creon Pass
                </Button>
            </div>

            <div className="bg-black-900">
                <div className="relative">
                    <Img
                        src="img_230627_upres_2160p.png"
                        width={808}
                        height={808}
                        alt="feature image"
                        className="w-full h-auto"
                    />
                    <Img
                        src="img_dark_shape.svg"
                        width={808}
                        height={888}
                        alt="shape image"
                        className="absolute top-0 left-0 w-full h-auto"
                    />
                </div>
            </div>
        </section>


    )
};

export default FeaturesSection;


// WITH VIDEO

/* 
       <section className="body-container mt-[81px] flex w-[81%] items-center gap-10 self-end md:w-full md:flex-col">
            <div className="flex w-[46%] flex-col items-start md:w-full">
                <Text size="lg" as="p" className="w-full !font-monumentextended uppercase leading-[110%]">
                    creon pass nft
                </Text>
                <div className="mt-[30px] h-px w-full self-stretch bg-gray-900" />
                <Heading
                    as="h2"
                    className="mt-[30px] w-full bg-gradient bg-clip-text leading-[130%] !text-transparent"
                >
                    The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate
                    passive income through AI-driven tools
                </Heading>
                <div className="mt-10 flex w-[75%] flex-col items-start gap-2.5 md:w-full">
                    <div className="w-full text-white border border-gray-900 rounded-lg text-white-A700 p-3">
                        Pre-launch investment opportunities for upcoming AI projects
                    </div>
                    <div className="w-full text-white border border-gray-900 rounded-lg text-white-A700 p-3">
                        Free and early access to Creon built AI projects
                    </div>
                    <div className="w-full text-white border border-gray-900 rounded-lg text-white-A700 p-3">
                        Higher allocation limits on the Creon AI Launchpad
                    </div>
                    <div className="w-full text-white border border-gray-900 rounded-lg text-white-A700 p-3">
                        Revenue share distribution from Creon built AI projects
                    </div>
                </div>
                <Button
                    size="lg"
                    variant="gradient"
                    shape="round"
                    color="blue_A200_purple_A700_01"
                    className="mt-[72px] min-w-[453px] font-bold sm:px-5"
                >
                    Buy Creon Pass
                </Button>
            </div>

            <div className="bg-black-900">
                <div className="relative">
                    <video autoPlay loop muted className="w-[50vh] h-auto">
                        <source src="/videos/nft-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Img
                        src="img_dark_shape.svg"
                        width={408}
                        height={488}
                        alt="shape image"
                        className="absolute top-0 left-0 w-full h-auto"
                    />
                </div>
            </div>
        </section>
*/