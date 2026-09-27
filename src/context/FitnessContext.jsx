'use client'
import React, { createContext, useState } from 'react';


export const FitnessContext = createContext({})

const FitnessProvider = ({ children }) => {

    const [todaysPlan, setTodaysPlan] = useState([]);
    const [savedWorkout, setSavedWorkout] = useState([]);

    const sharedData = {
        todaysPlan,
        setTodaysPlan,
        savedWorkout,
        setSavedWorkout,
    };

    return (
        <FitnessContext.Provider value={sharedData}>
            {children}
        </FitnessContext.Provider>
    );
};

export default FitnessProvider;