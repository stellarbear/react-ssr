import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Card, CardContent, TextField, CardActions, Button } from '@material-ui/core';
import { NotificationContext } from 'components';
import { copyToClipboard } from 'auxiliary';

const About: React.FC = (): JSX.Element => {
	const [text, setText] = React.useState<string>("");
	const { t } = useTranslation();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setText(event.target.value);
	};

	const onCopy = (notify: (message: string) => void): void => {
		copyToClipboard(text);
		notify(t('notify.copied'));
	};

	return (
		<Grid container
			direction="row"
			justify="center"
			alignItems="center"
		>
			<Grid item xs>
				<Card>
					<CardContent>
						<TextField
							fullWidth
							id="filled-name"
							label={t('about.textFieldLabel')}
							value={text}
							onChange={handleChange}
							margin="normal"
							variant="filled"
						/>
					</CardContent>
					<CardActions>
						<NotificationContext.Consumer>
							{({ updateMessage }): JSX.Element =>
								<Button
									variant="contained"
									color="primary"
									onClick={(): void => onCopy(updateMessage)}>
									{t('about.copyButton')}
								</Button>
							}
						</NotificationContext.Consumer>
					</CardActions>
				</Card>
			</Grid>
		</Grid>
	);
}

export default About;
