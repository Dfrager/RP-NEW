import React from 'react';

import {Box} from '@mui/material';
import AllRoutes from './routes/AllRoutes';
import Appbar from './components/UI/Naviagtion/Appbar';

function App() {
	return (
		<Box className='App'>
			<Appbar />
			<AllRoutes />
		</Box>
	);
}

export default App;
