import PlanButton from '@/components/fitness-details/PlanButton';
import SavedWorkoutButton from '@/components/fitness-details/SavedWorkoutButton';
import Image from 'next/image';
import React from 'react';
import { IoIosBookmark } from 'react-icons/io';
import { MdOutlineToday } from 'react-icons/md';

// Data fetching section
const getFitnessData = async (fitnessId) => {
    try {
        const res = await fetch(
            `https://api.api-store.workers.dev/api/fitlog/${fitnessId}`
        );

        const fitnessData = await res.json();
        return fitnessData;
    } catch (error) {
        console.error("Error Fetching Fitness Data", error);
        return null;
    }
};

const FitnessDetails = async ({ params }) => {
    const { fitnessId } = await params;
    const fitnessData = await getFitnessData(fitnessId);

    if (!fitnessData) return null;

    const specs = [
        { label: 'Equipment', value: fitnessData.equipment },
        { label: 'Difficulty', value: fitnessData.difficulty },
        { label: 'Sets', value: fitnessData.sets },
        { label: 'Reps', value: fitnessData.reps },
        { label: 'Duration', value: `${fitnessData.duration} min` },
        { label: 'Calories', value: `${fitnessData.caloriesBurned} kcal` },
        { label: 'Rating', value: fitnessData.rating },
    ];

    return (
        <section className="w-full px-4 py-8 sm:px-6 lg:px-8">

            <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-b from-[#0B0F17] to-[#121721] text-white shadow-xl sm:rounded-3xl">

                {/* Main Grid */}
                <div className="grid grid-cols-1 gap-8 p-4 sm:p-6 lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:p-8">

                    <div className="relative h-full min-h-[400px] overflow-hidden rounded-3xl bg-[#161B26] shadow-lg lg:min-h-0">

                        {fitnessData.image && (
                            <Image
                                src={fitnessData.image}
                                alt={fitnessData.name || 'Workout Image'}
                                fill
                                priority
                                sizes="(max-width: 1023px) 100vw, 50vw"
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        )}

                    </div>

                    {/* information */}
                    <div className="flex h-full flex-col justify-between gap-6">

                        {/* Header Details */}
                        <div>

                            <h1 className="mb-3 break-words font-[oswald] text-3xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
                                {fitnessData.name}
                            </h1>

                            <p className="mb-5 font-[inter] text-sm leading-7 text-[#9CA3AF] sm:text-base">
                                {fitnessData.description}
                            </p>

                            {/* Muscle Badges */}
                            <div className="flex flex-wrap gap-2">
                                {fitnessData.muscleGroups?.slice(0, 2).map((muscle) => (
                                    <span
                                        key={muscle}
                                        className="rounded-full bg-[#C2F800] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black shadow-md"
                                    >
                                        {muscle}
                                    </span>
                                ))}
                            </div>

                        </div>

                        {/* Stats / Parameters Table */}
                        <div className="overflow-hidden rounded-2xl border border-[#1E2532] bg-[#121721] text-sm font-[inter] shadow-md sm:text-base">

                            {specs.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between gap-4 border-b border-[#1E2532] px-4 py-3.5 transition-colors last:border-b-0 hover:bg-[#1A1F2C] sm:px-5 sm:py-4"
                                >

                                    <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-[#8E95A5] sm:text-sm">
                                        {item.label}
                                    </span>

                                    <span className="min-w-0 break-words text-right font-medium text-[#E5E7EB]">
                                        {item.value}
                                    </span>

                                </div>
                            ))}

                        </div>

                        {/* Instructions Section */}
                        <div>

                            <h3 className="mb-4 font-[inter] text-lg font-black uppercase tracking-wider text-white sm:text-xl">
                                Instructions
                            </h3>

                            <ol className="flex flex-col gap-3 font-[inter] text-sm leading-7 text-[#9CA3AF] sm:gap-4 sm:text-base">

                                {fitnessData.instructions?.map((step, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="min-w-[22px] font-semibold text-white">
                                            {index + 1}.
                                        </span>

                                        <span>{step}</span>
                                    </li>
                                ))}

                            </ol>

                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">

                            <PlanButton fitnessData={fitnessData}></PlanButton>

                            <SavedWorkoutButton fitnessData={fitnessData}></SavedWorkoutButton>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default FitnessDetails;