import React from 'react';
import Link from 'next/link';

export default function Products() {
  return (
    <>
      
    <div className="our-products">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/*  Section Title Start  */}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">best seller products</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Our featured Packaging Bags collection</h2>
                    </div>
                    {/*  Section Title End  */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    {/*  Product Offer Box Start  */}
                    <div className="product-offer-box wow fadeInUp">
                        {/*  Product Offer Image Start  */}
                        <div className="product-offer-image">
                            <figure className="image-anime">
                                <img src="/images/product-offer-image.jpg" alt="" />
                            </figure>
                        </div>
                        {/*  Product Offer Image End  */}

                        {/*  Product Offer Content Start  */}
                        <div className="product-offer-content dark-section">
                            <div className="section-title">
                                <h2>Save up to <span>40% OFF</span></h2>
                            </div>
                            <div className="product-offer-btn">
                                <a href="/contact" className="btn-default">shop now</a>
                            </div>
                        </div>
                        {/*  Product Offer Content End  */}
                    </div>
                    {/*  Product Offer Box End  */}
                </div>

                <div className="col-lg-8">
                    {/*  Product Item List Start  */}
                    <div className="product-item-list">
                        {/*  Product Item Start  */}
                    <div className="product-item wow fadeInUp">
                        <div className="product-image">
                            <div className="product-featured-image">
                                <figure>
                                    <img src="/images/product-1.png" alt="Courier Bags" />
                                </figure>
                            </div>
                        </div>
                        <div className="product-content">
                            <h3><a href="/features">Courier Bags</a></h3>
                            <div className="product-price">
                                
                            </div>
                            <div className="product-body">
                                <p>Courier bags available in different sizes and colors, with plain and customized options based on customer requirements.</p>
                            </div>
                            <div className="product-footer">
                                <a href="/contact" className="btn-default">Enquire Now</a>
                            </div>
                        </div>
                    </div>
                    {/*  Product Item End  */}
                        
                        {/*  Product Item Start  */}
                    <div className="product-item wow fadeInUp" data-wow-delay="0.2s">
                        <div className="product-image">
                            <div className="product-featured-image">
                                <figure>
                                    <img src="/images/product-2.png" alt="BOPP Bags" />
                                </figure>
                            </div>
                        </div>
                        <div className="product-content">
                            <h3><a href="/features">BOPP Bags</a></h3>
                            <div className="product-price">
                                
                            </div>
                            <div className="product-body">
                                <p>BOPP bags available in different sizes and colors, with matte and glossy finishes and customization options.</p>
                            </div>
                            <div className="product-footer">
                                <a href="/contact" className="btn-default">Enquire Now</a>
                            </div>
                        </div>
                    </div>
                    {/*  Product Item End  */}
                        
                        
                        
                        
                    </div>
                    {/*  Product Item List End  */}
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
