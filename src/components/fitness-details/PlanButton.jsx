'use client'

import { FitnessContext } from '@/context/FitnessContext';
import React, { useContext } from 'react';
import { MdOutlineToday } from 'react-icons/md';
import { toast } from 'react-toastify';

const PlanButton = ({ fitnessData }) => {

    const { todaysPlan,
        setTodaysPlan,
    } = useContext(FitnessContext)



    const handlePlan = () => {
        const alreadyAdded = todaysPlan.some(
            (workout) => workout.id === fitnessData.id
        );

        if (alreadyAdded) {
            toast.info("This workout is already in your plan!");
            return;
        }

        setTodaysPlan((prevPlan) => [
            ...prevPlan,
            fitnessData
        ])

        toast.success(
            `${fitnessData.name} added to today's plan!`
        );
    };


    return (
        <button className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#C2F800] px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-[#D4FF24] sm:text-sm"
            // onclick function
            onClick={() => handlePlan()}
        >

            <MdOutlineToday className="shrink-0 text-xl" />

            <span>
                Add to today&apos;s plan
            </span>

        </button>
    );
};

export default PlanButton;