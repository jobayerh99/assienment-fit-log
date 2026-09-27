import FitnessCard from "@/components/shared/FitnessCard";
import React from 'react';

// Data fetching section
const getFitnessData = async () => {

    try {
        const res = await fetch('https://api.api-store.workers.dev/api/fitlog')
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error Fetching Fitness Data", error)
        return [];
    };
}

// Fitness Library starts here

const FitnessLibrary = async () => {

    const fitnessData = await getFitnessData();

    
    return (
        <section className='container mx-auto py-10'>
            {/* text section */}
            <div className=" space-y-1 pb-5">
                <h2 className='font-[oswald] font-bold text-3xl text-white'>THE LIBRARY</h2>

                <p className='font-[inter] font-normal text-sm text-[#9CA3AF] '>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {
                    fitnessData.map((fitness) => 
                    <FitnessCard key={fitness.id} fitness={fitness}></FitnessCard>)
                }
            </div>
        </section>
    );
};

export default FitnessLibrary;