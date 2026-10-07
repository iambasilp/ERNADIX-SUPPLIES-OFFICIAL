export default function Preloader() {
  const html = `<!-- Preloader Start -->
	<div class="preloader">
		<div class="loading-container">
			<div class="loading"></div>
			<div id="loading-icon"><img src="/images/loader.svg" alt=""></div>
		</div>
	</div>
	<!-- Preloader End -->`;
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
