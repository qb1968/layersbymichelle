import React from 'react';
import BIO from '../../assets/img/placeholder/bio.JPG'
const AboutImg = () => {
    return (
        <div id="about-us-img" className="block">
            <div className="about-img">
                <div className="img object-fit">
                    <div className="object-fit-cover">
                        <img src={BIO}  alt="About us" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutImg;
