import React from 'react';
import { getLanguageMeta, getLanguages } from 'i18n';
import { MenuItem, Select, Input, createStyles, Theme } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { changeLanguageSafe } from 'i18n';
import { ILanguageMeta } from 'i18n/i18n';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		icon: {
			fill: "#FAFAFA",
		},
	})
);

interface LanguagePickerProps {
	inverted?: boolean;
}

const LanguagePicker: React.FC<LanguagePickerProps> = ({
	inverted = false
}): JSX.Element => {
	const classes = useStyles();
	const { i18n } = useTranslation();

	const onLanguageChange = (value: string) =>
		changeLanguageSafe(value);

	const buildPicker = () => {
		const languages: ILanguageMeta[] = getLanguages().map((language: string): ILanguageMeta => getLanguageMeta(language));

		const { language } = i18n;
		const inputProps = inverted ? {
			classes: {
				icon: classes.icon,
			},
		} : undefined;

		return (
			<Select
				value={language}
				disableUnderline
				inputProps={inputProps}
				onChange={({ target: { value } }, child) => onLanguageChange(value as string)}
				input={<Input name="lang" />}
			>
				{languages.map((language: ILanguageMeta): JSX.Element =>
					<MenuItem key={language.code} value={language.code}>
						<img
							height="18" width="18"
							alt={`language: ${language.code}`}
							src={require(`assets/localization/${language.assetPath}`)}
							style={{ verticalAlign: "middle" }} />
					</MenuItem>
				)}
			</Select>
		);
	}

	return buildPicker();
}

export default LanguagePicker;
