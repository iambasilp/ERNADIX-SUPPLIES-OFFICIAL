import React from 'react';
import Link from 'next/link';

export default function AboutPageHeader() {
  return (
    <>
      {/*  Page Header Start  */}
	<div className="page-header">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					{/*  Page Header Box Start  */}
					<div className="page-header-box">
						<h1 className="text-anime-style-3" data-cursor="-opaque">About us</h1>
						<nav className="wow fadeInUp">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href="./">home</a></li>
								<li className="breadcrumb-item active" aria-current="page">about us</li>
							</ol>
						</nav>
					</div>
					{/*  Page Header Box End  */}
				</div>
			</div>
		</div>
	</div>
	{/*  Page Header End  */}
    </>
  );
}
