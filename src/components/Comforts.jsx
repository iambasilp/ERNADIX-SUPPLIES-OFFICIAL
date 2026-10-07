import React from 'react';
import Link from 'next/link';

export default function Comforts() {
  return (
    <>
      
    <div className="our-comfort">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/*  Comfort Content Start  */}
                    <div className="comfort-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Product Details</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Available Options and Specifications</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Discover the features of our packaging bags, designed to meet your specific requirements.</p>
                        </div>
                        {/*  Section Title End  */}
                        
                        {/*  Comfort Item List Start  */}
                        <div className="comfort-item-list">
                            {/*  Comfort Item Start  */}
                            <div className="comfort-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                    <img src="/images/icon-comfort-1.svg" alt="" />
                                </div>
                                <div className="comfort-item-content">
                                    <h3>Courier Bags Options</h3>
                                    <p>Different sizes, different colors, plain options, and customized options available.</p>
                                </div>
                            </div>
                            {/*  Comfort Item End  */}
                            
                            {/*  Comfort Item Start  */}
                            <div className="comfort-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="icon-box">
                                    <img src="/images/icon-comfort-2.svg" alt="" />
                                </div>
                                <div className="comfort-item-content">
                                    <h3>Multiple Sizes - Up to 45 Hours</h3>
                                    <p>Different sizes, different colors, matte finish, glossy finish, and customized options available.</p>
                                </div>
                            </div>
                            {/*  Comfort Item End  */}
                            
                            {/*  Comfort Item Start  */}
                            <div className="comfort-item wow fadeInUp" data-wow-delay="0.8s">
                                <div className="icon-box">
                                    <img src="/images/icon-comfort-3.svg" alt="" />
                                </div>
                                <div className="comfort-item-content">
                                    <h3>Customization</h3>
                                    <p>We provide customized options for both Courier Bags and BOPP bags based on customer requirements.</p>
                                </div>
                            </div>
                            {/*  Comfort Item End  */}
                        </div>
                        {/*  Comfort Item List End  */}
                    </div>
                    {/*  Comfort Content End  */}
                </div>
                
                <div className="col-lg-6">
                    {/*  Comfort Images Start  */}
                    <div className="comfort-images">
                        {/*  Comfort Image 1 Start  */}
                        <div className="comfort-image-1">
                            <figure className="image-anime reveal">
                                <img src="/images/comfort-image-1.jpg" alt="" />
                            </figure>
                        </div>
                        {/*  Comfort Image 1 End  */}
                        
                        {/*  Comfort Image 2 Start  */}
                        <div className="comfort-image-2">
                            <figure className="image-anime reveal">
                                <img src="/images/comfort-image-2.jpg" alt="" />
                            </figure>
                        </div>
                        {/*  Comfort Image 2 End  */}
                    </div>
                    {/*  Comfort Images End  */}
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
