import React from 'react';
import {Box, InputLabel} from '@mui/material';
import TextInputField from '../../UI/FormComponents/Input/TextInputField';

const WorkExperience = () => {
	const styles = {
		width: '40%',
		marginRight: '1rem',
		[`& fieldset`]: {
			borderRadius: 30,
		},
	};
	return (
		<Box sx={{display: 'flex', alignItems: 'center', my: 2}}>
			<Box width='100%'>
				<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>
					Total Experience - in Years
				</InputLabel>
				<TextInputField name='grade' size='small' styles={styles} />
			</Box>
		</Box>
	);
};

export default WorkExperience;
