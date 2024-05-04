import React from "react";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Img } from "../Img";


interface Props {
  className?: string;
  comingsoontext?: string;
  tokentext?: string;
  tokendescription?: string;
  tokenimage?: string;
  launchingintext?: string;
}

export default function MainPage1920pxColumnOne({
  comingsoontext = "COMING SOON",
  tokentext = "token",
  tokendescription = "The Gateway token to the world of AI",
  tokenimage = "img_0_1_1.png",
  launchingintext = "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full`}>
      <div className="flex flex-col items-end self-stretch">
        <Heading
          size="s"
          as="p"
          className="relative z-[1] mr-[30px] flex items-center justify-center rounded-[9px] bg-white-A700 px-1.5 py-px !text-black-900 md:mr-0"
        >
          {comingsoontext}
        </Heading>
        <div className="relative mt-[-9px] self-stretch rounded-md bg-gray-900_99 pb-[54px] pr-[27px] pt-[27px] md:pb-5 sm:py-5 sm:pr-5">
          <div className="flex flex-col items-start">
            <Text size="md" as="p" className="!font-monumentextended uppercase ml-5">
              {tokentext}
            </Text>
            <Heading as="h5" className="mt-[19px] bg-gradient bg-clip-text !text-transparent ml-5">
              {tokendescription}
            </Heading>
            <div className="relative mt-[55px] h-[234px] self-stretch rounded-br-lg rounded-tr-lg md:h-auto">
              <Img
                src={tokenimage}
                width={423}
                height={234}
                alt="token graphic"
                className="h-[234px] w-full rounded-br-lg rounded-tr-lg object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[234px] w-full rotate-[180deg] rounded-br-lg rounded-tr-lg bg-gradient1 opacity-50" />
            </div>
            <Text as="p" className="mt-7 w-[93%] self-end leading-[130%] md:w-full">
              {launchingintext}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
