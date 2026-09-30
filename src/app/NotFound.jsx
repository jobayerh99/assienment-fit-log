import Link from "next/link";

const NotFound = () => {
    return (
        <section className="container mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center p-8">
            <p className="font-[oswald] font-bold text-7xl text-[#C2F10D]">404</p>
            <h1 className="uppercase font-[oswald] font-bold text-3xl text-white mt-4">
                Page not found
            </h1>
            <p className="font-[inter] text-[#8A92A0] mt-2 max-w-md">
                This route does not exist. Go back to the library and pick a lift.
            </p>
            <Link href="/">
                <button className="btn mt-6 bg-[#C2F10D] text-black border-none rounded-2xl">
                    Go to Workout
                </button>
            </Link>
        </section>
    );
};

export default NotFound;