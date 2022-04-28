import React from 'react';
import {Box, Typography} from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const refundPolicy = [
	`You will not be entitled for a refund after your freelancing is confirmed.`,

	`Personal reasons like getting a job elsewhere or moving to another place will not be entertained. However, we have presence all over India and you can use your Contact credits in any city of your choice.`,

	`You are not eligible for refund during your plan period. Please note that patience is the key and you may not get a confirmed Contact immediately after you register, as we provide best and nearest contact and it's not that company is denying it.`,
];

const RefundPolicy = () => {
	return (
		<div>
			{refundPolicy.map((text, index) => (
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

export default RefundPolicy;
