import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/logo.png'

const Footer = () => {
    return (
        <div className='container mx-auto lg:flex md:flex justify-between items-center gap-4 p-6'>
            <Link href="/">
                <div className='flex gap-1 text-xl font-bold items-center'>
                    <Image
                        src={Logo}
                        alt='Logo'
                        height={28}
                        width={28}
                    ></Image>
                    <h4 className='font-[oswald]'>FITLOG</h4>
                </div>
            </Link>
            <div>
                <p className='font-[inter] text-xs font-normal'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;