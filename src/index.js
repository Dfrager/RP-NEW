import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {ThemeProvider} from '@mui/material/styles';
import {BrowserRouter} from 'react-router-dom';

import {globalTheme} from './shared/theme/globalTheme';

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider theme={globalTheme}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
