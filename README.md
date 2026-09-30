Project Name: Workout Guide

Description: 
      Workout Guide is a Next.js fitness app that helps users browse workouts and build a daily plan. Each exercise card shows duration, calories, muscle groups, and how to perform the lift. Users can add a workout to Today’s Plan or save it for later, then open My Plan to switch between those lists. Stats for exercise count, minutes, and calories update with the active tab and drop when a workout is removed. Lists can be sorted by duration, calories, or rating.

Technologies used:
1. Next.js (App Router) — pages, routing, not-found, useSearchParams
2. React — components, state, lists (map, filter, sort)
3. JavaScript (JSX) — app logic
4. React Context API — shared todaysPlan and savedWorkout (FitnessContext)
5. Tailwind CSS — layout and styling
6. DaisyUI — UI pieces (btn, select, cards)
7. Next.js Link — client-side navigation

5 Key Features:
1. Workout library — Browse lifts with image, muscle groups, equipment, difficulty, sets/reps, duration, calories, and rating.
2. Today’s Plan — Add workouts to a daily list (cap of five lifts) and manage them from My Plan.
3. Save for later — Bookmark workouts and open them in the Saved tab with a separate card UI.
4. Live plan stats — Exercise count, total minutes, and calories follow the active tab and drop when a workout is removed.
5. Sort & 404 — Sort a tab by duration, calories, or rating; unknown URLs show a custom 404 page.
