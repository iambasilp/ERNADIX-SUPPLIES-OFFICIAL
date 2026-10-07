export default function Footer() {
  const html = `<!-- Main Footer Start -->
    <footer class="main-footer dark-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <!-- About Footer Start -->
                    <div class="about-footer">
                        <!-- Footer Logo Start -->
                        <div class="footer-logo">
                            <img src="/images/footer-logo.svg" alt="">
                        </div>
                        <!-- Footer Logo End -->

                        <!-- About Footer Content Start -->
                        <div class="about-footer-content">
                            <p>At ERNADIX SUPPLIES, we supply Courier Bags and BOPP Bags in different sizes and colors, with plain and customized options to meet different packaging requirements.</p>
                        </div>
                        <!-- About Footer Content End -->

                        <!-- Footer Contact Item Start -->
                        <div class="footer-contact-item">
                            <div class="icon-box">
                                <img src="/images/icon-location.svg" alt="">
                            </div>
                            <div class="footer-contact-item-content">
                                <p>123 Packaging Way, Industrial District, NY 10001</p>
                            </div>
                        </div>
                        <!-- Footer Contact Item End -->
                    </div>
                    <!-- About Footer End -->
                </div>

                <div class="col-lg-8">
                    <!-- Footer Links Box Start -->
                    <div class="footer-links-box">
                        <!-- Footer Links Start -->
                        <div class="footer-links footer-menu">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/features">Products</a></li>
                                <li><a href="/faqs">FAQs</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                        <!-- Footer Links End -->

                        <!-- Footer Links Start -->
                        <div class="footer-links">
                            <h3>Products</h3>
                            <ul>
                                <li><a href="/features">Courier Bags</a></li>
                                <li><a href="/features">BOPP Bags</a></li>
                            </ul>
                        </div>
                        <!-- Footer Links End -->

                        

                        <!-- Footer Contact Details Start -->
                        <div class="footer-links footer-contact-details">
                            <h3>Contact Us</h3>
                            <!-- Footer Contact Item Start -->
                            <div class="footer-contact-item">
                                <div class="icon-box">
                                    <img src="/images/icon-phone.svg" alt="">
                                </div>
                                <div class="footer-contact-item-content">
                                    <h3>Call Us !</h3>
                                    <p><a href="tel:123458987">+1 (555) 123-4567</a></p>
                                </div>
                            </div>
                            <!-- Footer Contact Item End -->

                            <!-- Footer Contact Item Start -->
                            <div class="footer-contact-item">
                                <div class="icon-box">
                                    <img src="/images/icon-mail.svg" alt="">
                                </div>
                                <div class="footer-contact-item-content">
                                    <h3>E-mail Us!</h3>
                                    <p><a href="mailto:sales@ernadixsupplies.com">sales@ernadixsupplies.com</a></p>
                                </div>
                            </div>
                            <!-- Footer Contact Item End -->
                        </div>
                        <!-- Footer Contact Details End -->
                    </div> 
                    <!-- Footer Links Box End -->                   
                </div>
            </div>
        </div>

        <!-- Footer Copyright Start -->
        <div class="footer-copyright">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <!-- Footer Copyright Text Start -->
                        <div class="footer-copyright-text">
                            <p>Copyright © 2025 ERNADIX SUPPLIES. All Rights Reserved.</p>
                        </div>
                        <!-- Footer Copyright Text End -->
                    </div>
                    
                    <div class="col-md-6">
                        <!-- Footer Payment Methods Start -->
                        <div class="footer-payment-methods">
                            <img src="/images/icon-payment-methods-1.svg" alt="">
                            <img src="/images/icon-payment-methods-2.svg" alt="">
                            <img src="/images/icon-payment-methods-3.svg" alt="">
                            <img src="/images/icon-payment-methods-4.svg" alt="">
                        </div>
                        <!-- Footer Payment Methods End -->
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer Copyright End -->
    </footer>
    <!-- Main Footer End -->`;
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
