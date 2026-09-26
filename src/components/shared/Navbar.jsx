import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/logo.png'

const Navbar = () => {
    return (
        <nav className=' bg-black'>
            <div className="navbar container mx-auto shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='font-[inter]'><a>Workouts</a></li>
                            
                            <li className='font-[inter]'><a>My Plan</a></li>
                        </ul>
                    </div>
                    <div className='flex gap-1 text-xl font-bold items-center'>
                        <Image 
                        src={Logo}
                        alt='Logo'
                        height={28}
                        width={28}
                        ></Image>
                        <h4 className='font-[oswald]'>FITLOG</h4>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-[inter]'><a>Workouts</a></li>
                        
                        <li className='font-[inter]'><a>My Plan</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <a className="btn">Button</a>
                    <a className="btn">Button</a>
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;