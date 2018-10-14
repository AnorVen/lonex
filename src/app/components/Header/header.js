import Preheader from './preheader';
import React, { Component, Fragment } from 'react';
import Logo from '../../../imgs/logo1.png';
import search from '../../../imgs/search.png';
import account from '../../../imgs/user.png';
import card from '../../../imgs/bag-card.png';
import { Link } from 'react-router-dom';
import Nav from './topMenu';

export default class Header extends Component {
	render() {
		return (
			<Fragment>
				<Preheader />
				<div className="header">
					<div className="wrapper">
						<div className="header__wrap">
							<div className="header__static">
								<div className="logo">
									<Link to="/">
										<img src={Logo} alt="logo" />
									</Link>
								</div>
								<div className="headerSearch">
									<input className="headerSearch__input" type="text" placeholder="Поиск по сайту" />
									<button className="headerSearch__btn">
										<img className="headerSearch__img" src={search} alt="Поиск" />
									</button>
								</div>
							</div>
							<div className="header__userblock">
								<div className="account">
									<Link className="account__link" to="/account">
										<img src={account} alt="Анастасия" />
										<span>Анастасия</span>
									</Link>
								</div>
								<div className="card">
									<Link className="card__link" to="/card">
										<img className="card__img" src={card} alt="карзина" />
										<div className="card__text">
											<span className="card__title">В корзине:</span>
											<span className="card__product">4 товара</span>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Nav />
			</Fragment>
		);
	}
}
