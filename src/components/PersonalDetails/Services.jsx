import {Box, InputLabel} from '@mui/material';
import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import CustomSelect from '../../UI/FormComponents/Dropdown/CustomSelect';

const servicesItems = [
	{value: 'Home Tutor', id: 123},
	{value: 'Fitness Coaching', id: 456},
	{value: 'Graphic Design', id: 789},
	{value: 'Digital Marketing', id: 963},
	{value: 'Cricket Coaching', id: 852},
	{value: 'Gym Coach', id: 741},
];

const Services = (props) => {
	return (
		<Box sx={{my: 4}}>
			<InputLabel sx={{fontWeight: 600, color: '#000'}}>
				What services are you looking for?
			</InputLabel>
			<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
				<CustomSelect
					name={props.name}
					style={{
						width: '50%',
						marginRight: '1rem',
					}}
					options={servicesItems}
					size='small'
					startAdornment={
						<SearchRoundedIcon
							sx={{
								color: '#8A8A8A',
								mr: 2,
							}}
							size='small'
						/>
					}
				/>
			</Box>
		</Box>
	);
};

export default Services;
