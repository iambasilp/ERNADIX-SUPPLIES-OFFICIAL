import React from 'react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <>
      
    <div className="about-us">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/*  About Image Box Start  */}
                    <div className="about-image-box">
                        {/*  About Images Start  */}
                        <div className="about-us-image">
                            <figure className="image-anime reveal">
                                <img src="/images/about-us-image.jpg" alt="" />
                            </figure>
                        </div>
                        {/*  About Images End  */}
    
                        {/*  About Info Box Start  */}
                        <div className="about-info-box">
                            {/*  Premium Packaging Bags Circle Start  */}
                            <div className="premium-bag-circle">
                                <img src="/images/premium-bag-circle.svg" alt="" />
                            </div>
                            {/*  Premium Packaging Bags Circle End  */}

                            {/*  About Info List Start  */}
                            <div className="about-info-list wow fadeInUp">
                                <ul>
                                    <li>Quality Bags</li>
                                    <li>Durable Materials</li>
                                    <li>Dependable Supply</li>
                                </ul>
                            </div>
                            {/*  About Info List End  */}
                        </div>
                        {/*  About Info Box End  */}
                    </div>
                    {/*  About Image Box End  */}
                </div>
                
                <div className="col-lg-6">
                    {/*  About us Content Start  */}
                    <div className="about-us-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">about us</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">High-Quality Packaging Bags</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Experience premium packaging with ERNADIX SUPPLIES. We provide a wide range of Courier Bags and BOPP bags tailored to your business needs. </p>
                        </div>
                        {/*  Section Title End  */}

                        {/*  About Us Body Start  */}
                        <div className="about-us-body wow fadeInUp" data-wow-delay="0.4s">
                            <h3>We focus on understanding your packaging requirement and providing the appropriate bag option.</h3>
                            <p><span>Packaging Solutions</span></p>
                        </div>
                        {/*  About Us Body End  */}
                        
                        {/*  About Us Footer Start  */}
                        <div className="about-us-footer wow fadeInUp" data-wow-delay="0.6s">
                            {/*  About Us Button Start  */}
                            <div className="about-us-btn">
                                <a href="/about" className="btn-default">Get in Touch</a>
                            </div>
                            {/*  About Us Button End  */}                            
                            
                            {/*  Contact Now Box Start  */}
                            <div className="contact-now-box">
                                <div className="icon-box">
                                    <img src="/images/icon-phone.svg" alt="" />
                                </div>
                                <div className="contact-now-box-content">
                                    <h3>Call Us!</h3>
                                    <p><a href="tel:123456987">+1 (555) 123-4567</a></p>
                                </div>
                            </div>
                            {/*  Contact Now Box End  */}
                        </div>
                        {/*  About Us Footer End  */}
                    </div>
                    {/*  About us Content End  */}
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
