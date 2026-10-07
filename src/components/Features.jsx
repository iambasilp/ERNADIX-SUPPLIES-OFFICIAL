import React from 'react';
import Link from 'next/link';

export default function Features() {
  return (
    <>
      
    <div className="our-features">
         <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/*  Section Title Start  */}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">Our feature</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Unmatched innovation and user centric features to fit needs</h2>
                    </div>
                    {/*  Section Title End  */}
                </div>
            </div>

            <div className="row feature-item-list">
                <div className="col-lg-6 col-md-6">
                    {/*  Feature Item Start  */}
                    <div className="feature-item wow fadeInUp">
                        <div className="feature-title">
                            <h3>Different Sizes</h3>
                        </div>
                        <div className="icon-box">
                            <img src="/images/icon-feature-1.svg" alt="" />
                        </div>
                        <div className="feature-content">
                            <p>Available in multiple sizes for your needs.</p>
                        </div>
                    </div>
                    {/*  Feature Item End  */}
                </div>
                
                <div className="col-lg-6 col-md-6">
                    {/*  Feature Item Start  */}
                    <div className="feature-item active wow fadeInUp" data-wow-delay="0.2s">
                        <div className="feature-title">
                            <h3>Different Colors</h3>
                        </div>
                        <div className="icon-box">
                            <img src="/images/icon-feature-2.svg" alt="" />
                        </div>
                        <div className="feature-content">
                            <p>Choose from available color options.</p>
                        </div>
                    </div>
                    {/*  Feature Item End  */}
                </div>
                
                <div className="col-lg-6 col-md-6">
                    {/*  Feature Item Start  */}
                    <div className="feature-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="feature-title">
                            <h3>Plain Options</h3>
                        </div>
                        <div className="icon-box">
                            <img src="/images/icon-feature-3.svg" alt="" />
                        </div>
                        <div className="feature-content">
                            <p>Fully automatic Personal Plain Options Optimiser.</p>
                        </div>
                    </div>
                    {/*  Feature Item End  */}
                </div>
                
                <div className="col-lg-6 col-md-6">
                    {/*  Feature Item Start  */}
                    <div className="feature-item wow fadeInUp" data-wow-delay="0.6s">
                        <div className="feature-title">
                            <h3>Customized Options</h3>
                        </div>
                        <div className="icon-box">
                            <img src="/images/icon-feature-4.svg" alt="" />
                        </div>
                        <div className="feature-content">
                            <p>Customized according to your requirements.</p>
                        </div>
                    </div>
                    {/*  Feature Item End  */}
                </div>

                <div className="col-lg-12">
                    {/*  Section Footer Text Start  */}
                    <div className="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
                        <p><span>Free</span>Turn up the volume - <a href="/features">grab yours now and feel the beat</a></p>
                    </div>
                    {/*  Section Footer Text End  */}
                </div>
            </div>
         </div>
    </div>
    
    </>
  );
}
