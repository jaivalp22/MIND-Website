import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600'],
});

export const metadata = {
    title: "MIND",
}

export default function Home() {
    return (
        <div className={`${montserrat.className}`}>

            <div className="bg-plain-grey w-full w-screen h-screen bg-cover bg-center bg-fixed flex p-8 relative h-full overflow-hidden">
            <img src="/images/logo-transparent.png" alt="MIND Logo" className="object-contain absolute logo-image animate-logo"/>
            <img src="/images/Home.png" alt="Home" className="absolute home-image-right object-contain slide-in-right"/>
            <img src="/images/Homeleft.png" alt="Home" className="absolute home-image-left object-contain slide-in-left"/>
            {/* image of big logo */}
            <h2 className="font-extrabold fade-in main-heading ">We are </h2>
            <p className="font-light fade-in-second sub-heading">At the University of Calgary</p>
            <h1 className="font-semibold fade-in-third slogan">Moving Minds, One Neuron at a Time</h1>
            </div>
            
        </div>
        
    );
}

