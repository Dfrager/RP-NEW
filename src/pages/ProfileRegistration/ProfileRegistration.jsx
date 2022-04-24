import React from 'react';
import {Box, Container, Link, Paper, Typography} from '@mui/material';
import PersonalDetails from '../../components/PersonalDetails/PersonalDetails';

const ProfileRegistration = () => {
	const cardStyles = {
		padding: '4rem 8rem',
		borderRadius: '15px',
		width: '968px',
		backgroundColor: 'rgba(206, 231, 235, 0.1)',
	};

	return (
		<Container>
			<Box sx={{width: '100%', height: '100%', display: 'grid', placeContent: 'center'}}>
				<Paper elevation={0} rounded='true' sx={cardStyles}>
					<Box>
						{/* <PersonalDetails /> */}
					</Box>
				</Paper>
			</Box>
		</Container>
	);
};

export default ProfileRegistration;
