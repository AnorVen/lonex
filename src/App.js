import React, { Component } from 'react';
import './App.css';
import './style/style.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PageNotFound from './app/components/404/PageNotFound';
import Layout from './app/components/Layout/Layout';
import CardLayout from './app/components/Card/CardLayout';
import { Provider } from 'react-redux';
import { store } from './app/stores/store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Layout>
						<Switch>
							<Route exact path="/" component={CardLayout} />
							<Route path="*" component={PageNotFound} />
						</Switch>
					</Layout>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
