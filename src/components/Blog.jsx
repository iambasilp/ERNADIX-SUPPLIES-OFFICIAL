import React from 'react';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      
    <div className="our-blog">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    {/*  Section Title Start  */}
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">latest blog</h3>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">Read our latest articles news and expert insights</h2>
                    </div>
                    {/*  Section Title End  */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6">
                    {/*  Post Item Start  */}
                    <div className="post-item wow fadeInUp">
                        {/*  Post Featured Image Start */}
                        <div className="post-featured-image">
                            <a href="blog-single.html"  data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/post-1.jpg" alt="" />
                                </figure>    
                            </a>                            
                        </div>
                        {/*  Post Featured Image End  */}

                        {/*  Post Item Body Start  */}
                        <div className="post-item-body">
                            {/*  Post Item Content Start  */}
                            <div className="post-item-content">
                                <h2><a href="blog-single.html">How Quality Packaging Improves Brand Perception</a></h2>
                            </div>
                            {/*  Post Item Content End  */}

                            {/*  Post Item Button Start */}
                            <div className="post-item-btn">
                                <a href="blog-single.html" className="readmore-btn">read more</a>
                            </div>
                            {/*  Post Item Button End */}
                        </div>
                        {/*  Post Item Body End  */}
                    </div>
                    {/*  Post Item End  */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/*  Post Item Start  */}
                    <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
                        {/*  Post Featured Image Start */}
                        <div className="post-featured-image">
                            <a href="blog-single.html"  data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/post-2.jpg" alt="" />
                                </figure>    
                            </a>                            
                        </div>
                        {/*  Post Featured Image End  */}

                        {/*  Post Item Body Start  */}
                        <div className="post-item-body">
                            {/*  Post Item Content Start  */}
                            <div className="post-item-content">
                                <h2><a href="blog-single.html">How to Properly Clean Maintain Your Packaging Bags</a></h2>
                            </div>
                            {/*  Post Item Content End  */}

                            {/*  Post Item Button Start */}
                            <div className="post-item-btn">
                                <a href="blog-single.html" className="readmore-btn">read more</a>
                            </div>
                            {/*  Post Item Button End */}
                        </div>
                        {/*  Post Item Body End  */}
                    </div>
                    {/*  Post Item End  */}
                </div>

                <div className="col-lg-4 col-md-6">
                    {/*  Post Item Start  */}
                    <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
                        {/*  Post Featured Image Start */}
                        <div className="post-featured-image">
                            <a href="blog-single.html"  data-cursor-text="View">
                                <figure className="image-anime">
                                    <img src="/images/post-3.jpg" alt="" />
                                </figure>    
                            </a>                            
                        </div>
                        {/*  Post Featured Image End  */}

                        {/*  Post Item Body Start  */}
                        <div className="post-item-body">
                            {/*  Post Item Content Start  */}
                            <div className="post-item-content">
                                <h2><a href="blog-single.html">The Future of packaging Latest Trend in Packaging Bags Technology</a></h2>
                            </div>
                            {/*  Post Item Content End  */}

                            {/*  Post Item Button Start */}
                            <div className="post-item-btn">
                                <a href="blog-single.html" className="readmore-btn">read more</a>
                            </div>
                            {/*  Post Item Button End */}
                        </div>
                        {/*  Post Item Body End  */}
                    </div>
                    {/*  Post Item End  */}
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
