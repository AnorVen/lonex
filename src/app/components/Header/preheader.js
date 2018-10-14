import React, { Component } from 'react';
import yth from '../../../imgs/you-head.png';
import onlineVid from '../../../imgs/head-ef.png';
import blogLogo from '../../../imgs/head_blog.png';

export default class Preheader extends Component {
	render() {
		return (
			<div className="preHeader">
				<div className="wrapper">
					<div className="preHeader__wrap">
						<div className="phone">
							<span className="phone__number">8 (800) 500-75-55 </span>
							<span className="phone__text">Бесплатный звонок по России</span>
						</div>
						<div className="video">
							<div className="blog">
								<a href="/" className="blog__link">
									<img className="blog__logo" src={blogLogo} alt="Звездный блог" />
									<span className="blog__text">Звездный блог</span>
								</a>
							</div>
							<div className="youtubeHeader">
								<a href="/" className="youtubeHeader__link">
									<img className="youtubeHeader__logo" src={yth} alt="Смотрите нас на YouTube" />
									<span className="youtubeHeader__text">Смотрите нас на YouTube</span>
								</a>
							</div>
							<div className="onlineVideo">
								<a href="/" className="onlineVideo__link">
									<img
										className="onlineVideo__logo"
										src={onlineVid}
										alt="Смотрите наш прямой эфир"
									/>
									<span className="onlineVideo__text">Смотрите наш прямой эфир</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
