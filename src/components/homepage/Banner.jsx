import React from "react";
import BannerImg from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="container mx-auto bg-[#15171D] flex flex-col md:flex-row justify-between items-center p-6 sm:p-8 md:p-10 lg:p-14 my-6 md:my-12 rounded-xl">

            {/* Text Section */}
            <div className="space-y-5 text-center md:text-left">

                <p className="font-[inter] font-bold text-sm text-[#C2F800] uppercase">
                    WORKOUT LIBRARY
                </p>

                <h1 className="font-[oswad] text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                    TRAIN WITH INTENT. LOG{" "}
                    <br className="hidden sm:block" />
                    EVERY SET.
                </h1>

                <p className="font-normal font-[inter] text-sm sm:text-base text-[#9CA3AF]">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    <br className="hidden md:block" />
                    into today&apos;s plan, and watch the week&apos;s work add up.
                </p>

                <a href="#card-id">
                    <button className="btn uppercase font-[inter] font-bold text-sm text-black bg-[#C2F800] ">
                        Browse workouts
                    </button>
                </a>
            </div>

            {/* Image Section */}
            <div className="mt-8 md:mt-0">
                <Image
                    src={BannerImg}
                    width={334}
                    height={334}
                    alt="banner image"
                    className="w-55 sm:w-65 md:w-[334px] h-auto"
                />
            </div>

        </div>
    );
};

export default Banner;