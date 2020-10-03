import React from 'react'
import { ReactComponent as Github } from '../images/icons/github.svg'
import { ReactComponent as Instagram } from '../images/icons/instagram.svg'
import { ReactComponent as Linkedin } from '../images/icons/linkedin.svg'
import { ReactComponent as Xing } from '../images/icons/xing.svg'
import { ReactComponent as SOF } from '../images/icons/stackoverflow.svg'

const Footer = () => {
	return (
		<footer>
			<div className="container-fluid m-0 p-0 footer">
				<div className="row m-0 p-0 pt-1 justify-content-between">
					<div className="container col-5 col-md-3 col-lg-3 m-0 p-0 text-left">
						<p className="font-poiret p-0 pt-2 m-0 ml-4 mt-1 small align-content-center">
							<b>Osama Rashid @ 2020</b>
						</p>
					</div>
					<div className="container col-7 col-md-4 col-lg-4 m-0 pr-2 p-0 text-right">
						<a
							className="mr-3"
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/osama996"
						>
							<h3>
								<Github />
							</h3>
						</a>
						<a
							className="mr-3"
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.instagram.com/osama_fayoni"
						>
							<h3>
								<Instagram />
							</h3>
						</a>
						<a
							className="mr-3"
							target="_blank"
							rel="noopener noreferrer"
							href="https://stackoverflow.com/users/10744460/osama-rashid"
						>
							<h3>
								<SOF />
							</h3>
						</a>
						<a
							className="mr-3"
							target="_blank"
							rel="noopener noreferrer"
							href="https://linkedin.com/in/osama-rashid-669773157/"
						>
							<h3>
								<Linkedin />
							</h3>
						</a>
						<a
							className="mr-3"
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.xing.com/profile/Osama_Rashid5/cv"
						>
							<h3>
								<Xing />
							</h3>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
