import React from "react";
import MagicButton from "./MagicButton";
import { FaFilePdf, FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
            
            <div className="flex flex-col items-center">
                <h1 className="text-white heading lg:max-w-[45vw] bottom-10 left-0 right-0 px-4 md:px-8">
                    Feel free to <span className="text-purple">Connect</span> !
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center bottom-10 left-0 right-0 px-4 md:px-8">
                    Eager to contribute my software development and system architecture skills to drive project success. Let&apos;s connect to discuss how I can add value to your team.
                </p>
                <a href="https://drive.google.com/file/d/1wbNEwOporG8Z3a-an2cwT8PdYCqRGRId/view?usp=sharing">
                    <MagicButton
                        title="View my Resume"
                        icon={<FaFilePdf />}
                        position="right"
                    />
                </a>
                
                <div className="w-full flex flex-col md:flex-row justify-between items-center mt-12 md:mt-16 relative bottom-0 left-0 right-0 px-4 md:px-8">
                    <p className="text-white md:text-base text-sm md:font-normal font-light mb-4 md:mb-0">
                        Copyright ©️ 2024 Kunal Panigrahi
                    </p>
                    
                    <div className="flex items-center md:gap-3 gap-6">
                        {socialMedia.map((profile) => (
                            <a
                                key={profile.id}
                                href={profile.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                <Image src={profile.img} alt={profile.img} width={20} height={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
