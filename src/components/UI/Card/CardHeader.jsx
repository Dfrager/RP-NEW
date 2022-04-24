import {Typography} from '@mui/material';
import React from 'react';

const CardHeader = ({children, fs = '1.2rem'}) => {
	const styles = {
		color: '#4a99d3',
		fontSize: fs,
		fontWeight: 700,
		textAlign: 'center',
		lineHeight: '20px',
		position: 'relative',
		marginBottom: '2.5rem',

		'&::after': {
			content: "''",
			width: '160px',
			height: '2px',
			backgroundColor: '#4a99d3',
			display: 'block',
			margin: '0 auto',
			marginTop: '1rem',
			borderRadius: '30px',
		},
	};

	return (
		<Typography variant='h6' component='h6' sx={styles}>
			{children}
		</Typography>
	);
};

export default CardHeader;
