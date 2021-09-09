import React from 'react';

class Home extends React.Component{
    render(){
return(
<div>

<div class="header-image">
			<div style={{padding: "1.2rem"}} class="nav-container"></div>
		</div>
		<div class="af-parent">
			<div class="af-body container">
				<h1 class="af-header"><b>Adhyayan</b></h1>
				<h3 class="af-sub-header"><b>What is Adhyayan?</b></h3>
				<p class="af-f-para">
					Adhyayan is a project undertaken by Desire Foundation whose
					primary focus is Section 12(1)(c) of the RTE Act. This
					section under the RTE Act mandates 25% reservation for
					children from economically and socially weaker sections in
					private primary schools free of cost. Unfortunately,
					awareness about this act is very limited. Thus, we at Desire
					Foundation strive to spread awareness about it as widely as
					possible to enable these marginalized families to avail the
					benefits available to them through the act.
				</p>
				<div class="af-row row u-sm-flex-col-reverse">
					<div class="col-lg-6 col-sm-12">
						<h3 class="af-sub-header"><b>Why Adhyayan?</b></h3>
						<p class="af-f-para">
							Education is everyone's right. Yet there are many in
							our country for whom it is a far fetched dream. To
							empower the poor and marginalized in our society,
							education is of utmost importance. The RTE Act
							provides us a means to do that- to turn that far
							fetched dream into reality. However, the
							implementation of the RTE Act has been very poor
							being 22% nationally and only 0.97% in Odisha.
							Hence, we started Project Adhyayan to spread
							awareness about the Act and ensure a maximum number
							of admissions in schools.
						</p>
					</div>
					<div class="col-lg-6 col-sm-12">
						<div class="af-image">
							<img
								src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
								class="img-responsive"
								width="100%"
							/>
						</div>
					</div>
				</div>
				<h3 class="af-sub-header"><b>The Journey Of Adhyayan!</b></h3>
				<p class="af-f-para">
					The journey of adhayayan started in the year 2016-17 with
					our 1st adhayayan project. We began our work with 2 slums of
					Bhubaneshwar initially. We were successfully able to enroll
					around 5 kids in 2016-17, nearly 150 in 2017-18 & 120 kids
					in 2018-19 into private schools overcoming the obstacles in
					slums like Mahimanagar,Rangamaitia basti,etc.We start the
					admission process by visiting the slums & conducting
					surveys. We record the number of eligible candidates from
					each slum & verify their documents during the surveys. We
					also help the families prepare the required documents if
					they don't have it. We then visit the schools, talk with the
					respective authority & record the number of seats available
					in each school. Then the admission forms are filled &
					submitted. We wait for the schools to announce the results
					to get a final count of number of children enrolled.
				</p>
				<div class="af-row row">
					<div class="col-lg-6 col-sm-12">
						<div class="af-video-image" style={{position: "relative"}}>
							<img
								src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
								class="img-responsive"
								width="100%" 
                            />
							<a
								href="javascript:;"
								class="play play-big"
								onclick="stopScroll(event,'VideoPopup');"
							>
								<svg
									class="Icon Icon--play"
									data-app-tmpl="Icon"
								>
									<title>Play</title>
									<svg viewBox="0 0 17 19" id="play">
										<title>Triangle</title>
										<path d="M17 9.5L0 19V0z"></path>
									</svg>
								</svg>
							</a>
						</div>
					</div>
					<div class="col-lg-6 col-sm-12">
						<h3 class="af-sub-cont-header">
							<b>Major Challenges!</b>
						</h3>
						<p class="af-f-cont-para"></p>
						<ul>
							<li>
								Lack of awareness about RTE among schools and
								citizens.
							</li>
							<li>
								Ignorance of schools to implement RTE Sec
								12(1)(c).
							</li>
							<li>
								Fear of parents that the child might drift away
								from his/her cultural roots by studying in an
								English medium school.
							</li>
						</ul>

						<h3 class="af-sub-cont-header">
							<b>To solve the issue of schools</b>
						</h3>
						<p class="af-f-cont-para">
							We approached OPEPA (Odisha Primary Education
							Program Authority) for their support who recommended
							us to the BEO (Block Education Office) authorities.
							The officials were highly supportive in issuing a
							notice to the schools stating that following the RTE
							Act is mandatory.
						</p>
					</div>
					<div class="popup" id="VideoPopup">
						<a
							href="javascript:;"
							class="popup__close"
							id="close"
							onclick="startScroll(event,'VideoPopup');"
							>&times;</a
						>
						<div class="popup__content">
							<iframe
								style={{width: "100%" ,height: "100%"}}
								id="youVideoPopup"
								src="https://www.youtube.com/embed/ITy19OzUO9s"
								frameborder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
					</div>
				</div>
				<h2 class="af-sub-mid-header"><b>Adhyayan Data</b></h2>
				<div class="af-row row">
					<div class="col-md">
						<div
							class="chart-container"
							style={{position: "relative",margin: "auto",height: "350px",width: "350px",display: 'flex',alignItems: 'center',padding: "15px"}}>
							<canvas id="adChart1"></canvas>
						</div>
						<p>
							Over the past 5 years we have given our best to
							stick to our moto and after successfull completion
							of Adhyayan phase 3 we have set a higher target for
							ourselves with 100 target admissions.
						</p>
					</div>
					<div class="col-md">
						<div
							class="chart-container graph"
							style={{
								position: "relative",
								margin: "auto",
								height: "350px",
								alignItems: "center",
								display: "flex",
							}}
						>
							<canvas id="adChart2"></canvas>
						</div>
						<p>
							The admission rate declined from phase 2 to phase 3
							due to a smaller number of eligible candidates. Most
							of the families were already covered in phase 2 and
							the children were already enrolled into schools.
						</p>
					</div>
				</div>
				<h2 class="af-sub-mid-header"><b>Gallery</b></h2>
				<div
					id="af-gallery-carousel"
					class="carousel slide carousel-fade"
					data-ride="carousel"
					data-interval="3000"
				>
					<ol class="carousel-indicators">
						<li
							data-target="#af-gallery-carousel"
							data-slide-to="0"
							class="active"
						></li>
						<li
							data-target="#af-gallery-carousel"
							data-slide-to="1"
						></li>
						<li
							data-target="#af-gallery-carousel"
							data-slide-to="2"
						></li>
						<li
							data-target="#af-gallery-carousel"
							data-slide-to="3"
						></li>
					</ol>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img
								class="af-gal-img d-block w-100"
								src="http://desirefoundation.org/img/Adhyayan/adhyayan_1.jpg"
								alt="First slide"
							/>
							<div class="carousel-caption d-none d-md-block">
								<h5>Adhyayan</h5>
								<p>The path to the future.</p>
							</div>
						</div>
						<div class="carousel-item">
							<img
								class="af-gal-img d-block w-100"
								src="http://desirefoundation.org/img/Adhyayan/adhyayan_2.jpg"
								alt="Second slide"
							/>
							<div class="carousel-caption d-none d-md-block">
								<h5>Adhyayan</h5>
								<p>Education will change the world, one day!</p>
							</div>
						</div>
						<div class="carousel-item">
							<img
								class="af-gal-img d-block w-100"
								src="http://desirefoundation.org/img/Adhyayan/adhyayan_3.jpg"
								alt="Third slide"
							/>
							<div class="carousel-caption d-none d-md-block">
								<h5>Adhyayan</h5>
								<p>Spreading the light of knowledge.</p>
							</div>
						</div>
						<div class="carousel-item">
							<img
								class="af-gal-img d-block w-100"
								src="http://desirefoundation.org/img/Adhyayan/adhyayan_4.jpg"
								alt="forth slide"
							/>
							<div class="carousel-caption d-none d-md-block">
								<h5>Adhyayan</h5>
								<p>Together we can bring smiles.</p>
							</div>
						</div>
					</div>
					<a
						class="carousel-control-prev"
						href="#af-gallery-carousel"
						role="button"
						data-slide="prev"
					>
						<span
							class="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span class="sr-only">Previous</span>
					</a>
					<a
						class="carousel-control-next"
						href="#af-gallery-carousel"
						role="button"
						data-slide="next"
					>
						<span
							class="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
				<h2 class="af-sub-mid-header" style={{color: "darkcyan"}}>
					<q><i
							>It is easier to build strong children than to
							repair broken adults.</i></q>
				</h2>
				<p class="quote_nm">-Frederick Douglas</p>
			</div>
		</div>
		<div class="footer-container"></div>


        </div>
)
    }
}

export default Home;