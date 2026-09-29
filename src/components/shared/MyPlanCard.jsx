import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFire, FaRegStar } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { MdOutlineDone } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import ViewWorkoutDetailsbutton from '../fitness-details/ViewWorkoutDetailsbutton';

const MyPlanCard = ({ plan }) => {

    
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 p-4 rounded-xl bg-[#1C1F26] shadow-md hover:shadow-lg transition-all duration-300">

            {/* Unified section for image + details */}
            <div className="flex items-center gap-4 w-full lg:w-3/4 bg-[#252A33] rounded-xl p-4 border-r-0">
                <div className="shrink-0 flex items-center justify-center h-24 w-36 overflow-hidden rounded-lg">
                    <Image
                        src={plan.image}
                        width={144}
                        height={80}
                        alt={plan.name}
                        className="object-cover h-full w-full"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <h2 className="text-lg font-bold text-white">{plan.name}</h2>
                    <p className="text-sm text-gray-400">{plan.equipment}</p>

                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-300">
                        <div className="flex items-center gap-1">
                            <IoTimeOutline className="text-blue-400" />
                            {`${plan.duration} min`}
                        </div>
                        <div className="flex items-center gap-1">
                            <FaFire className="text-red-500" />
                            {`${plan.caloriesBurned} kcal`}
                        </div>
                        <div className="flex items-center gap-1">
                            <FaRegStar className="text-yellow-400" />
                            {plan.rating}
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons section with same background */}
            <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-end w-full lg:w-auto bg-[#252A33] rounded-xl p-4">
                <ViewWorkoutDetailsbutton fitnessId = {plan.id}></ViewWorkoutDetailsbutton>
                <button className="btn btn-success flex items-center gap-2 px-4">
                    <MdOutlineDone /> Mark as Done
                </button>

                <span>
                    <RxCross2 />
                </span>

            </div>
        </div>
    );
};

export default MyPlanCard;
