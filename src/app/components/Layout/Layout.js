import React, { Component } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/Footer';

export default class Layout extends Component {
	render() {
		return (
			<div className="App">
				<div className="mainContent">
					<Header />
					<div className="main">{this.props.children}</div>
				</div>
				<Footer />
			</div>
		);
	}
}
