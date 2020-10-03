import React from 'react'
import { ReactComponent as LaptopIcon } from '../images/icons/laptop.svg'
import { ReactComponent as ServerIcon } from '../images/icons/server.svg'
import { ReactComponent as CaseIcon } from '../images/icons/briefcase.svg'

const About = () => {
	return (
		<div className="container-fluid about-container m-0 mt-5">
			<div className="row m-0 my-5">
				<div className="container col-12 col-md-4 col-lg-4 mx-auto mt-4 px-1">
					<h3 className="px-1">About me</h3>
					<hr />
					<p className="p-2 font-poiret-p">
						I’m a 24 years old developer from Iraq, living in Berlin since 2015.
						<br />
						I’ve studied full-stack web development at the Digital Career
						Institute in Berlin.
						<br />
						Learning JavaScript, React and Node.js, empowered me to build future
						web applications. I’m passionate about what I do and I’m always
						challenging myself.
						<br />
						Learning more and more is always my goal.
						<br />A strong passion and enthusiasm distinguish my work.
						<br />
					</p>
				</div>
				<div className="container col-12 col-md-5 col-lg-5 mx-auto mt-4 px-1 pt-0">
					<h3 className="px-1">My Skillset</h3>
					<hr />
					<div className="row m-0 p-0">
						<ul className="list-group tech-list mx-auto col-12 col-md-6 col-lg-6">
							<li className="list-group-item tech-list-item font-poiret-p">
								JAVASCRIPT
								<div className="progress mt-2" style={{ height: '5px' }}>
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: '80%', backgroundColor: '#ffa804' }}
										aria-valuenow="80"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</li>
							<li className="list-group-item tech-list-item font-poiret-p">
								HTML & CSS
								<div className="progress mt-2" style={{ height: '5px' }}>
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: '76%', backgroundColor: '#ffa804' }}
										aria-valuenow="76"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</li>
							<li className="list-group-item tech-list-item font-poiret-p">
								JQUERY
								<div className="progress mt-2" style={{ height: '5px' }}>
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: '63%', backgroundColor: '#ffa804' }}
										aria-valuenow="63"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</li>
							<li className="list-group-item tech-list-item font-poiret-p">
								EXPRESS
								<div className="progress mt-2" style={{ height: '5px' }}>
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: '66%', backgroundColor: '#ffa804' }}
										aria-valuenow="66"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</li>
							<li className="list-group-item tech-list-item font-poiret-p">
								VUE
								<div className="progress mt-2" style={{ height: '5px' }}>
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: '60%', backgroundColor: '#ffa804' }}
										aria-valuenow="60"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</li>
						</ul>
						<ul className="list-group tech-list mx-auto col-12 col-md-6 col-lg-6">
							<li className="list-group-item tech-list-item font-poiret-p">
								REACT
								<div className="progress mt-2" style={{ height: '5px' }}>
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: '80%', backgroundColor: '#ffa804' }}
										aria-valuenow="80"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</li>
							<li className="list-group-item tech-list-item font-poiret-p">
								REACT NATIVE
								<div className="progress mt-2" style={{ height: '5px' }}>
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: '65%', backgroundColor: '#ffa804' }}
										aria-valuenow="65"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</li>
							<li className="list-group-item tech-list-item font-poiret-p">
								NODE
								<div className="progress mt-2" style={{ height: '5px' }}>
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: '72%', backgroundColor: '#ffa804' }}
										aria-valuenow="72"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</li>
							<li className="list-group-item tech-list-item font-poiret-p">
								MONGO DB
								<div className="progress mt-2" style={{ height: '5px' }}>
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: '71%', backgroundColor: '#ffa804' }}
										aria-valuenow="71"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</li>
							<li className="list-group-item tech-list-item font-poiret-p">
								FIGMA <small>(UI SOFTWARE)</small>
								<div className="progress mt-2" style={{ height: '5px' }}>
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: '61%', backgroundColor: '#ffa804' }}
										aria-valuenow="61"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="row m-0 my-5">
				<div className="container col-7 col-md-4 col-lg-4 mx-auto mt-5 text-center">
					<h3>My Work</h3>
					<hr />
				</div>
				<div className="row m-0 mt-5">
					<div className="container col-12 col-md-4 col-lg-3 mx-auto mb-4">
						<h3>
							<LaptopIcon /> Frontend
						</h3>
						<p className="p-2 font-poiret-p">
							Building the visual parts of the app, from prototypes and mockups
							to a valuable product using the latest technologies and frameworks
							such as JavaScript(ES6), HTML5, CSS3 & SASS, React and Bootstrap
							4. With a focus to create responsive websites that work on a wide
							range of devices to assist the production of clean and functional
							design.
						</p>
					</div>
					<div className="container col-12 col-md-4 col-lg-3 mx-auto mb-4">
						<h3>
							<ServerIcon /> Backend
						</h3>
						<p className="p-2 font-poiret-p">
							Where the logic starts.
							<br />
							Using my intensive Node.js, Express and MongoDB Knowledge
							I&apos;ll create, connect and maintain your websites back-end by
							building the core functionality of the application.
							<br />
							And deliver secure and reliable software.
						</p>
					</div>
					<div className="container col-12 col-md-4 col-lg-3 mx-auto">
						<h3>
							<CaseIcon /> Other
						</h3>
						<p className="p-2 font-poiret-p">
							#DevOps #AWS #Docker #UnitTesting #SEO #Meteor #redux #webpack
							#AJAX #mongoose #Netlify #graphql #agileMethodology #teamPlayer
							#projectManagement
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
