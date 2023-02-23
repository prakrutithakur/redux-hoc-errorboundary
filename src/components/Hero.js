import React from 'react';

const Hero = (props) => {
    if (props.hero === "Joker") {
        throw new Error("Not a Hero");
    }
    return <div>
        {props.hero}
    </div>;
}

export default Hero;