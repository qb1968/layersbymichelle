import React from 'react';
import BIO from '../../assets/img/placeholder/bio.JPG'
const AboutImg = () => {
    return (
      <section id="about-us" className="block spacer p-top-lg">
        <div id="about-us-img" className="block">
          <div className="about-img">
            <div className="img  ">
              <div className="row gutter-width-sm justify-content-start">
                <img src={BIO} alt="About us" />
                <div className="row gutter-width-sm justify-content-end">
                  <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 block spacer p-top-lg">
                    <div className="title">
                      <h1 style={{ color: "black", fontWeight: "bold" }}>
                        Hello Beautiful!
                      </h1>
                      <h2 style={{ color: "black", fontWeight: "bold" }}>
                        Welcome to Layers, LLC
                      </h2>
                      <h3 style={{ color: "black", fontWeight: "bold" }}>
                        Where the possibilities are endless!
                      </h3>
                      <h4 style={{ color: "black", fontWeight: "bold" }}>
                        If you can dream it, it can be acheived.
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="row gutter-width-sm justify-content-end block spacer p-top-lg">
                  <div className="col-xl-12 col-lg-5 col-md-12 col-sm-12">
                    <div className="description">
                      <p style={{ fontWeight: "bold" }}>
                        Enhancing your beauty is my passion. Making you happy,
                        makes me happy and there is nothing I want to do more.
                        As a mother of 4, a devoted wife and a fur baby mom, I
                        am very busy. I will , however, never be too busy for
                        you. I have been doing hair all my life, just ask my
                        Barbies. With all of my years in the industry I have
                        built a reputation for excellence. While my family comes
                        first, you come first in my business. Tell me what you
                        want and I will deliver with a wealth of expertise and a
                        meticulous eye to detail. Not only will your experience
                        with me will be tailored to your needs but it will be
                        nothing short of luxurious.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutImg;
