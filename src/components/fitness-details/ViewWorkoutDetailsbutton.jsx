'use client'
import Link from 'next/link';
import React from 'react';

const ViewWorkoutDetailsbutton = ({ fitnessId }) => {

    return (
        <Link href={`/workout/${fitnessId}`}>
            <button className="btn btn-outline btn-primary px-4">View Details</button>
        </Link>
    );
};

export default ViewWorkoutDetailsbutton;