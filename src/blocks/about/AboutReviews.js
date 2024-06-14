import React, { Component } from 'react';
import Swiper from 'swiper';

class AboutReviews extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            name: "Chelsea Leadingham",
            
        }
    }

    componentDidMount() {
        var swiper_adv_reviews_thumbs = new Swiper( '.adv-slider-reviews .adv-swiper-container.reviews-thumbs', {
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
            slidesPerView: 3,
            spaceBetween: 0,
            loop: false,
            freeMode: false
        } );

        new Swiper( '.adv-slider-reviews .adv-swiper-container.reviews-text', {
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
            thumbs: {
                slideThumbActiveClass: 'adv-swiper-slide-thumb-active',
                thumbsContainerClass: 'adv-swiper-container-thumbs',
                swiper: swiper_adv_reviews_thumbs
            },
            spaceBetween: 0,
            allowTouchMove: false
        } );
    }

    handleClick( e ) {
        this.setState( { "name": e.currentTarget.getAttribute( 'data-reviews-name' ) } );
        this.setState( { "position": e.currentTarget.getAttribute( 'data-reviews-position' ) } );
        return false
    }

    render() {
        return (
          <div id="testimonials" className="block spacer p-top-xl">
            <div className="title">
              <h2 className="hr">Testimonials</h2>
            </div>

            <div className="adv-slider-reviews">
              <div className="adv-slider-reviews-img">
                <img src="assets/img/demo/32_img.png" alt="Icon" />
              </div>

              <div className="adv-swiper-container reviews-text">
                <div className="adv-swiper-wrapper reviews-text-items">
                  <div className="adv-swiper-slide reviews-text-item">
                    <div className="reviews-text-item-content">
                      <h3>
                        Ms. Michelle with Layers is PHENOMENAL at what she
                        does!! I'm so blessed that God brought her into my path
                        and will continue to visit her for my hair and many more
                        services. Her knowledge and techniques are a gift and
                        she will bless you! I highly recommend trusting her with
                        all of your beauty needs, you won't regret it. She took
                        my weathered faded strawberry blonde hair and made my
                        red explode. To say she is gifted is an understatement
                        
                      </h3>
                    </div>
                  </div>

                  <div className="adv-swiper-slide reviews-text-item">
                    <div className="reviews-text-item-content">
                      <h3>
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account.
                      </h3>
                    </div>
                  </div>

                  <div className="adv-swiper-slide reviews-text-item">
                    <div className="reviews-text-item-content">
                      <h3>
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center thumbs">
                <div className="adv-swiper-container reviews-thumbs">
                  <div className="adv-swiper-wrapper reviews-thumbs-items">
                    <div
                      onClick={(e) => this.handleClick(e)}
                      className="adv-swiper-slide reviews-thumbs-item"
                      data-reviews-name="Chelsea Leadingham"
                      data-reviews-position="CEO at Company"
                    >
                     
                    </div>

                    <div
                      onClick={(e) => this.handleClick(e)}
                      className="adv-swiper-slide reviews-thumbs-item"
                      data-reviews-name="Arthur Hopin"
                      data-reviews-position="CEO at Company"
                    >
                      
                    </div>

                    <div
                      onClick={(e) => this.handleClick(e)}
                      className="adv-swiper-slide reviews-thumbs-item"
                      data-reviews-name="Rosie Ford"
                      data-reviews-position="CEO at Company"
                    >
                     
                    </div>
                  </div>
                </div>

                <div className="reviews-results">
                  <h6 className="reviews-name" id="reviews-name">
                    {this.state.name}
                  </h6>
                  <p className="reviews-positions" id="reviews-positions">
                    {this.state.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default AboutReviews;
