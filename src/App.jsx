import React from 'react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';

const App = () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);



    return (
        <main>
            <Navbar />
            <Hero/>
            <Cocktails/>
        </main>
    );
};

export default App;