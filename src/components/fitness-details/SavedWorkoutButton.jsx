'use client'
import { FitnessContext } from '@/context/FitnessContext';
import React, { useContext } from 'react';
import { IoIosBookmark } from 'react-icons/io';
import { toast } from "react-toastify";


const SavedWorkoutButton = ({ fitnessData }) => {

    const { savedWorkout,
        setSavedWorkout, } = useContext(FitnessContext);

    const handelSavedWorkout = () => {

        const alreadyAdded = savedWorkout.some((workout) => workout.id === fitnessData.id)

        if (alreadyAdded) {
            toast.info("This workout is already in your save list!");
            return;
        }

        setSavedWorkout((prevPlan) => [
            ...prevPlan,
            fitnessData
        ])

        toast.success(`You Have Successfully added ${fitnessData.name} to Saved for later`)
    }

    return (
        <button className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-[#2D333F] bg-transparent px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-[#1A1F2C] sm:text-sm"
            onClick={() => handelSavedWorkout()}
        >

            <IoIosBookmark className="shrink-0 text-xl" />

            <span>
                Save for later
            </span>

        </button>
    );
};

export default SavedWorkoutButton;