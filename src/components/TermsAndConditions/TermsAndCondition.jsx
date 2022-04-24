import React from 'react';
import {Box, Typography} from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const termsAndCondition = [
	`Please read the 'Rightplatform' terms and conditions to avoid any misunderstandings or an unnecessary uncomfortable situation in the future. We really think that before registering with us, you should read it completely, understand it, and clear any concerns you may have.`,

	`By registering as a Freelancer/Client on our website, you agree to these terms and conditions.`,

	`Rightplatform is a website that allows Freelancers to contact Clients and Clients to contact Freelancers in order to examine their profiles.`,

	`At the time of registration, please give a valid contact number and personal email address.`,

	`Rightplatform shall not be held accountable for any incorrect informationprovided by you.`,

	`Any profile that contains irrelevant, unlawful, or pornographic information is strictly forbidden.`,
];

const TermsAndCondition = () => {
	return (
		<div>
			{termsAndCondition.map((text, index) => (
				<Box sx={{display: 'flex', aligntexts: 'center', my: 2}} key={index}>
					<ArrowCircleRightIcon
						sx={{
							fill: '#AFDCDF',
							mr: 2,
						}}
					/>
					<Typography>{text}</Typography>
				</Box>
			))}
		</div>
	);
};

export default TermsAndCondition;
