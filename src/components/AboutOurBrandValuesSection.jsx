import React from 'react';
import Link from 'next/link';

export default function AboutOurBrandValuesSection() {
  return (
    <>
      {/*  Our Brand Values Section Start  */}
    <div className="our-brand-values">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/*  Brand Values Image Start  */}
                    <div className="brand-value-image">
                        <figure className="image-anime reveal">
                            <img src="/images/brand-value-image.jpg" alt="" />
                        </figure>
                    </div>
                    {/*  Brand Values Image End  */}
                </div>

                <div className="col-lg-6">
                    {/*  Brand Values Content Start  */}
                    <div className="brand-values-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Brand values</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Reliable packaging solutions for every business</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Experience premium packaging. We provide a wide range of Courier Bags and BOPP bags tailored to your business needs. </p>
                        </div>
                        {/*  Section Title End  */}

                        {/*  Brand Value Counters Start  */}
                        <div className="brand-value-counters">
                            {/*  Brand Value Counter Item Start  */}
                            <div className="brand-value-counter-item">
                                <h2><span className="counter">92</span>%</h2>
                                <p>Reported higher satisfaction and safer deliveries.</p>
                            </div>
                            {/*  Brand Value Counter Item End  */}
                            
                            {/*  Brand Value Counter Item Start  */}
                            <div className="brand-value-counter-item">
                                <h2><span className="counter">1082</span>+</h2>
                                <p>Explore our bag options to find your perfect fit</p>
                            </div>
                            {/*  Brand Value Counter Item End  */}
                        </div>
                        {/*  Brand Value Counters End  */}

                        {/*  Brand Value Button Start  */}
                        <div className="brand-value-button wow fadeInUp" data-wow-delay="0.4s">
                            <a href="/contact" className="btn-default">learn more</a>
                        </div>
                        {/*  Brand Value Button End  */}
                    </div>
                    {/*  Brand Values Content End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Our Brand Values Section End  */}
    </>
  );
}
