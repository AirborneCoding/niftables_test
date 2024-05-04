import React from "react";
import { Text } from "../layouts/Text";
import { Img } from "../layouts/Img";
import Footer from "../layouts/Footer";
import { Button } from "../layouts/Button";

const AI = () => {
    return (
        <footer className={`self-stretch relative `}>
            <div className="pb-10 w-full bg-[url(/images/img_group_35.png)] bg-cover bg-no-repeat md:h-auto ">
                <div className="flex flex-col items-center justify-center gap-20 bg-gradient3 pt-[182px] md:gap-[60px] md:pt-5 sm:gap-10">
                    <div className="container-xs body-container flex flex-col gap-5 md:p-5">
                        <div className="flex items-start gap-10 rounded-md bg-gray-900_99 md:flex-col">
                            <div className="mt-[37px] flex flex-1 flex-col items-start gap-[17px] md:self-stretch pl-4">
                                <Text size="md" as="p" className="!font-monumentextended uppercase">
                                    AI Tools and Market
                                </Text>
                                <Text as="p" className="w-full leading-[130%] md:text-sm">
                                    AI tools refer to the technologies and software that enable computer systems to perform tasks
                                    usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing
                                    areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics.
                                    With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors,
                                    from healthcare to finance, retail, manufacturing, and many others.
                                </Text>
                            </div>
                            <div className="relative h-[302px] w-[33%] md:h-auto md:w-full">
                                <Img
                                    src="img_ai_cloud_concep.png"
                                    width={453}
                                    height={302}
                                    alt="ai cloud image"
                                    className="h-[302px] w-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[302px] w-full rotate-[180deg] bg-gradient1 opacity-50" />
                            </div>
                        </div>
                        <div className="flex items-start gap-10 rounded-md bg-gray-900_99  md:flex-col ">
                            <div className="mt-10 flex flex-1 flex-col items-start gap-[13px] md:self-stretch pl-4">
                                <Text size="md" as="p" className="!font-monumentextended uppercase">
                                    AI, Crypto, and NFT Market
                                </Text>
                                <Text as="p" className="w-full leading-[130%] md:text-sm">
                                    Artificial Intelligence and blockchain technology are two groundbreaking areas leading new
                                    technological innovations. The combination of these two technologies creates intriguing
                                    possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital
                                    artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI
                                    by improving security mechanisms, transaction efficiency, and service personalization. Such
                                    combination brings substantial benefits for both developers and users, paving the way for
                                    unprecedented possibilities.
                                </Text>
                            </div>
                            <div className="relative h-[302px] w-[33%] md:h-auto md:w-full">
                                <Img
                                    src="img_ai_cloud_concep_302x453.png"
                                    width={453}
                                    height={302}
                                    alt="crypto nft image"
                                    className="h-[302px] w-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[302px] w-full rotate-[180deg] bg-gradient1 opacity-50" />
                            </div>
                        </div>
                        <div className="flex items-start gap-10 rounded-md bg-gray-900_99  md:flex-col ">
                            <div className="mt-10 flex flex-1 flex-col items-start gap-[13px] md:self-stretch pl-4">
                                <Text size="md" as="p" className="!font-monumentextended uppercase ">
                                    AI, Crypto, and NFT Market
                                </Text>
                                <Text as="p" className="w-full leading-[130%] md:text-sm">
                                    Artificial Intelligence and blockchain technology are two groundbreaking areas leading new
                                    technological innovations. The combination of these two technologies creates intriguing
                                    possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital
                                    artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI
                                    by improving security mechanisms, transaction efficiency, and service personalization. Such
                                    combination brings substantial benefits for both developers and users, paving the way for
                                    unprecedented possibilities.
                                </Text>
                            </div>
                            <div className="relative h-[302px] w-[33%] md:h-auto md:w-full">
                                <Img
                                    src="img_ai_cloud_concep_1.png"
                                    width={453}
                                    height={302}
                                    alt="crypto nft image"
                                    className="h-[302px] w-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[302px] w-full rotate-[180deg] bg-gradient1 opacity-50" />
                            </div>
                        </div>
                        {/* footer */}

                        <div className="flex md:flex-col flex-row justify-between items-center mt-16 md:gap-y-5 gap-y-0">
                            <div className="flex md:flex-col flex-row gap-3 items-center">
                                <div className="text-white-A700">
                                    © Creon 2023. All rights reserved.
                                </div>
                                <div className="flex gap-x-2">
                                    <Button color="white_A700" size="xs" shape="circle" className="w-[34px] !rounded-[17px] hover:bg-blue-A200 transition-colors duration-300">
                                        <Img src="img_discord.svg" width={34} height={34} className="" />
                                    </Button>
                                    <Button color="white_A700" size="xs" shape="circle" className="w-[34px] !rounded-[17px] hover:bg-blue-A200 transition-colors duration-300">
                                        <Img src="img_akar_icons_twitter_fill.svg" width={34} height={34} />
                                    </Button>
                                    <Button color="white_A700" size="xs" shape="circle" className="w-[34px] !rounded-[17px] hover:bg-blue-A200 transition-colors duration-300">
                                        <Img src="img_akar_icons_twitter_fill_white_a700.svg" width={34} height={34} />
                                    </Button>
                                </div>

                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="text-white-A700">
                                        Powered By
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-xl text-white-A700 cursor-pointer transition-colors duration-300 hover:text-blue-A200">
                                            NIFETABLES
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    )
};

export default AI;


