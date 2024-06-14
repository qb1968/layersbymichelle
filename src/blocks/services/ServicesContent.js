import React from 'react';
import Two from '../../assets/img/placeholder/blonding.jpg'
import One from '../../assets/img/placeholder/extensions.jpg'
import Three from '../../assets/img/placeholder/others.jpg'
const ServicesContent = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="row gutter-width-sm with-pb-sm services-items">
                  
                       
                            <div  className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                <a  className="services-item" href="/services-inside">
                                    <div className="services-item-content">
                                        <h3 className="services-item-t-head">Extensions</h3>

                                        <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">read more</span>
                                    </div>

                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src={ One } alt= ""/>
                                        </div>
                                    </div>

                                    <div className="img-bg-color"></div>
                                </a>
                            </div>
                            <div  className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                <a  className="services-item" href="/services-inside">
                                    <div className="services-item-content">
                                        <h3 className="services-item-t-head">Blonding</h3>

                                        <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">read more</span>
                                    </div>

                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src={ Two }  alt= ""/>
                                        </div>
                                    </div>

                                    <div className="img-bg-color"></div>
                                </a>
                            </div>
                            <div  className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                <a  className="services-item" href="/services-inside">
                                    <div className="services-item-content">
                                        <h3 className="services-item-t-head">...And More</h3>

                                        <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">read more</span>
                                    </div>

                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src={ Three}  alt= ""/>
                                        </div>
                                    </div>

                                    <div className="img-bg-color"></div>
                                </a>
                            </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ServicesContent;
