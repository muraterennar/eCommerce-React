import React from 'react';
import {HomeBanner} from "../../../../constants/ui-constants"

function HeroImage({className}) {
    return (
        <div className={className}>
            <img className={"w-full h-full object-contain"} src={HomeBanner} alt={"here-banner"} />
        </div>
    );
}

export default HeroImage;