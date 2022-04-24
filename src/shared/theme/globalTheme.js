import {createTheme} from '@mui/material/styles';

export const globalTheme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				'*': {
					margin: 0,
					padding: 0,
					boxSizing: 'border-box',
				},
			},
		},

		MuiTextField: {
			styleOverrides: {
				root: {
					// [`& fieldset`]: {
					// 	borderRadius: 30,
					// },
				},
			},
		},
	},

	typography: {
		fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),

		h1: {
			fontSize: '2rem',
			'@media (min-width: 600px)': {
				fontSize: '2.75rem',
			},
			'@media (min-width: 900px)': {
				fontSize: '3.25rem',
			},

			fontWeight: 600,
			color: '#1f2041',
		},

		h2: {
			color: '#1f2041',
			fontWeight: 600,

			fontSize: '1.75rem',
			'@media (min-width: 600px)': {
				fontSize: '2.25rem',
			},
			'@media (min-width: 900px)': {
				fontSize: '2.75rem',
			},
			'@media (min-width: 1200px)': {
				fontSize: '3rem',
			},
		},
	},

	palette: {
		primary: {
			main: '#1976D2',
			light: '#AFDCDF',
			text1: '#1f2041',
			text2: '#02a450',
		},
	},

	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
});
