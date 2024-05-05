"use client"

import React from "react";
import {
    AccordionItemPanel,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemState,
} from "react-accessible-accordion";
import { Img } from "../layouts/Img";
import { Heading } from "../layouts/Heading";
import { Text } from "../layouts/Text";

interface Props {
    className?: string;
    profitabilitytext?: React.ReactNode | string;
    descriptiontext?: string;
    title: string,
    img: string,
    desc: string
}




export default function MainPage1920pxAdvantage({
    profitabilitytext = (
        <>
            Profitability and
            <br />
            Growth
        </>
    ),
    descriptiontext = "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    ...props
}: Props) {

    const { title, desc, img } = props ?? {}

    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-end pb-[27px] sm:pb-5 border-gray-900 border-b border-solid flex-1`}
        >
            <AccordionItemHeading className="w-full ">
                <AccordionItemButton>
                    <AccordionItemState>
                        {(props: any) => (
                            <>
                                <div className="flex items-center gap-[30px] self-stretch pr-5 sm:flex-col">
                                    <Img
                                        src={img}
                                        width={100}
                                        height={114}
                                        alt={title}
                                        className="h-[114px] w-[20%] object-cover "
                                    />
                                    <div className="flex flex-1 items-start justify-center gap-5 sm:flex-col sm:self-stretch">
                                        <Heading as="h5" className="w-[96%] leading-[130%] sm:w-full hover:text-blue-A200 transition-colors duration-300">
                                            {title}
                                        </Heading>
                                        <Img
                                            src="img_arrow_down.svg"
                                            width={16}
                                            height={16}
                                            alt="arrow icon"
                                            className="mt-[9px] h-[16px] w-[16px] sm:w-full"
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </AccordionItemState>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="w-[76%] mt-5">
                    <Text as="p" className="leading-[130%]">
                        {desc}
                    </Text>
                </div>
            </AccordionItemPanel>
        </div>
    );
}

