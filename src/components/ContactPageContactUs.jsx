import React from 'react';
import Link from 'next/link';

export default function ContactPageContactUs() {
  return (
    <>
      {/*  Page Contact Us Start  */}
    <div className="page-contact-us">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/*  Contact Us Content Start  */}
                    <div className="contact-us-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">contact us</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Get in Touch</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Have a requirement for Courier Bags or BOPP Bags? Contact us to discuss the bag type, size, color, finish, and customization you need.</p>
                        </div>
                        {/*  Section Title End  */}

                        {/*  Contact Info Box Start  */}
                        <div className="contact-info-box">
                            {/*  Contact Info List Start  */}
                            <div className="contact-info-list wow fadeInUp" data-wow-delay="0.4s">
                                {/*  Contact Info Item Start  */}
                                <div className="contact-info-item">
                                    <div className="icon-box">
                                        <img src="/images/icon-phone.svg" alt="" />
                                    </div>
                                    <div className="contact-item-content">
                                        <h3>Contact us!</h3>
                                        <p><a href="tel:+123456987">+91 - 123 456 987</a></p>
                                    </div>
                                </div>
                                {/*  Contact Info Item End  */}

                                {/*  Contact Info Item Start  */}
                                <div className="contact-info-item">
                                    <div className="icon-box">
                                        <img src="/images/icon-mail.svg" alt="" />
                                    </div>
                                    <div className="contact-item-content">
                                        <h3>Email</h3>
                                        <p><a href="mailto:sales@ernadixsupplies.com">sales@ernadixsupplies.com</a></p>
                                    </div>
                                </div>
                                {/*  Contact Info Item End  */}
                            </div>
                            {/*  Contact Info List End  */}

                            {/*  Location Info Item Start  */}
                            <div className="location-info-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="icon-box">
                                    <img src="/images/icon-location.svg" alt="" />
                                </div>
                                <div className="location-info-content">
                                    <p>123 Packaging Way, Industrial District, NY 10001</p>
                                </div>
                            </div>
                            {/*  Location Info Item End  */}

                            {/*  Contact Social List Start  */}
                            <div className="contact-social-links wow fadeInUp" data-wow-delay="0.8s">
                                <h3>Follow us on :</h3>
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            {/*  Contact Social List End  */}
                        </div>
                        {/*  Contact Info Box End  */}
                    </div>
                    {/*  Contact Us Content End  */}                       
                </div>

                <div className="col-lg-6">
                    {/*  Contact Us Form Start  */}
                    <div className="contact-us-form">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Get in touch with us</h2>
                        </div>
                        {/*  Section Title End  */}

                        {/*  Contact Form Start  */}
                        <div className="contact-form">
                            <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.2s">
                                <div className="row">                                
                                    <div className="form-group col-md-6 mb-4">
                                        <input type="text" name="fname" className="form-control" id="fname" placeholder="First Name" required />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <input type="text" name="lname" className="form-control" id="lname" placeholder="Last Name" required />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <input type="email" name ="email" className="form-control" id="email" placeholder="Email" required />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <input type="text" name="phone" className="form-control" id="phone" placeholder="Phone" required />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-12 mb-5">
                                        <textarea name="message" className="form-control" id="message" rows="4" placeholder="Message"></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="col-md-12">
                                        <button type="submit" className="btn-default">Submit Message</button>
                                        <div id="msgSubmit" className="h3 hidden"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/*  Contact Form End  */}
                    </div>
                    {/*  Contact Us Form End  */}
                </div>

                <div className="col-lg-12">
                    {/*  Google Map IFrame Start  */}
                    <div className="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    {/*  Google Map IFrame End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Contact Us End  */}
    </>
  );
}
