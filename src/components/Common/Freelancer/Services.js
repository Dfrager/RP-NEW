import React from 'react';
import {Box, InputLabel} from '@mui/material';
import CustomSelect from '../../UI/FormComponents/Select/CustomSelect';

const serviceItems = [
	'Home Tutor',
	'Gym Trainer',
	'Fitness Trainer',
	'Cricket Coaching',
	'Yoga Coaching',
	'Football Coaching',
	'Basket Coaching',
	'Digital Marketing',
	'Graphic Designer',
];

const Services = ({values}) => {
	console.log(values);
	return (
		<Box sx={{my: 4}}>
			<InputLabel sx={{fontWeight: 600, color: '#000'}}>
				What services are you looking for?
			</InputLabel>
			<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
				<CustomSelect
					name='fservices'
					label='services'
					style={{
						width: '50%',
						marginRight: '1rem',
					}}
					options={serviceItems}
					size='small'
					styles={{
						width: '50%',
						marginRight: '1rem',
					}}
				/>
			</Box>
		</Box>
	);
};

export default Services;
