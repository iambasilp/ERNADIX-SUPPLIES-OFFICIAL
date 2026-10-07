import React from 'react';
import Link from 'next/link';

export default function FeaturesPageFeatures() {
  return (
    <>
      {/*  Page Features Start  */}
    <div className="page-features">
        <div className="container">
            <div className="row feature-item-list">
                <div className="col-lg-3 col-md-6">
                    {/*  Feature Item Start  */}
                    <div className="feature-item wow fadeInUp">
                        <div className="feature-title">
                            <h3>Different Sizes</h3>
                        </div>
                        <div className="icon-box">
                            <img src="/images/icon-feature-1.svg" alt="" />
                        </div>
                        <div className="feature-content">
                            <p>Available in a variety of dimensions to suit your specific product needs.</p>
                        </div>
                    </div>
                    {/*  Feature Item End  */}
                </div>
                
                <div className="col-lg-3 col-md-6">
                    {/*  Feature Item Start  */}
                    <div className="feature-item active wow fadeInUp" data-wow-delay="0.2s">
                        <div className="feature-title">
                            <h3>Exceptional Quality</h3>
                        </div>
                        <div className="icon-box">
                            <img src="/images/icon-feature-2.svg" alt="" />
                        </div>
                        <div className="feature-content">
                            <p>Manufactured with premium materials for maximum durability.</p>
                        </div>
                    </div>
                    {/*  Feature Item End  */}
                </div>
                
                <div className="col-lg-3 col-md-6">
                    {/*  Feature Item Start  */}
                    <div className="feature-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="feature-title">
                            <h3>Different Colors</h3>
                        </div>
                        <div className="icon-box">
                            <img src="/images/icon-feature-3.svg" alt="" />
                        </div>
                        <div className="feature-content">
                            <p>Choose from standard colors or customize to match your brand.</p>
                        </div>
                    </div>
                    {/*  Feature Item End  */}
                </div>
                
                <div className="col-lg-3 col-md-6">
                    {/*  Feature Item Start  */}
                    <div className="feature-item wow fadeInUp" data-wow-delay="0.6s">
                        <div className="feature-title">
                            <h3>Plain Options</h3>
                        </div>
                        <div className="icon-box">
                            <img src="/images/icon-feature-4.svg" alt="" />
                        </div>
                        <div className="feature-content">
                            <p>Standard plain bags ready for immediate dispatch and use.</p>
                        </div>
                    </div>
                    {/*  Feature Item End  */}
                </div>
                
                <div className="col-lg-3 col-md-6">
                    {/*  Feature Item Start  */}
                    <div className="feature-item wow fadeInUp" data-wow-delay="0.8s">
                        <div className="feature-title">
                            <h3>Customized Options</h3>
                        </div>
                        <div className="icon-box">
                            <img src="/images/icon-feature-5.svg" alt="" />
                        </div>
                        <div className="feature-content">
                            <p>Fully customizable designs printed precisely to your requirements.</p>
                        </div>
                    </div>
                    {/*  Feature Item End  */}
                </div>
                
                <div className="col-lg-3 col-md-6">
                    {/*  Feature Item Start  */}
                    <div className="feature-item wow fadeInUp" data-wow-delay="1s">
                        <div className="feature-title">
                            <h3>Matte Finish</h3>
                        </div>
                        <div className="icon-box">
                            <img src="/images/icon-feature-6.svg" alt="" />
                        </div>
                        <div className="feature-content">
                            <p>Available for BOPP bags for a premium, non-reflective aesthetic.</p>
                        </div>
                    </div>
                    {/*  Feature Item End  */}
                </div>
                
                <div className="col-lg-3 col-md-6">
                    {/*  Feature Item Start  */}
                    <div className="feature-item wow fadeInUp" data-wow-delay="1.2s">
                        <div className="feature-title">
                            <h3>Glossy Finish</h3>
                        </div>
                        <div className="icon-box">
                            <img src="/images/icon-feature-7.svg" alt="" />
                        </div>
                        <div className="feature-content">
                            <p>Shiny and vibrant finishes available for BOPP bags to stand out.</p>
                        </div>
                    </div>
                    {/*  Feature Item End  */}
                </div>
                
                <div className="col-lg-3 col-md-6">
                    {/*  Feature Item Start  */}
                    <div className="feature-item wow fadeInUp" data-wow-delay="1.4s">
                        <div className="feature-title">
                            <h3>Secure Sealing</h3>
                        </div>
                        <div className="icon-box">
                            <img src="/images/icon-feature-8.svg" alt="" />
                        </div>
                        <div className="feature-content">
                            <p>Strong adhesive properties to ensure your goods stay safe during transit.</p>
                        </div>
                    </div>
                    {/*  Feature Item End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Features End  */}
    </>
  );
}
