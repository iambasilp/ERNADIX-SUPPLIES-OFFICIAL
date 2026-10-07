import React from 'react';
import Link from 'next/link';

export default function AboutWirelessFreedomSection() {
  return (
    <>
      {/*  Wireless Freedom Section Start  */}
    <div className="wireless-freedom">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    {/*  Wireless Freedom Content Start  */}
                    <div className="wireless-freedom-content">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Customization & Adaptability</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Precision-tailored bags that move with your business</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Experience strong seals, durable materials, and perfect sizing — all crafted for secure shipping. Whether you're sending documents, garments, or retail items, our Packaging Bags adapt seamlessly to your logistics. Enjoy consistent packaging performance wherever your products are shipped.</p>
                        </div>
                        {/*  Section Title End  */}

                        {/*  Wireless Freedom Button Start  */}
                        <div className="wireless-freedom-button wow fadeInUp" data-wow-delay="0.4s">
                            <a href="/contact" className="btn-default">Explore Deals</a>
                        </div>
                        {/*  Wireless Freedom Button End  */}
                        
                        {/*  Freedom Image Content Start  */}
                        <div className="freedom-content-list">
                            {/*  Freedom Content Item Start  */}
                            <div className="freedom-content-item wow fadeInUp" data-wow-delay="0.6s">
                                {/*  Freedom Item Image Start  */}
                                <div className="freedom-item-image">
                                    <figure className="image-anime reveal">
                                        <img src="/images/freedom-item-image-1.jpg" alt="" />
                                    </figure>
                                </div>
                                {/*  Freedom Item Image End  */}
                                
                                {/*  Freedom Item Content Start  */}
                                <div className="freedom-item-content">
                                    <p>Wide Variety of Sizes ensures every product is perfectly accommodated. Experience reliable packaging with strong materials.</p>
                                </div>
                                {/*  Freedom Item Content End  */}
                            </div>
                            {/*  Freedom Content Item End  */}
                            
                            {/*  Freedom Content Item Start  */}
                            <div className="freedom-content-item wow fadeInUp" data-wow-delay="0.8s">
                                {/*  Freedom Item Image Start  */}
                                <div className="freedom-item-image">
                                    <figure className="image-anime reveal">
                                        <img src="/images/freedom-item-image-2.jpg" alt="" />
                                    </figure>
                                </div>
                                {/*  Freedom Item Image End  */}
                                
                                {/*  Freedom Item Content Start  */}
                                <div className="freedom-item-content">
                                    <p>Our BOPP bags come in vibrant glossy or premium matte finishes, elevating the unboxing experience for your customers.</p>
                                </div>
                                {/*  Freedom Item Content End  */}
                            </div>
                            {/*  Freedom Content Item End  */}
                        </div>
                        {/*  Freedom Image Content End  */}
                    </div>
                    {/*  Wireless Freedom Content End  */}
                </div>

                <div className="col-lg-6">
                    {/*  Wireless Freedom Imgae Start  */}
                    <div className="wireless-freedom-image">
                        <div className="wireless-freedom-img">
                            <figure className="image-anime reveal">
                                <img src="/images/wireless-freedom-image.jpg" alt="" />
                            </figure>
                        </div>

                        {/*  Contact Now Box List Start  */}
                        <div className="contact-now-box-list wow fadeInUp" data-wow-delay="0.2s">
                            {/*  Contact Now Box Start  */}
                            <div className="contact-now-box">
                                <div className="icon-box">
                                    <img src="/images/icon-phone.svg" alt="" />
                                </div>
                                <div className="contact-now-box-content">
                                    <h3>Call Us!</h3>
                                    <p><a href="tel:123456987">+91 - 123 456 987</a></p>
                                </div>
                            </div>
                            {/*  Contact Now Box End  */}

                            {/*  Contact Now Box Start  */}
                            <div className="contact-now-box">
                                <div className="icon-box">
                                    <img src="/images/icon-mail.svg" alt="" />
                                </div>
                                <div className="contact-now-box-content">
                                    <h3>e-mail now</h3>
                                    <p><a href="mailto:sales@ernadixsupplies.com">sales@ernadixsupplies.com</a></p>
                                </div>
                            </div>
                            {/*  Contact Now Box End  */}
                        </div>
                        {/*  Contact Now Box List End  */}
                    </div>
                    {/*  Wireless Freedom Imgae End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Wireless Freedom Section End  */}
    </>
  );
}
