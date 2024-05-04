"use client"
import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import "@/styles/sidebar.css"
import { useGlobalContext } from '@/context';
import { Button } from '../Button';
import { Img } from '../Img';


const Sidebar = () => {

    const { isSidebarOpen, closeSidebar } = useGlobalContext();


    useEffect(() => {
        const body = document.body;

        if (body) {
            if (isSidebarOpen) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
            return () => {
                body.style.overflow = 'auto';
            };
        }
    }, [isSidebarOpen]);

    return (
        <aside className={`absolute z-10 bg-black-900 ${isSidebarOpen ? 'sidebar show-sidebar overflow-hidden' : 'sidebar overflow-auto'}`}>
            <div className='sidebar-header pt-8'>
                <Img
                    src="img_header_logo.png"
                    width={140}
                    height={39}
                    alt="header logo"
                    className="h-[39px] w-[140px] object-contain "
                />
                <div className='flex items-center gap-x-5'>
                    <button className="py-2 px-5 text-white-A700 border-2 rounded-xl border-white-A700 font-bold hover:bg-blue-A200 transition-colors duration-300 hover:text-white-900">
                        Connect
                    </button>
                    {/* close-btn */}
                    <button className='bg-blue-A200 text-white-A700 rounded-md p-3 hover:text-red-500' onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>
            </div>
            <ul className='links'>
                <li >
                    <a href="#">
                        Creon Pass
                        <span className='mx-5 mb-4 text-xs text-[#AB23FF] uppercase'>
                            soon
                        </span>
                    </a>
                </li>
                <li >
                    <a href="#">
                        Token
                        <span className='mx-5 mb-4 text-xs text-[#AB23FF] uppercase'>
                            soon
                        </span>
                    </a>
                </li>
                <li >
                    <a href="#">
                        AI Income
                        <span className='mx-5 mb-4 text-xs text-[#AB23FF] uppercase'>
                            soon
                        </span>
                    </a>
                </li>
                <li >
                    <a href="#">
                        AI Laanchpad
                        <span className='mx-5 mb-4 text-xs text-[#AB23FF] uppercase'>
                            soon
                        </span>
                    </a>
                </li>
            </ul>
            <ul className="social-icons gap-5">
                <li>
                    <Button color="white_A700" size="xs" shape="circle" className="w-[34px] !rounded-[17px] hover:bg-blue-A200 transition-colors duration-300">
                        <Img src="img_discord.svg" width={34} height={34} className="" />
                    </Button>
                </li>
                <li>
                    <Button color="white_A700" size="xs" shape="circle" className="w-[34px] !rounded-[17px] hover:bg-blue-A200 transition-colors duration-300">
                        <Img src="img_akar_icons_twitter_fill.svg" width={34} height={34} />
                    </Button>
                </li>
                <li>
                    <Button color="white_A700" size="xs" shape="circle" className="w-[34px] !rounded-[17px] hover:bg-blue-A200 transition-colors duration-300">
                        <Img src="img_akar_icons_twitter_fill_white_a700.svg" width={34} height={34} />
                    </Button>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;

/* 
<aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className='sidebar-header'>
                <h2 className='logo'>connect</h2>
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className='links'>
                <li >
                    <a href="#">
                        dddd
                    </a>
                </li>
                <li >
                    <a href="#">
                        dddd
                    </a>
                </li>
                <li >
                    <a href="#">
                        dddd
                    </a>
                </li>
                <li >
                    <a href="#">
                        dddd
                    </a>
                </li>

            </ul>
        </aside>
*/