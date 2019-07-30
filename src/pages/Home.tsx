import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import ReactMarkdown from 'react-markdown';

const Home: React.FC = (): JSX.Element => {
	const { t } = useTranslation();
	const m = (path: string): string => t(path, { joinArrays: '  \n', });

	return (
		<Grid container
			direction="row"
			justify="center"
			alignItems="center"
		>
			<Grid item sm={12} md={6}>
				<Card>
					<CardContent>
						<Typography variant="h5" component="h2">
							{t('home.title')}
						</Typography>
						<ReactMarkdown source={m('home.description')} />
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}

export default Home;
