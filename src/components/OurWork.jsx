import React from 'react';
import Link from 'next/link';

export default function OurWork() {
  return (
    <>
      
    <div className="our-works">
        <div className="container-fluid">
            <div className="row no-gutters">
                <div className="col-lg-6">
                    {/*  Our Work image Start  */}
                    <div className="our-work-image">
                        <figure>
                            <img src="/images/our-work-image.jpg" alt="" />
                        </figure>
                        
                        {/*  Video Play Button Start  */}
                        <div className="video-play-button">
                            <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                                <i className="fa-solid fa-play"></i>
                            </a>
                        </div>
                        {/*  Video Play Button End  */}
                    </div>
                    {/*  Our Work image End  */}
                </div>
                
                <div className="col-lg-6">
                    {/*  Our Work Content Start  */}
                    <div className="our-work-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Our works</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Crafting meaningful experience through purpose</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Courier Bags are available in different sizes, colors, and plain/customized options. BOPP Bags are available in different sizes, colors, matte/glossy finishes, and customized options.</p>
                        </div>
                        {/*  Section Title End  */}

                        {/*  Work List Start  */}
                        <div className="work-list wow fadeInUp" data-wow-delay="0.4s">
                            <ul>
                                <li>Courier Bags in different sizes</li>
                                <li>BOPP Bags in different colors</li>
                                <li>Premium Materials, Luxurious Feel</li>
                                <li>Customized requirements</li>
                            </ul>
                        </div>
                        {/*  Work List End  */}

                        {/*  Work Item List Start  */}
                        <div className="work-item-list wow fadeInUp" data-wow-delay="0.6s">
                            {/*  Work Item Start  */}
                            <div className="work-item">
                                <div className="icon-box">
                                    <img src="/images/icon-work-item-1.svg" alt="" />
                                </div>
                                <div className="work-item-content">
                                    <h3>Glossy BOPP</h3>
                                    <p>We provide customized options for both Courier Bags and BOPP bags based on customer requirements.</p>
                                </div>
                            </div>
                            {/*  Work Item End  */}
                            
                            {/*  Work Item Start  */}
                            <div className="work-item">
                                <div className="icon-box">
                                    <img src="/images/icon-work-item-2.svg" alt="" />
                                </div>
                                <div className="work-item-content">
                                    <h3>BOPP Bags Options</h3>
                                    <p>We provide customized options for both Courier Bags and BOPP bags based on customer requirements.</p>
                                </div>
                            </div>
                            {/*  Work Item End  */}
                        </div>
                        {/*  Work Item List End  */}
                    </div>
                    {/*  Our Work Content End  */}
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
