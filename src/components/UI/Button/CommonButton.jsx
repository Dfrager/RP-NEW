import React from 'react';
import {ThemeProvider, useTheme} from '@mui/material/styles';
import Button from '@mui/material/Button';
import {buttonTheme} from './buttonTheme';

const CommonButton = ({
	children,
	color,
	disabled,
	size,
	variant,
	toPath,
	component,
	type,
	click,
}) => {
	const theme = useTheme();


	const buttonStyles = {
		background: theme.palette.common.white,
		color: theme.palette.primary.main,
		transition: '.4s all ease-out',

		'&:hover': {
			background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
			color: theme.palette.common.white,
			transition: '.4s all ease-out',
		},
	};
	return (
		<ThemeProvider theme={buttonTheme}>
			<Button
				color={color}
				disabled={disabled}
				size={size}
				sx={buttonStyles}
				variant={variant}
				component={component}
				to={toPath}
				type={type}
				onClick={click}
				
			>
				{children}
			</Button>
		</ThemeProvider>
	);
};

export default CommonButton;
