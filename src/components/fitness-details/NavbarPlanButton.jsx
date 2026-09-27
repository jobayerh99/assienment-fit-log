'use client'
import { FitnessContext } from '@/context/FitnessContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const NavbarPlanButton = () => {

    const { todaysPlan } = useContext(FitnessContext)

    return (
        <Link href="/my-plan?tab=plan">
            <button className='flex items-center text-center gap-1'>
                <span className='font-medium text-[#D1D5DB]'>
                    Plan
                </span>
                <span className='bg-[#C2F800] font-bold text-sm text-black p-2 rounded-full'>
                    {todaysPlan.length}
                </span>
            </button>
        </Link>
    );
};

export default NavbarPlanButton;