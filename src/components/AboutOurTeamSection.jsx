import React from 'react';
import Link from 'next/link';

export default function AboutOurTeamSection() {
  return (
    <>
      {/*  Our Team Section Start  */}
    <div className="our-team">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/*  Section Title Start  */}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">our team</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Expert team committed to packaging excellence</h2>
                    </div>
                    {/*  Section Title End  */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-6">
                    {/*  Team Member Item Start  */}
                    <div className="team-item wow fadeInUp">
                        {/*  Team Image Start  */}
                        <div className="team-image">
                            <a href="team-single.html" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-1.jpg" alt="" />
                                </figure>
                            </a>
                
                            {/*  Team Social Icon Start  */}
                            <div className="team-social-icon">
                                <ul>
                                    <li><a href="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            {/*  Team Social Icon End  */}
                        </div>
                        {/*  Team Image End  */}
                
                        {/*  Team Content Start  */}
                        <div className="team-content">
                            <h3><a href="team-single.html">James Carter</a></h3>
                            <p>Production Manager</p>
                        </div>
                        {/*  Team Content End  */}
                    </div>
                    {/*  Team Member Item End  */}
                </div>
                
                <div className="col-lg-3 col-md-6">
                    {/*  Team Member Item Start  */}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                        {/*  Team Image Start  */}
                        <div className="team-image">
                            <a href="team-single.html" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-2.jpg" alt="" />
                                </figure>
                            </a>
                
                            {/*  Team Social Icon Start  */}
                            <div className="team-social-icon">
                                <ul>
                                    <li><a href="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            {/*  Team Social Icon End  */}
                        </div>
                        {/*  Team Image End  */}
                
                        {/*  Team Content Start  */}
                        <div className="team-content">
                            <h3><a href="team-single.html">Olivia Bennett</a></h3>
                            <p>Brand Operator</p>
                        </div>
                        {/*  Team Content End  */}
                    </div>
                    {/*  Team Member Item End  */}
                </div>
                
                <div className="col-lg-3 col-md-6">
                    {/*  Team Member Item Start  */}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
                        {/*  Team Image Start  */}
                        <div className="team-image">
                            <a href="team-single.html" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-3.jpg" alt="" />
                                </figure>
                            </a>
                
                            {/*  Team Social Icon Start  */}
                            <div className="team-social-icon">
                                <ul>
                                    <li><a href="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            {/*  Team Social Icon End  */}
                        </div>
                        {/*  Team Image End  */}
                
                        {/*  Team Content Start  */}
                        <div className="team-content">
                            <h3><a href="team-single.html">Ethan Miller</a></h3>
                            <p>packaging Designer</p>
                        </div>
                        {/*  Team Content End  */}
                    </div>
                    {/*  Team Member Item End  */}
                </div>
                
                <div className="col-lg-3 col-md-6">
                    {/*  Team Member Item Start  */}
                    <div className="team-item wow fadeInUp" data-wow-delay="0.6s">
                        {/*  Team Image Start  */}
                        <div className="team-image">
                            <a href="team-single.html" data-cursor-text="View">
                                <figure>
                                    <img src="/images/team-4.jpg" alt="" />
                                </figure>
                            </a>
                
                            {/*  Team Social Icon Start  */}
                            <div className="team-social-icon">
                                <ul>
                                    <li><a href="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            {/*  Team Social Icon End  */}
                        </div>
                        {/*  Team Image End  */}
                
                        {/*  Team Content Start  */}
                        <div className="team-content">
                            <h3><a href="team-single.html">Emma Collins</a></h3>
                            <p>Media Engineer</p>
                        </div>
                        {/*  Team Content End  */}
                    </div>
                    {/*  Team Member Item End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Our Team Section End  */}
    </>
  );
}
