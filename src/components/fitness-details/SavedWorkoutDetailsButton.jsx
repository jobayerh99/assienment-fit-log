import Link from 'next/link';
import React from 'react';

const SavedWorkoutDetailsButton = ({fitnessId}) => {
    return (
        <Link href={`/workout/${fitnessId}`}>
            <button className="btn btn-outline border-white/15 text-gray-300 hover:bg-[#C2F800] hover:border-[#C2F800] hover:text-black h-10 min-h-10 px-3 sm:px-4 text-xs sm:text-sm font-semibold normal-case whitespace-nowrap shrink-0 transition-all duration-300">
                View Details
            </button>
        </Link>
    );
};

export default SavedWorkoutDetailsButton;