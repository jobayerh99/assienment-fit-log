'use client'
import { FitnessContext } from '@/context/FitnessContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const NavSavedButton = () => {

    const { savedWorkout } = useContext(FitnessContext)

    return (
        <Link href="/my-plan?tab=saved">
            <button className='flex items-center text-center gap-1'>
                <span className='font-medium text-[#D1D5DB]'>
                    Saved
                </span>
                <span className='bg-[#2D313B] font-bold text-sm text-white p-2 rounded-full border-[#D1D5DB]'>
                    {savedWorkout.length}
                </span>
            </button>
        </Link>
    );
};

export default NavSavedButton;