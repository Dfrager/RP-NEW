import React from 'react';
import {Box, Button, Typography} from '@mui/material';

const CRUDButton = (props) => {
	return (
		<Button type={props.isSubmit} disableRipple sx={{'&:hover': {background: 'none'}}}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					color: props.color,
					cursor: 'pointer',
					mr: 2,
				}}
				onClick={props.clicked}
			>
				{props.iconComponent}
				<Typography sx={{fontWeight: 700, textTransform: 'capitalize'}}>
					{props.typoValue}
				</Typography>
			</Box>
		</Button>
	);
};

export default CRUDButton;
