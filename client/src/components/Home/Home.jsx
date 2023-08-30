import React from 'react'
import "./Home.css"
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <div className='home'>
                <Typewriter
                options={{
                    strings: ['EVERY SIP TELLS A STORY', 'EXPLORE A WORLD OF FLAVOR TODAY'],
                    autoStart: true,
                    loop: true,
                }}
            />
            <div> SAVOR THE FRESHLY GROUND BEAN EXPERIENCE.</div>
        </div>
    )
}

export default Home