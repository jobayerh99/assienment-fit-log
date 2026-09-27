"use client";

import { FitnessContext } from "@/context/FitnessContext";
import { useContext, useState } from "react";
import { useSearchParams } from "next/navigation";

const MyPlan = () => {
    const { todaysPlan, savedWorkout } = useContext(FitnessContext);

    // Read query parameter (?tab=plan or ?tab=saved)
    const searchParams = useSearchParams();
    const initialTab = searchParams.get("tab") || "plan"; // default to "plan"

    const [selectedTab, setSelectedTab] = useState(null);
    const activeTab = selectedTab ?? initialTab;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">My Plan</h1>

            {/* Tab buttons */}
            <div className="flex gap-4 mb-6">
                <button
                    className={`px-4 py-2 rounded ${activeTab === "plan" ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                    onClick={() => setSelectedTab("plan")}
                >
                    Plan
                </button>
                <button
                    className={`px-4 py-2 rounded ${activeTab === "saved" ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                    onClick={() => setSelectedTab("saved")}
                >
                    Saved
                </button>
            </div>

            {/* Tab content */}
            <div>
                {activeTab === "plan" && (
                    <div>
                        {todaysPlan.length === 0 ? (
                            <p>No workouts in your plan yet.</p>
                        ) : (
                            todaysPlan.map((workout) => (
                                <div key={workout.id} className="mb-2 p-2 border rounded bg-white">
                                    <h2 className="font-semibold text-black">{workout.title}</h2>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {activeTab === "saved" && (
                    <div>
                        {savedWorkout.length === 0 ? (
                            <p>No workouts saved yet.</p>
                        ) : (
                            savedWorkout.map((workout) => (
                                <div key={workout.id} className="mb-2 p-2 border rounded">
                                    <h2 className="font-semibold">{workout.title}</h2>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyPlan;
