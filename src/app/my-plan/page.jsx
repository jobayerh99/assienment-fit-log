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
                <input type="radio" 
                name="my_tabs_3" 
                className="tab text-[#8A92A0]" 
                aria-label="Today's Plan"
                defaultChecked />

                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

                <input type="radio" 
                name="my_tabs_3" 
                className="tab text-[#8A92A0]" 
                aria-label="Saved"
                 />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

                
            </div>
        </section>
    );
};

export default MyPlan;
