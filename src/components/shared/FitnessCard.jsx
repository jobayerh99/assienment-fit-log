import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiTwotoneFire } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const FitnessCard = ({ fitness }) => {
    return (
        <Link
            href={`/workout/${fitness.id}`}
            className="group block h-full min-w-0"
        >
            <article id="card-id" className="scroll-mt-20 flex h-full flex-col overflow-hidden rounded-xl border border-[#292D38] bg-[#15171D] transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]">

                {/* Workout Image */}
                <div className="relative aspect-[2/1] w-full overflow-hidden bg-[#20242E]">
                    <Image
                        src={fitness.image}
                        alt={fitness.name}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Subtle image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-3 sm:p-4">

                    {/* Muscle Groups */}
                    <div className="mb-2 flex flex-wrap gap-1.5">
                        {fitness.muscleGroups.slice(0, 2).map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#C2F800] px-2.5 py-1 text-[10px] font-bold uppercase leading-none tracking-wide text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Workout Name */}
                    <h2 className="mb-1 line-clamp-1 font-[oswald] text-lg font-bold uppercase leading-tight text-white transition-colors duration-300  sm:text-xl">
                        {fitness.name}
                    </h2>

                    {/* Equipment */}
                    <p className="truncate text-xs text-[#8D929F] sm:text-sm">
                        {fitness.equipment}
                    </p>

                    {/* Divider */}
                    <div className="my-3 h-px w-full bg-[#292D38]" />

                    {/* Workout Stats */}
                    <div className="mt-auto flex items-center justify-between gap-2 text-[11px] text-[#A1A6B2] sm:text-xs">

                        {/* Duration */}
                        <span className="flex min-w-0 items-center gap-1.5">
                            <IoTimeOutline className="shrink-0 text-sm text-[#8D929F]" />
                            <span className="truncate">{fitness.duration} min</span>
                        </span>

                        {/* Calories */}
                        <span className="flex min-w-0 items-center gap-1.5">
                            <AiTwotoneFire className="shrink-0 text-sm text-[#8D929F]" />
                            <span className="truncate">{fitness.caloriesBurned} kcal</span>
                        </span>

                        {/* Rating */}
                        <span className="flex shrink-0 items-center gap-1.5">
                            <FaRegStar className="text-xs text-[#8D929F]" />
                            <span>{fitness.rating}</span>
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default FitnessCard;