import {createTheme} from '@mui/material/styles';

export const buttonTheme = createTheme({
	components: {
		// Name of the component
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					fontSize: '1rem',
					fontWeight: 700,
					fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
				},
				// Name of the slot
				contained: {
					// Some CSS
					textTransform: 'capitalize',
					borderRadius: '28.5px',
					padding: '0.875rem 4rem 0.875rem',
				},
			},
		},
	},
});
