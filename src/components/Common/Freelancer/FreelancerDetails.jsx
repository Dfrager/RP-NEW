import React from 'react';
import {Box, Divider, Typography} from '@mui/material';
import Education from './Education';
import Work from './Work';
import WorkExperience from './WorkExperience';
import Services from './Services';

const FreelancerDetails = ({values}) => {
	return (
		<Box>
			<HeaderBox boxTitle='Education'>
				<Education />
			</HeaderBox>
			<Divider />

			<HeaderBox boxTitle='Work'>
				<Work />
			</HeaderBox>
			<Divider />

			<HeaderBox boxTitle='Experience'>
				<WorkExperience />
			</HeaderBox>
			<Divider />

			<HeaderBox boxTitle='Services'>
				<Services values={values} />
			</HeaderBox>
			<Divider />

			<HeaderBox boxTitle='Give a Summary of your Freelance Service'></HeaderBox>
		</Box>
	);
};

function HeaderBox({children, boxTitle}) {
	return (
		<Box mt={2}>
			<Typography fontWeight={600} fontSize={20}>
				{boxTitle}
			</Typography>
			{children}
		</Box>
	);
}

export default FreelancerDetails;
