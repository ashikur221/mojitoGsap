import React from 'react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';

const App = () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);



    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
            <Art />
        </main>
    );
};

export default App;