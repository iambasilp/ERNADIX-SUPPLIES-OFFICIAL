import React from 'react';
import Link from 'next/link';

export default function Benefits() {
  return (
    <>
      
    <div className="our-benefits">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/*  Benefit Content Start  */}
                    <div className="benefits-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Product Options</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Different Sizes, Colors, and Customization</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">We supply Courier Bags and BOPP Bags in different sizes and colors. Courier bags can be plain or customized. BOPP bags are available in matte and glossy finishes and can be customized.</p>
                        </div>
                        {/*  Section Title End  */}

                        {/*  Benefit Item List Start  */}
                        <div className="benefit-item-list">
                            {/*  Benefit Item Start  */}
                            <div className="benefit-item wow fadeInUp">
                                <div className="icon-box">
                                    <img src="/images/icon-benefit-1.svg" alt="" />
                                </div>
                                <div className="benefit-item-content">
                                    <h3>Different Sizes</h3>
                                    <p>Bags are available in different sizes to suit different packaging requirements.</p>
                                </div>
                            </div>
                            {/*  Benefit Item End  */}
                            
                            {/*  Benefit Item Start  */}
                            <div className="benefit-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-box">
                                    <img src="/images/icon-benefit-2.svg" alt="" />
                                </div>
                                <div className="benefit-item-content">
                                    <h3>Different Colors</h3>
                                    <p>Choose from available color options according to your requirement.</p>
                                </div>
                            </div>
                            {/*  Benefit Item End  */}
                            
                            {/*  Benefit Item Start  */}
                            <div className="benefit-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                    <img src="/images/icon-benefit-3.svg" alt="" />
                                </div>
                                <div className="benefit-item-content">
                                    <h3>Plain or Customized</h3>
                                    <p>Courier bags and BOPP bags can be supplied according to customer requirements, including customized options.</p>
                                </div>
                            </div>
                            {/*  Benefit Item End  */}
                        </div>
                        {/*  Benefit Item List End  */}
                    </div>
                    {/*  Benefit Content End  */}
                </div>
                
                <div className="col-lg-6">
                    {/*  Benefit Image Box Start  */}
                    <div className="benefit-image-box">
                        {/*  Benefit Image Start  */}
                        <div className="benefit-image">
                            <figure>
                                <img src="/images/benefit-image.png" alt="" />
                            </figure>
                        </div>
                        {/*  Benefit Image End  */}
                        
                        {/*  Trusted Customer Box Start  */}
                        <div className="trusted-customer-box">
                            <h2><span className="counter">5</span>k+</h2>
                            <p>Trusted by 5K+ Customer Product Lovers!</p>
                        </div>
                        {/*  Trusted Customer Box End  */}
                    </div>
                    {/*  Benefit Image Box End  */}
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
