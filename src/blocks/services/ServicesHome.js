import React, { Component } from 'react';
import Swiper from 'swiper';
import One from '../../assets/img/placeholder/extensions.jpg'
import Two from '../../assets/img/placeholder/blonding.jpg'
import Three from '../../assets/img/placeholder/others.jpg'

class ServicesHome extends Component {
    componentDidMount() {
        new Swiper( '.adv-slider-services .adv-swiper-container', {
            // ADV swiper
            noSwipingClass: 'adv-swiper-no-swiping',
            containerModifierClass: 'adv-swiper-container-',
            slideClass: 'adv-swiper-slide',
            slideBlankClass: 'adv-swiper-slide-invisible-blank',
            slideActiveClass: 'adv-swiper-slide-active',
            slideDuplicateActiveClass: 'adv-swiper-slide-duplicate-active',
            slideVisibleClass: 'adv-swiper-slide-visible',
            slideDuplicateClass: 'adv-swiper-slide-duplicate',
            slideNextClass: 'adv-swiper-slide-next',
            slideDuplicateNextClass: 'adv-swiper-slide-duplicate-next',
            slidePrevClass: 'adv-swiper-slide-prev',
            slideDuplicatePrevClass: 'adv-swiper-slide-duplicate-prev',
            wrapperClass: 'adv-swiper-wrapper',
            navigation: {
                disabledClass: 'adv-swiper-button-disabled',
                hiddenClass: 'adv-swiper-button-hidden',
                lockClass: 'adv-swiper-button-lock',
                nextEl: '.adv-2-swiper-button-next',
                prevEl: '.adv-2-swiper-button-prev'
            },
            spaceBetween: 0,
            slidesPerView: 'auto'
        } );
    }

    render() {
        return (
            <section id="services" className="block">
                <div className="adv-slider-services">
                    <div className="adv-swiper-container">
                        <div className="adv-swiper-wrapper services-items clearfix">
                            <a title="Face & Body" className="adv-swiper-slide services-item" href={ process.env.PUBLIC_URL + "/services-inside" }>
                                <div className="services-item-content">
                                    <h3 className="services-item-t-head" style={{fontWeight:"500"}}>Extensions</h3>

                                    <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">read more</span>
                                </div>

                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src={One} alt="Face & Body" />
                                    </div>
                                </div>

                                <div className="img-bg-color"></div>
                            </a>

                            <a title="Hair Treatments" className="adv-swiper-slide services-item" href={ process.env.PUBLIC_URL + "/services-inside" }>
                                <div className="services-item-content">
                                    <h3 className="services-item-t-head">Blonding</h3>

                                    <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">read more</span>
                                </div>

                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src={Two} alt="Hair Treatments" />
                                    </div>
                                </div>

                                <div className="img-bg-color"></div>
                            </a>

                            <a title="Hands & Feets" className="adv-swiper-slide services-item" href={ process.env.PUBLIC_URL + "/services-inside" }>
                                <div className="services-item-content">
                                    <h3 className="services-item-t-head">...And More</h3>

                                    <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">read more</span>
                                </div>

                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src={Three} alt="Hands & Feets" />
                                    </div>
                                </div>

                                <div className="img-bg-color"></div>
                            </a>

                            {/* <a title="Haircuts for Men" className="adv-swiper-slide services-item" href={ process.env.PUBLIC_URL + "/services-inside" }>
                                <div className="services-item-content">
                                    <h3 className="services-item-t-head">Haircuts for Men</h3>

                                    <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">read more</span>
                                </div>

                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src="assets/img/placeholder/780x500.jpg" alt="Haircuts for Men" />
                                    </div>
                                </div>

                                <div className="img-bg-color"></div>
                            </a> */}
                        </div>

                        <div className="adv-2-swiper-button-prev">
                            <span>
                                <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto">Previous</span>
                            </span>
                        </div>

                        <div className="adv-2-swiper-button-next">
                            <span>
                                <span className="btn btn-lg btn-after-dot btn-link border-0 p-0 min-w-auto">Next</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesHome;
