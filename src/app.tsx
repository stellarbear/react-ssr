import React from 'react';
import { baseURL, fallbackLng } from 'i18n';
import { Home, About, NotFound } from 'pages';
import { Route, Redirect } from 'react-router-dom';
import AnimatedSwitch from 'components/AnimatedSwitch';
import { HeadWrapper, NavigationWrapper, NotifyWrapper } from 'components';

const App = (): JSX.Element => {
	return (
		<HeadWrapper>
			<NotifyWrapper>
				<NavigationWrapper>
					<AnimatedSwitch>
						<Route exact path={`${baseURL}/`} component={Home} />
						<Route exact path={`${baseURL}/home`} component={Home} />
						<Route exact path={`${baseURL}/about`} component={About} />
						<Redirect from='/' exact to={`/${fallbackLng}`} />
						<Route component={NotFound} />
					</AnimatedSwitch>
				</NavigationWrapper>
			</NotifyWrapper>
		</HeadWrapper>
	);
}

export default App;
