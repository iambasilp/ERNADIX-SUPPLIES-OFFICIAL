import React from 'react';
import Link from 'next/link';

export default function FaqsPageFaqs() {
  return (
    <>
      {/*  Page Faqs Start  */}
    <div className="page-faqs">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    {/*  Page Single Sidebar Start  */}
                    <div className="page-single-sidebar">
                        {/*  Page Sidebar Category List Start  */}
                        <div className="page-catagory-list wow fadeInUp">
                            <ul>
                                <li><a href="#faq_1">Products</a></li>
                                <li><a href="#faq_2">Options</a></li>
                                <li><a href="#faq_3">Customization</a></li>
                                <li><a href="#faq_4">BOPP Bags</a></li>
                            </ul>
                        </div>
                        {/*  Page Sidebar Category List End  */}

                        {/*  Sidebar CTA Box Start  */}
                        <div className="sidebar-cta-box">
                            {/*  Sidebar CTA Body Start  */}
                            <div className="sidebar-cta-body">
                                {/*  Sidebar CTA Logo Start  */}
                                <div className="sidebar-cta-logo">
                                    <img src="/images/logo.svg" alt="" />
                                </div>
                                {/*  Sidebar CTA Logo End  */}
                                
                                {/*  Sidebar CTA Content Start  */}
                                <div className="sidebar-cta-content">
                                    <p>Contact us for customized Courier Bags and BOPP Bags.</p>
                                </div>
                                {/*  Sidebar CTA Content End  */}
                            </div>
                            {/*  Sidebar CTA Body End  */}

                            {/*  Sidebar CTA Contact Start  */}
                            <div className="sidebar-cta-contact">
                                <a href="mailto:sales@ernadixsupplies.com"><span><img src="/images/icon-mail-white.svg" alt="" /></span>sales@ernadixsupplies.com</a>
                            </div>
                            {/*  Sidebar CTA Contact End  */}
                        </div>
                        {/*  Sidebar CTA Box End  */}
                    </div>
                    {/*  Page Single Sidebar End  */}
                </div>

                <div className="col-lg-8">
                    {/*  Page FAQs Catagery Start  */}
                    <div className="page-faqs-catagery">
                        {/*  FAQs section start  */}
                        <div className="page-single-faqs" id="faq_1">
                            <div className="section-title">
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Product feature</h2>
                            </div>

                            {/*  FAQ Accordion Start  */}
                            <div className="faq-accordion" id="accordion">
                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            1. What types of packaging bags do you offer?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            2. What is the difference between Courier Bags and BOPP Bags?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            3. Do you provide customized printing for bags?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            4. What sizes and colors are available?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                    <h2 className="accordion-header" id="heading5">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            5. Are the bags durable and secure for shipping?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}
                            </div>
                            {/*  FAQ Accordion End  */}
                        </div>
                        {/*  FAQs section End  */}

                        {/*  FAQs section start  */}
                        <div className="page-single-faqs" id="faq_2">
                            <div className="section-title">
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Order shipping</h2>
                            </div>

                            {/*  FAQ Accordion Start  */}
                            <div className="faq-accordion" id="accordion1">
                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading6">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                                            1. How long does it usually take to process and ship an order after it's been placed?
                                        </button>
                                    </h2>
                                    <div id="collapse6" className="accordion-collapse collapse show" aria-labelledby="heading6" data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading7">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                            2. Which courier or shipping services do you use for domestic delivery?
                                        </button>
                                    </h2>
                                    <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading8">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                            3. Is free shipping available, and if so, what are the conditions?
                                        </button>
                                    </h2>
                                    <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading9">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                            4. Can I change my shipping address after placing the order?
                                        </button>
                                    </h2>
                                    <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                    <h2 className="accordion-header" id="heading10">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                            5. What should I do if my package is delayed or marked as delivered?
                                        </button>
                                    </h2>
                                    <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordion1">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}
                            </div>
                            {/*  FAQ Accordion End  */}
                        </div>
                        {/*  FAQs section End  */}

                        {/*  FAQs section start  */}
                        <div className="page-single-faqs" id="faq_3">
                            <div className="section-title">
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Warranty returns</h2>
                            </div>

                            {/*  FAQ Accordion Start  */}
                            <div className="faq-accordion" id="accordion2">
                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading11">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="true" aria-controls="collapse11">
                                            1. What is the warranty period for your Packaging Bags?
                                        </button>
                                    </h2>
                                    <div id="collapse11" className="accordion-collapse collapse show" aria-labelledby="heading11" data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading12">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                            2. How do I request a return or replacement?
                                        </button>
                                    </h2>
                                    <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading13">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                            3. Are returns accepted if I'm not satisfied with the product?
                                        </button>
                                    </h2>
                                    <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading14">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                            4. What is covered under your warranty policy?
                                        </button>
                                    </h2>
                                    <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                    <h2 className="accordion-header" id="heading15">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                                            5. How long does it take to process a return or refund?
                                        </button>
                                    </h2>
                                    <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordion2">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}
                            </div>
                            {/*  FAQ Accordion End  */}
                        </div>
                        {/*  FAQs section End  */}

                        {/*  FAQs section start  */}
                        <div className="page-single-faqs" id="faq_4">
                            <div className="section-title">
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Customization & Sizes</h2>
                            </div>
                            
                            {/*  FAQ Accordion Start  */}
                            <div className="faq-accordion" id="accordion3">
                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading16">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                                            1. What types of packaging bags do you offer?
                                        </button>
                                    </h2>
                                    <div id="collapse16" className="accordion-collapse collapse show" aria-labelledby="heading16" data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading17">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                                            2. What is the difference between Courier Bags and BOPP Bags?
                                        </button>
                                    </h2>
                                    <div id="collapse17" className="accordion-collapse collapse" aria-labelledby="heading17" data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading18">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                                            3. Do you provide customized printing for bags?
                                        </button>
                                    </h2>
                                    <div id="collapse18" className="accordion-collapse collapse" aria-labelledby="heading18" data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading19">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                                            4. What sizes and colors are available?
                                        </button>
                                    </h2>
                                    <div id="collapse19" className="accordion-collapse collapse" aria-labelledby="heading19" data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}

                                {/*  FAQ Item Start  */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                    <h2 className="accordion-header" id="heading20">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                                            5. Are the bags durable and secure for shipping?
                                        </button>
                                    </h2>
                                    <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordion3">
                                        <div className="accordion-body">
                                            <p>Information available upon request.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*  FAQ Item End  */}
                            </div>
                            {/*  FAQ Accordion End  */}
                        </div>
                        {/*  FAQs section End  */}
                    </div> 
                    {/*  Page FAQs Catagery End  */}
                </div>
            </div>
        </div>
    </div>
    {/*  Page Faqs End  */}
    </>
  );
}
