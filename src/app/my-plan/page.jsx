"use client";

import { FitnessContext } from "@/context/FitnessContext";
import { useContext, useState } from "react";
import { useSearchParams } from "next/navigation";
import MyPlanCard from "@/components/shared/MyPlanCard";
import Link from "next/link";
import SavedCard from "@/components/shared/SavedCard";

const EmptyState = () => {
    return (
        <div className="text-center space-y-4 border border-[#A1A1AA] rounded-2xl p-8 bg-black">
            <h3 className="text-lg font-bold font-[oswald]">Nothing here yet</h3>
            <p className="text-gray-500">
                Browse the library and add a lift to get today moving.
            </p>
            <Link href="/">
                <button className="btn btn-primary bg-[#C2F10D] text-black border-none rounded-2xl">
                    Go to Workout
                </button>
            </Link>
        </div>
    );
};

const getMinutes = (item) => Number(item.duration) || 0;
const getCalories = (item) => Number(item.caloriesBurned) || 0;

const sortWorkout = (list, sortBy) => {
    const sortedWorkouts = [...list];

    if (sortBy === "duration") {
        sortedWorkouts.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
        sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
        sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }

    return sortedWorkouts;
};

const MyPlan = () => {
    const { todaysPlan, savedWorkout } = useContext(FitnessContext);

    const searchParams = useSearchParams();
    const initialTab = searchParams.get("tab") || "plan";

    const [selectedTab, setSelectedTab] = useState(null);
    const activeTab = selectedTab ?? initialTab;

    const [sortBy, setSortBy] = useState("duration");

    const plans = activeTab === "plan" ? todaysPlan : savedWorkout;
    const sortedPlans = sortWorkout(plans, sortBy);

    const totalExercise = plans.length;
    const totalMinutes = plans.reduce((sum, item) => sum + getMinutes(item), 0);
    const totalCalories = plans.reduce((sum, item) => sum + getCalories(item), 0);

    return (
        <section>
            <div className="container mx-auto p-4 mt-5">
                <h2 className="uppercase font-[oswald] font-bold text-3xl text-white">
                    my plan
                </h2>
                <p className="font-[inter] text-[#8A92A0]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between bg-[#232732] rounded-3xl items-center text-center mb-6 gap-4">
                <div>
                    <p className="font-[inter] text-[#8A92A0]">Exercise</p>
                    <span className="uppercase font-[oswald] font-extrabold text-3xl text-[#C2F800]">
                        {totalExercise}
                    </span>
                </div>
                <div>
                    <p className="font-[inter] text-[#8A92A0]">Minutes</p>
                    <span className="uppercase font-[oswald] font-bold text-3xl text-white">
                        {totalMinutes}
                    </span>
                </div>
                <div>
                    <p className="font-[inter] text-[#8A92A0]">Calories</p>
                    <span className="uppercase font-[oswald] font-bold text-3xl text-white">
                        {totalCalories}
                    </span>
                </div>
            </div>

            <div className="container mx-auto p-4 mb-6">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                        <button
                            type="button"
                            onClick={() => setSelectedTab("plan")}
                            className={`border rounded-xl px-4 py-2 font-[inter] ${activeTab === "plan"
                                    ? "bg-[#C2F10D] text-black border-transparent"
                                    : "text-[#8A92A0]"
                                }`}
                        >
                            Today&apos;s Plan
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedTab("saved")}
                            className={`border rounded-xl px-4 py-2 font-[inter] ${activeTab === "saved"
                                    ? "bg-[#C2F10D] text-black border-transparent"
                                    : "text-[#8A92A0]"
                                }`}
                        >
                            Saved
                        </button>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        <p className="font-[inter] text-[#8A92A0] whitespace-nowrap">
                            Sort By
                        </p>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="select select-bordered select-sm w-auto min-w-32"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>

                <div className="w-full mt-4">
                    {sortedPlans.length > 0 ? (
                        sortedPlans.map((plan) =>
                            activeTab === "plan" ? (
                                <MyPlanCard key={plan.id} plan={plan} />
                            ) : (
                                <SavedCard key={plan.id} plan={plan} />
                            )
                        )
                    ) : (
                        <EmptyState />
                    )}
                </div>
            </div>
        </section>
    );
};

export default MyPlan;