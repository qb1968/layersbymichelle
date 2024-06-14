import React from 'react';
import IBE from '../../assets/img/placeholder/IBE-Logo-Footer-2.png'
import Barb from '../../assets/img/placeholder/barbicide.png'
import El from '../../assets/img/placeholder/elevate.jpg'
import K from '../../assets/img/placeholder/k18-1.png'
import Ol from '../../assets/img/placeholder/olaplex-logo.jpg'
import Hair from '../../assets/img/placeholder/hairlocs.jpg'

const AboutClients = () => {
    return (
        <div id="clients" className="block spacer p-top-xl">
            <div className="bg-light-full-width clients-bottom-no-space">
                <div className="clients">
                    <div className="clients-items">
                        <div className="clients-item">
                            <div className="clients-item-content">
                                <img src={IBE} alt="Balkan" />
                            </div>
                        </div>

                        <div className="clients-item">
                            <div className="clients-item-content">
                                <img src={Barb} alt="Adveits" />
                            </div>
                        </div>

                        <div className="clients-item">
                            <div className="clients-item-content">
                                <img src={El} alt="Swiger" />
                            </div>
                        </div>

                        <div className="clients-item">
                            <div className="clients-item-content">
                                <img src={K} />
                            </div>
                        </div>

                        <div className="clients-item">
                            <div className="clients-item-content">
                                <img src={Ol} />
                            </div>
                        </div>

                        <div className="clients-item">
                            <div className="clients-item-content">
                                <img src={Hair} alt="Adveits" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutClients;
