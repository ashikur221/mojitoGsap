import React from 'react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';

const App = () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);



    return (
        <div className=' flex-center h-[100vh]'>
            App.
        </div>
    );
};

export default App;