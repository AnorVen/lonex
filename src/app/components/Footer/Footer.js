import React, { Component } from 'react';
import Social from './social';
import Copy from './copy';
import FooterLogo from './footerLogo';
import FooterMenu from './footerMenu';

const footerMenu = [
	{ title: 'Каталог товаров' },
	{
		id: 1,
		parentId: 0,
		title: 'Одежда и аксессуары',
		href: '/dress',
	},
	{
		id: 2,
		parentId: 0,
		title: 'Обувь',
		href: '/footwear',
	},
	{
		id: 3,
		parentId: 0,
		title: 'Украшения',
		href: '/jewelery',
	},
	{
		id: 4,
		parentId: 0,
		title: 'Красота и здоровье',
		href: '/health-and-beauty',
	},
	{
		id: 5,
		parentId: 0,
		title: 'Товары для дома',
		href: '/household',
	},
	{
		id: 6,
		parentId: 0,
		title: 'Товары для кухни',
		href: '/kitchen',
	},
];

const footerOrder = [
	{ title: 'Заказ' },
	{
		title: 'Оплата и доставка',
		href: '/',
	},
	{
		title: 'Возврат',
		href: '/',
	},
	{
		title: 'Помощь',
		href: '/',
	},
	{
		title: 'Благотворительный Фонд Константина Хабенского',
		href: '/',
	},
	{
		title: 'Гарантия на дополнительное обслуживание товара',
		href: '/',
	},
	{
		title: 'Пользовательское соглашение',
		href: '/',
	},
];

const footerShop = [
	{ title: 'Shop24' },
	{
		title: 'Смотреть прямой эфир',
		href: '/',
	},
	{
		title: 'Расписание передач',
		href: '/',
	},
	{
		title: 'Акции',
		href: '/',
	},
	{
		title: 'Личный кабинет',
		href: '/',
	},
	{
		title: 'Поиск и карта сайта',
		href: '/',
	},
	{
		title: 'Карта брендов',
		href: '/',
	},
	{
		title: 'Обратная связь',
		href: '/',
	},
];

const footerInfo = [
	{ title: 'Информация' },
	{
		title: 'О канале',
		href: '/',
	},
	{
		title: 'Сотрудничество',
		href: '/',
	},
	{
		title: 'Покупайте с нами!',
		href: '/',
	},
	{
		title: 'Контакты',
		href: '/',
	},
];

export default class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<Social />
				<div className="footerMenu">
					<div className="wrapper">
						<div className="footerMenu__wrap">
							<FooterLogo />
							<div className="footerNav">
								<FooterMenu footerMenu={footerMenu} />
								<FooterMenu footerMenu={footerOrder} />
								<FooterMenu footerMenu={footerShop} />
								<FooterMenu footerMenu={footerInfo} />
							</div>
						</div>
					</div>
				</div>
				<Copy />
			</div>
		);
	}
}
