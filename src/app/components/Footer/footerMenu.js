import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class FooterMenu extends Component {
	render() {
		let menu = this.props.footerMenu.map(function(item, index) {
			return (
				<li
					key={index}
					className={index === 0 ? 'footerNav__item footerNav__title' : 'footerNav__item'}
				>
					{index === 0 ? (
						<span className="footerNav__item footerNav__item--title">{item.title}</span>
					) : (
						<Link className="footerNav__item" to={item.href}>
							{item.title}
						</Link>
					)}
				</li>
			);
		});

		return (
			<Fragment>
				<ul className="footerNav__list">{menu}</ul>
			</Fragment>
		);
	}
}
