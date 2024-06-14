import React from 'react';

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts-items">
                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <div className="contacts-item-title">
                        <h6>Email</h6>
                    </div>
                        <p>
                            <a href="mailto:company@domain.com">michelle@layersbymichelle.com</a>
                        </p>
                    </div>

                    
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <div className="contacts-item-title">
                        <h6>Address</h6>
                    </div>
                        <p>105 West Corbin St  </p>
                        <p>Hillsborough, NC 27278</p>
                        <p>Suite 104 Unit 7</p>
                    </div>

                    
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <div className="contacts-item-title">
                        <h6>Phone</h6>
                    </div>
                        <p>
                            <a href="">(469)307-7183</a>
                        </p>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Contacts;
