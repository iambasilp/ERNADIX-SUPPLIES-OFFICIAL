import React from 'react';
import Link from 'next/link';

export default function Faqs() {
  return (
    <>
      
    <div className="our-faqs">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/*  Faqs Image Box Start  */}
                    <div className="faqs-image-box">
                        {/*  Section Title Start  */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">FAQ's</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">Got questions? we've got answers!</h2>
                        </div>
                        {/*  Section Title End  */}
                        
                        {/*  Faq Image Start  */}
                        <div className="faq-image">
                            <figure className="image-anime reveal">
                                <img src="/images/faqs-image.jpg" alt="" />
                            </figure>
                        </div>
                        {/*  Faq Image End  */}
                    </div>
                    {/*  Faqs Image Box End  */}
                </div>

                <div className="col-lg-6">
                    {/*  FAQ Accordion Start  */}
                    <div className="faq-accordion" id="accordion">
                        {/*  FAQ Item Start  */}
                        <div className="accordion-item wow fadeInUp">
                            <h2 className="accordion-header" id="heading1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                    1. What types of bags do you offer?
                                </button>
                            </h2>
                            <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p>We offer Courier Bags and BOPP Bags.</p>
                                </div>
                            </div>
                        </div>
                        {/*  FAQ Item End  */}

                        {/*  FAQ Item Start  */}
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                            <h2 className="accordion-header" id="heading2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    2. Are different sizes available?
                                </button>
                            </h2>
                            <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p>Yes. Our Courier Bags and BOPP Bags are available in different sizes.</p>
                                </div>
                            </div>
                        </div>
                        {/*  FAQ Item End  */}

                        {/*  FAQ Item Start  */}
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                            <h2 className="accordion-header" id="heading3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    3. Are different colors available?
                                </button>
                            </h2>
                            <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p>Yes. Different color options are available.</p>
                                </div>
                            </div>
                        </div>
                        {/*  FAQ Item End  */}

                        {/*  FAQ Item Start  */}
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                            <h2 className="accordion-header" id="heading4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                    4. Can I order customized bags?
                                </button>
                            </h2>
                            <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p>Yes. Customized options are available according to customer requirements.</p>
                                </div>
                            </div>
                        </div>
                        {/*  FAQ Item End  */}
                        
                        {/*  FAQ Item Start  */}
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                            <h2 className="accordion-header" id="heading5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                    5. What finishes are available for BOPP bags?
                                </button>
                            </h2>
                            <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p>BOPP bags are available in matte and glossy finishes.</p>
                                </div>
                            </div>
                        </div>
                        {/*  FAQ Item End  */}
                    </div>
                    {/*  FAQ Accordion End  */}
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
