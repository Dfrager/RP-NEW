import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function CircularIndeterminate({size, thickness, sx}) {
	return (
		<Box sx={{display: 'flex'}}>
			<CircularProgress size={size} thickness={thickness} sx={sx} />
		</Box>
	);
}
export default CircularIndeterminate;
