import React from 'react';
import Image from 'next/image';
import { IoTimeOutline } from 'react-icons/io5';
import { FaFire, FaRegStar } from 'react-icons/fa';
import { MdOutlineDone } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

const SavedCard = ({ plan }) => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-2xl bg-[#1C1F26] border border-white/5 shadow-md hover:border-[#C2F800]/20 hover:shadow-lg transition-all duration-300">

            {/* Image + Workout Details */}
            <div className="flex items-center gap-4 w-full lg:flex-1 min-w-0 bg-[#252A33] rounded-xl p-3 sm:p-4">

                <div className="shrink-0 flex items-center justify-center h-20 w-24 sm:h-24 sm:w-36 overflow-hidden rounded-lg bg-[#1C1F26]">
                    <Image
                        src={plan.image}
                        width={144}
                        height={96}
                        alt={plan.name}
                        className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
                    />
                </div>

                <div className="flex flex-col justify-center min-w-0 flex-1">

                    <h2 className="text-base sm:text-lg font-bold text-white leading-snug truncate">
                        {plan.name}
                    </h2>

                    <p className="text-sm text-gray-400 mt-1 truncate">
                        {plan.equipment}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-xs sm:text-sm text-gray-300">

                        <div className="flex items-center gap-1.5">
                            <IoTimeOutline className="text-blue-400 text-base shrink-0" />
                            <span>{`${plan.duration} min`}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <FaFire className="text-red-500 text-sm shrink-0" />
                            <span>{`${plan.caloriesBurned} kcal`}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <FaRegStar className="text-yellow-400 text-sm shrink-0" />
                            <span>{plan.rating}</span>
                        </div>

                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-nowrap items-center justify-center lg:justify-between gap-2 sm:gap-3 w-full lg:w-auto rounded-xl p-3 sm:p-4">

                <button className="btn btn-outline border-white/15 text-gray-300 hover:bg-[#C2F800] hover:border-[#C2F800] hover:text-black h-10 min-h-10 px-3 sm:px-4 text-xs sm:text-sm font-semibold normal-case whitespace-nowrap shrink-0 transition-all duration-300">
                    View Details
                </button>

                <button className="btn bg-[#C2F800] border-[#C2F800] text-black hover:bg-[#D4FF24] hover:border-[#D4FF24] h-10 min-h-10 px-3 sm:px-4 flex items-center gap-2 text-xs sm:text-sm font-bold normal-case whitespace-nowrap shrink-0 transition-all duration-300">
                    <MdOutlineDone className="text-lg shrink-0" />
                    Mark as Done
                </button>

                <button className="btn btn-ghost text-gray-400 hover:bg-red-500/10 hover:text-red-400 h-10 min-h-10 w-10 min-w-10 p-0 rounded-full shrink-0 transition-all duration-300">
                    <RxCross2 className="text-xl" />
                </button>

            </div>
        </div>
    );
};

export default SavedCard;