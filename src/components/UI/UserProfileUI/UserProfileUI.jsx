import React from 'react';
import {Box, Paper, Typography} from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import CRUDButton from '../CRUDButton/CRUDButton';

// #02A450

const UserProfileUI = ({header, children, isSubmit, clicked, showShadow}) => {
	return (
		<Box>
			<Paper sx={{boxShadow: showShadow ? 'rgba(0, 0, 0, 0.08) 0px 4px 12px' : 'none', p: 4}}>
				<Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4}}>
					<Box>
						<Typography
							sx={{
								fontSize: '1.4rem',
								fontWeight: 700,
								textTransform: 'uppercase',
								// color: '#02a450',
							}}
						>
							{header}
						</Typography>
					</Box>
					<>
						<Box sx={{display: 'flex'}}>
							<CRUDButton
								iconComponent={<EditRoundedIcon sx={{mr: 2}} />}
								color='#1976D2'
								typoValue='Edit'
								clicked={clicked}
							/>
							<CRUDButton
								iconComponent={<AddCircleOutlineRoundedIcon sx={{mr: 2}} />}
								color='#02A450'
								typoValue='Save'
								isSubmit={isSubmit}
							/>
						</Box>
					</>
				</Box>
				<Box>{children}</Box>
			</Paper>
		</Box>
	);
};

export default UserProfileUI;
