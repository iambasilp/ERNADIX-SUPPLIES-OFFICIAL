import React from 'react';
import Link from 'next/link';

export default function AboutOurApproachSection() {
  return (
    <>
      {/*  Our Approach Section Start  */}
    <div className="our-approach">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/*  Our Approach Content Start  */}
                    <div className="our-approach-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">our approach</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Shaping the future of packaging, one bag at a time</h2>
                        </div>
                        {/*  Section Title End  */}

                        {/*  Approach Item List Start  */}
                        <div className="approach-item-list">
                            {/*  Approach Item Start  */}
                            <div className="approach-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-box">
                                    <img src="/images/icon-approach-item-1.svg" alt="" />
                                </div>
                                <div className="approach-item-content">
                                    <h3>Our vision</h3>
                                    <p>We blend advanced technology with artistic craftsmanship to deliver an immersive packaging.</p>
                                </div>
                            </div>
                            {/*  Approach Item End  */}
                            
                            {/*  Approach Item Start  */}
                            <div className="approach-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                    <img src="/images/icon-approach-item-2.svg" alt="" />
                                </div>
                                <div className="approach-item-content">
                                    <h3>Our mission</h3>
                                    <p>We blend advanced technology with artistic craftsmanship to deliver an immersive packaging.</p>
                                </div>
                            </div>
                            {/*  Approach Item End  */}
                        </div>
                        {/*  Approach Item List End  */}
                        
                        {/*  Approach List Start  */}
                        <div className="approach-list wow fadeInUp" data-wow-delay="0.6s">
                            <ul>
                                <li>Courier Bags in different sizes</li>
                                <li>Customized BOPP Bags for your brand</li>
                            </ul>
                        </div>
                        {/*  Approach List End  */}
                    </div>
                    {/*  Our Approach Content End  */}
                </div>

                <div className="col-lg-6">
                    {/*  Our Approach Images Start  */}
                    <div className="our-approach-images">
                        {/*  Approach Image 1 Start  */}
                        <div className="approach-image-1">
                            <figure className="image-anime reveal">
                                <img src="/images/approach-image-1.jpg" alt="" />
                            </figure>
                            
                            {/*  Premium Packaging Bags Circle Start  */}
                            <div className="premium-bag-circle">
                                <img src="/images/premium-bag-circle-accent.svg" alt="" />
                            </div>
                            {/*  Premium Packaging Bags Circle End  */}
                        </div>
                        {/*  Approach Image 1 End  */}
                        
                        {/*  Approach Image 2 Start  */}
                        <div className="approach-image-2">
                            <figure className="image-anime reveal">
                                <img src="/images/approach-image-2.jpg" alt="" />
                            </figure>
                        </div>
                        {/*  Approach Image 2 End  */}
                    </div>
                    {/*  Our Approach Images End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Our Approach Section End  */}
    </>
  );
}
