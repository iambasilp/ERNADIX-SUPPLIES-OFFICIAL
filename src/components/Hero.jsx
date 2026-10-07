import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      
    <div className="hero dark-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/*  Hero Content Start  */}
                    <div className="hero-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Packaging Bags</h3>
                            <h1 className="text-anime-style-2" data-cursor="-opaque">Courier Bags & BOPP Bags for Your <span>Packaging Needs</span> </h1>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">We provide courier bags and BOPP bags in different sizes and colors, with customization options according to customer requirements.</p>
                        </div>
                        {/*  Section Title End  */}

                        {/*  Hero Button Start  */}
                        <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                            <a href="/contact" className="btn-default">Get in Touch</a>
                        </div>
                        {/*  Hero Button End  */}
                    </div>
                    {/*  Hero Content End  */}
                </div>

                <div className="col-lg-6">
                    {/*  Hero Image Start  */}
                    <div className="hero-image">
                        <figure>
                            <img src="/images/hero-image.png" alt="" />
                        </figure>
                    </div>
                    {/*  Hero Image End  */}
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
