import React, { useContext, useEffect } from 'react';
import './style.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Account from './pages/Account';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProtectedPage from './pages/ProtectedPage';
import ForgotPassword from './pages/ForgotPassword';
import VerifyEmail from './pages/VerifyEmail';
import ForgottenEmailSent from './pages/ForgottenEmailSent';
import Spinner from './helpers/Spinner';
import TodoList from './pages/todo/TodoList';

import { AuthContext } from './context/AuthContext';

function App() {
	const { activeUser, isLoading, setIsLoading } = useContext(AuthContext);
	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	let routes;

	//if is logged in and email is NOT verified
	if (activeUser && activeUser.emailVerified === false) {
		routes = (
			<Switch>
				<Route Route exact path='/account' component={Account} />
				<Route exact path='/forgottenpassword' component={ForgotPassword} />
				<Route Route exact path='/verifyemail' component={VerifyEmail} />
				<Redirect to='/verifyemail' />
			</Switch>
		);
	}
	//if user is logged in and email is verified
	else if (activeUser && activeUser.emailVerified === true) {
		routes = (
			<Switch>
				<Route Route exact path='/' component={Home} />
				<Route Route exact path='/protectedpage' component={ProtectedPage} />
				<Route exact path='/forgottenpassword' component={ForgotPassword} />
				<Route Route exact path='/account' component={Account} />
				<Route Route exact path='/todos' component={TodoList} />
				<Redirect to='/' />
			</Switch>
		);
		//if user is logged out
	} else if (!activeUser) {
		routes = (
			<Switch>
				<Route Route exact path='/' component={Home} />
				<Route exact path='/signin' component={SignIn} />
				<Route exact path='/signup' component={SignUp} />
				<Route exact path='/forgottenpassword' component={ForgotPassword} />
				<Route exact path='/emailsent' component={ForgottenEmailSent} />
				<Redirect to='/signin' />
			</Switch>
		);
	}

	return isLoading ? (
		<Spinner />
	) : (
		<Layout>
			<div className='App'>{routes}</div>
		</Layout>
	);
}

export default App;
