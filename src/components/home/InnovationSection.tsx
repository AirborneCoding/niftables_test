import React from "react";
import { Text } from "../layouts/Text";
import { Img } from "../layouts/Img";
import { Heading } from "../layouts/Heading";

const InnovationSection = () => {
    return (
        <div className="body-container mt-[194px] flex">
            <div className="flex w-full flex-col items-start">
                <Text size="lg" as="p" className="!font-monumentextended uppercase">
                    Profiting Through
                </Text>
                <Text
                    size="md"
                    as="p"
                    className="mt-[17px] self-end bg-gradient bg-clip-text !font-monumentextended uppercase !text-transparent"
                >
                    AI Innovation & Decentralization
                </Text>
                <div className="mt-[85px] flex gap-10 self-stretch md:flex-col">
                    <div className="relative h-[485px] flex-1 rounded-md md:h-auto md:w-full md:flex-none md:self-stretch">
                        <video autoPlay loop muted className="h-[485px] w-full rounded-md object-cover">
                            <source src="/videos/creon-logo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[485px] w-full rotate-[180deg] rounded-md bg-gradient2 opacity-15" />
                    </div>
                    <div className="flex w-[32%] items-center gap-[30px] md:w-full sm:flex-col">
                        <div className="h-full w-px bg-gray-900 sm:h-px sm:w-full" />
                        <div className="flex w-[93%] flex-col gap-7 sm:w-full">
                            <Heading as="h3" className="leading-[130%]">
                                The dynamic community-driven business model of the future.
                            </Heading>
                            <Text as="p" className="leading-[130%]">
                                At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.
                            </Text>
                        </div>
                        <div className="h-full w-px bg-gray-900 sm:h-px sm:w-full" />
                    </div>
                </div>
            </div>
        </div>

    )
};

export default InnovationSection;



/* 
 <section className="body-container mt-[194px] flex">
            <div className="flex w-full flex-col items-start">
                <Text size="lg" as="p" className="!font-monumentextended uppercase">
                    Profiting Through
                </Text>
                <Text
                    size="md"
                    as="p"
                    className="mt-[17px] self-end bg-gradient bg-clip-text !font-monumentextended uppercase !text-transparent"
                >
                    AI Innovation & Decentralization
                </Text>
                <div className="mt-[85px] flex gap-10 self-stretch md:flex-col">
                    <div className="relative h-[485px] flex-1 rounded-md md:h-auto md:w-full md:flex-none md:self-stretch">
                        <Img
                            src="img_creon_logo_5_v0.png"
                            width={947}
                            height={485}
                            alt="creon logo"
                            className="h-[485px] w-full rounded-md object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[485px] w-full rotate-[180deg] rounded-md bg-gradient2 opacity-15" />
                    </div>
                    <div className="flex w-[32%] items-center gap-[30px] md:w-full sm:flex-col">
                        <div className="h-full w-px bg-gray-900 sm:h-px sm:w-full" />
                        <div className="flex w-[93%] flex-col gap-7 sm:w-full">
                            <Heading as="h3" className="leading-[130%]">
                                The dynamic community driven business model of the future.
                            </Heading>
                            <Text as="p" className="leading-[130%]">
                                At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an
                                innovative business model to drive profitability. This approach empowers our community, as our
                                NFT and token holders directly benefit from the growth and prosperity of the Creon network,
                                creating a win-win scenario for both our community and for the projects we launch.
                            </Text>
                        </div>
                        <div className="h-full w-px bg-gray-900 sm:h-px sm:w-full" />
                    </div>
                </div>
            </div>
        </section>
*/