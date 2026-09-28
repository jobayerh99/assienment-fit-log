"use client";

import { FitnessContext } from "@/context/FitnessContext";
import { useContext, useState } from "react";
import { useSearchParams } from "next/navigation";
import MyPlanCard from "@/components/shared/MyPlanCard";
import Link from "next/link";

const MyPlan = () => {
    const { todaysPlan, savedWorkout } = useContext(FitnessContext);

    // Read query parameter (?tab=plan or ?tab=saved)
    const searchParams = useSearchParams();
    const initialTab = searchParams.get("tab") || "plan"; // default to "plan"

    const [selectedTab, setSelectedTab] = useState(null);
    const activeTab = selectedTab ?? initialTab;

    return (
        <section>
            <div className="container mx-auto p-4 mt-5">
                <h2 className="uppercase font-[oswad] font-bold text-3xl text-white">my plan</h2>
                <p className=" font-[inter] text-[#8A92A0]">Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className="container mx-auto p-4 flex justify-between bg-[#232732] rounded-3xl items-center text-center mb-6">
                <div>
                    <p className=" font-[inter] text-[#8A92A0]">Exercise</p>
                    <span className="uppercase font-[oswad] font-bold text-3xl text-white">{todaysPlan.length}</span>
                </div>
                <div>
                    <p className=" font-[inter] text-[#8A92A0]">Minutes</p>
                    <span className="uppercase font-[oswad] font-bold text-3xl text-white">{todaysPlan.length}</span>
                </div>
                <div>
                    <p className=" font-[inter] text-[#8A92A0]">Calories</p>
                    <span className="uppercase font-[oswad] font-bold text-3xl text-white">{todaysPlan.length}</span>
                </div>
            </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift container mx-auto">

                {/*  my plan side */}
                <input type="radio"
                    name="my_tabs_3"
                    className="tab text-[#8A92A0] border rounded-xl p-2 m-2"
                    aria-label="Today's Plan"
                    defaultChecked />

                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        todaysPlan.length > 0 ? (
                            todaysPlan.map((plan) => (
                                <MyPlanCard key={plan.id} plan={plan} />
                            ))
                        ) : (
                            <div className="text-center space-y-4  border-[#A1A1AA] rounded-2xl p-8 bg-black">
                                <h3 className="text-lg font-bold font-[oswald]">Nothing here yet</h3>
                                <p className="text-gray-500">
                                    Browse the library and add a lift to get today moving.
                                </p>
                                <Link href="/">
                                    <button
                                        className="btn btn-primary bg-[#C2F10D] text-black border-none rounded-2xl"
                                    >
                                        Go to Workout
                                    </button>
                                </Link>
                            </div>
                        )
                    }
                </div>

                {/* saved side */}

                <input type="radio"
                    name="my_tabs_3"
                    className="tab text-[#8A92A0] border rounded-xl p-2 m-2"
                    aria-label="Saved"
                    defaultChecked />

                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        savedWorkout.length > 0 ? (
                            savedWorkout.map((plan) => (
                                <MyPlanCard key={plan.id} plan={plan} />
                            ))
                        ) : (
                            <div className="text-center space-y-4  border-[#A1A1AA] rounded-2xl p-8 bg-black">
                                <h3 className="text-lg font-bold font-[oswald]">Nothing here yet</h3>
                                <p className="text-gray-500">
                                    Browse the library and add a lift to get today moving.
                                </p>
                                <Link href="/">
                                    <button
                                        className="btn btn-primary bg-[#C2F10D] text-black border-none rounded-2xl"
                                    >
                                        Go to Workout
                                    </button>
                                </Link>
                            </div>
                        )
                    }
                </div>


            </div>
        </section>
    );
};

export default MyPlan;
