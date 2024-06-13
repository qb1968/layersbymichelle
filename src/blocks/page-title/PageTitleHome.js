import React from 'react';

import Logo1 from '../../assets/img/logo/logo2.jpeg'

const PageTitleHome = () => {
    return (
      <section id="page-title" className="block with-img">
        <div className="wrapper text-center d-flex">
          <div className="align-self-center w-100">
            <div className="title">
              {/* <h1 className="large">Mykery Beauty Salon</h1> */}{" "}
              {/* <section id="about-us" className="block spacer p-top-xl"> */}
                <div className="wrapper">
                  <div className="row gutter-width-sm">
                    <div className="col-xl-4 col-lg-6 col-md-10 col-sm-10">
                      <div className="title">
                        <h2>Hello Beautiful!</h2>
                        <h4>
                          Welcome to Layers,LLC, Where the possibilities are
                          endless!
                        </h4>
                        <h4>If you can dream it, it can be acheived.</h4>
                      </div>
                    </div>
                  </div>
                    <img src={Logo1} alt="" style={{ width: 450, height: 450 }} />
                  <div className="row gutter-width-sm justify-content-end">
                    <div className="col-xl-4 col-lg-5 col-md-10 col-sm-10">
                      <div className="description">
                        <p>
                          Layers, LLC is devoted to providing exceptional service
                          with high quality products from an expertly trained
                          stylist. I serve women that look to elevate their
                          appearance and expect luxury
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              {/* </section> */}
             
            </div>

            {/* <div className="description spacer p-top-lg">
                        
                    </div>

                    <div className="spacer p-top-lg no-space">
                        <Link href="#contact-us"
                              to="contact-us"
                              spy={ true }
                              smooth={ true }
                              duration={ 0 }
                              className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space text-uppercase scroll-to-id">
                            Scroll
                        </Link>
                    </div> */}

            {/* <nav className="languages lang-position">
                        <ul className="nav">
                            <li className="lang-item current-lang">
                                <a title="en" href={ process.env.PUBLIC_URL + "/" }>en</a>
                            </li>
                        </ul>
                    </nav> */}
          </div>
        </div>

        <div className="page-title-bg-color"></div>
      </section>
    );
};

export default PageTitleHome;
