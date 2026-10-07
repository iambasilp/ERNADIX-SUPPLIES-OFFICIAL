export default function Header() {
  const html = `<!-- Header Start -->
	<header class="main-header">
		<div class="header-sticky">
			<nav class="navbar navbar-expand-lg">
				<div class="container">
					<!-- Logo Start -->
					<a class="navbar-brand" href="./">
						<img src="/images/logo.svg" alt="Logo">
					</a>
					<!-- Logo End -->

					<!-- Main Menu Start -->
					<div class="collapse navbar-collapse main-menu">
                        <div class="nav-menu-wrapper">
                            <ul class="navbar-nav mr-auto" id="menu">
                                <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="/about">About Us</a></li>
                                <li class="nav-item"><a class="nav-link" href="/features">Products</a></li>
                                <li class="nav-item"><a class="nav-link" href="/faqs">FAQs</a></li>
                                <li class="nav-item"><a class="nav-link" href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                        
                        <!-- Header Contact Btn Start -->
                        <div class="header-contact-btn">
                            <a href="/contact" class="btn-default">Get in Touch</a>
                        </div>
                        <!-- Header Contact Btn End -->
					</div>
					<!-- Main Menu End -->
					<div class="navbar-toggle"></div>
				</div>
			</nav>
			<div class="responsive-menu"></div>
		</div>
	</header>
	<!-- Header End -->`;
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
