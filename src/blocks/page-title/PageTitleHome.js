import React from 'react';

import Logo1 from '../../assets/img/logo/logo2.jpeg'

const PageTitleHome = () => {
    return (
        <section id="page-title" className="block with-img" >
            <div className="wrapper text-center d-flex">
                <div className="align-self-center w-100">
                    
                    <div className="title">
                        {/* <h1 className="large">Mykery Beauty Salon</h1> */}
                        <img src={Logo1} alt="" style={{ width: 500, height: 500 }} />
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
