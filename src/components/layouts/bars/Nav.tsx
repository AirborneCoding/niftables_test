import Link from "next/link";
import React from "react";
import { Img } from "../Img";
import { Heading } from "../Heading";

interface Props {
    className?: string;
}

const Navbar = ({ ...props }: Props) => {
    // body-container container-xs 
    return (
        <nav className="body-container container-xs nav">
            <header
                {...props}
                className={`${props.className} absolute z-10 pt-10 flex xl:flex-col justify-between items-center w-[95%] xl:w-full gap-5 xl:p-5 body-container`}
            >
                <Img
                    src="img_header_logo.png"
                    width={140}
                    height={39}
                    alt="header logo"
                    className="h-[39px] w-[140px] object-contain"
                />
                <div className="flex items-center justify-between gap-5  xl:flex-col">
                    <div className="flex flex-wrap items-start">
                        <Link href="#" className="font-bold">
                            <Heading size="md" as="h6">
                                Creon Pass
                            </Heading>
                        </Link>
                        <Heading size="md" as="h6" className="ml-10">
                            Token
                        </Heading>
                        <Heading
                            size="xs"
                            as="p"
                            className="flex items-center justify-center rounded-[7px] bg-black-900 px-1 py-px !text-purple-A700_01"
                        >
                            SOON
                        </Heading>
                        <Heading size="md" as="h6" className="ml-10">
                            AI Revenue
                        </Heading>
                        <Heading
                            size="xs"
                            as="p"
                            className="flex items-center justify-center rounded-[7px] bg-black-900 px-1 py-px !text-purple-A700_01"
                        >
                            SOON
                        </Heading>
                        <Heading size="md" as="h6" className="ml-10">
                            AI Launchpad
                        </Heading>
                        <Heading
                            size="xs"
                            as="p"
                            className="flex items-center justify-center rounded-[7px] bg-black-900 px-1 py-px !text-purple-A700_01"
                        >
                            SOON
                        </Heading>
                    </div>
                    <button className="py-2 px-5 text-white-A700 border-2 rounded-xl border-white-A700 font-bold hover:bg-blue-A200 transition-colors duration-300 hover:text-white-900">
                        Connect
                    </button>
                </div>
            </header>
        </nav>
    );
};

export default Navbar;
