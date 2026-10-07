import React from 'react';
import Link from 'next/link';

export default function WhyChooseUs() {
  return (
    <>
      
    <div className="why-choose-us">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-6">
                    {/*  Section Title Start  */}
                    <div className="section-title">
                        <h3 className="wow fadeInUp">Why Choose Us</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Find the Right Packaging Bag For Your Needs</h2>
                    </div>
                    {/*  Section Title End  */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    {/*  Why Choose Box Start  */}
                    <div className="why-choose-box">
                        {/*  Why Choose Item List Start  */}
                        <div className="why-choose-item-list wow fadeInUp" data-wow-delay="0.2s">
                            {/*  Why Choose Item Start  */}
                            <div className="why-choose-item">
                                <div className="icon-box">
                                    <img src="/images/icon-why-choose-1.svg" alt="" />
                                </div>
                                <div className="why-choose-item-content">
                                    <h3>Two Main Bag Options</h3>
                                    <p>Courier Bags and BOPP Bags available in one place. Different size options are available according to requirement. Customized options are available.</p>
                                </div>
                            </div>
                            {/*  Why Choose Item End  */}
                            
                            {/*  Why Choose Item Start  */}
                            <div className="why-choose-item">
                                <div className="icon-box">
                                    <img src="/images/icon-why-choose-2.svg" alt="" />
                                </div>
                                <div className="why-choose-item-content">
                                    <h3>Multiple Sizes</h3>
                                    <p>Courier Bags and BOPP Bags available in one place. Different size options are available according to requirement. Customized options are available.</p>
                                </div>
                            </div>
                            {/*  Why Choose Item End  */}
                            
                            {/*  Why Choose Item Start  */}
                            <div className="why-choose-item">
                                <div className="icon-box">
                                    <img src="/images/icon-why-choose-3.svg" alt="" />
                                </div>
                                <div className="why-choose-item-content">
                                    <h3>Color Options</h3>
                                    <p>Courier Bags and BOPP Bags available in one place. Different size options are available according to requirement. Customized options are available.</p>
                                </div>
                            </div>
                            {/*  Why Choose Item End  */}
                            
                            {/*  Why Choose Item Start  */}
                            <div className="why-choose-item">
                                <div className="icon-box">
                                    <img src="/images/icon-why-choose-4.svg" alt="" />
                                </div>
                                <div className="why-choose-item-content">
                                    <h3>Customization</h3>
                                    <p>Courier Bags and BOPP Bags available in one place. Different size options are available according to requirement. Customized options are available.</p>
                                </div>
                            </div>
                            {/*  Why Choose Item End  */}
                        </div>
                        {/*  Why Choose Item List End  */}
                        
                        {/*  Why Choose Image Box Start  */}
                        <div className="why-choose-image-box">
                            {/*  Why Choose Image Start  */}
                            <div className="why-choose-image">
                                <figure>
                                    <img src="/images/why-choose-image.png" alt="" />
                                </figure>
                            </div>
                            {/*  Why Choose Image End  */}
                            
                            {/*  Why Choose Button Start  */}
                            <div className="why-choose-btn wow fadeInUp" data-wow-delay="0.4s">
                                <a href="/contact" className="btn-default">shop now</a>
                            </div>
                            {/*  Why Choose Button End  */}
                        </div>
                        {/*  Why Choose Image Box End  */}
                    </div>
                    {/*  Why Choose Box End  */}
                </div>

                <div className="col-lg-12">
                    {/*  Why Choose Benefits Start  */}
                    <div className="why-choose-benefits">
                        {/*  Why Choose Benefit Item Start  */}
                        <div className="why-choose-benefit-item wow fadeInUp">
                            <div className="icon-box">
                                <img src="/images/icon-why-choose-benefit-1.svg" alt="" />
                            </div>
                            <div className="why-choose-benefit-content">
                                <h3>Courier Bags</h3>
                                <p>Different sizes and colors</p>
                            </div>
                        </div>
                        {/*  Why Choose Benefit Item End  */}

                        {/*  Why Choose Benefit Item Start  */}
                        <div className="why-choose-benefit-item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon-box">
                                <img src="/images/icon-why-choose-benefit-2.svg" alt="" />
                            </div>
                            <div className="why-choose-benefit-content">
                                <h3>BOPP Bags</h3>
                                <p>Matte and Glossy finishes</p>
                            </div>
                        </div>
                        {/*  Why Choose Benefit Item End  */}

                        {/*  Why Choose Benefit Item Start  */}
                        <div className="why-choose-benefit-item wow fadeInUp" data-wow-delay="0.4s">
                            <div className="icon-box">
                                <img src="/images/icon-why-choose-benefit-3.svg" alt="" />
                            </div>
                            <div className="why-choose-benefit-content">
                                <h3>Plain Options</h3>
                                <p>Standard colors and sizes</p>
                            </div>
                        </div>
                        {/*  Why Choose Benefit Item End  */}

                        {/*  Why Choose Benefit Item Start  */}
                        <div className="why-choose-benefit-item wow fadeInUp" data-wow-delay="0.6s">
                            <div className="icon-box">
                                <img src="/images/icon-why-choose-benefit-4.svg" alt="" />
                            </div>
                            <div className="why-choose-benefit-content">
                                <h3>Customized Options</h3>
                                <p>Customized for your requirement</p>
                            </div>
                        </div>
                        {/*  Why Choose Benefit Item End  */}
                    </div>
                    {/*  Why Choose Benefits End  */}
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
