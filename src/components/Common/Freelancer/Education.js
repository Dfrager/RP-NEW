import React, {useRef} from 'react';
import {Box, InputLabel, Typography} from '@mui/material';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

import TextInputField from '../../UI/FormComponents/Input/TextInputField';
import CustomDatePicker from '../../UI/FormComponents/DatePicker/CustomDatePicker';
import CRUDButton from '../../UI/CRUDButton/CRUDButton';

const Education = () => {
	const styles = {
		width: '80%',
		marginRight: '1rem',
		[`& fieldset`]: {
			borderRadius: 30,
		},
	};
	return (
		<Box my={2}>
			<Box sx={{display: 'flex', alignItems: 'center', my: 2}}>
				<Box width='100%'>
					<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>Grade</InputLabel>
					<TextInputField name='grade' size='small' styles={styles} />
				</Box>
				<Box width='100%'>
					<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>Institution</InputLabel>
					<TextInputField name='institution' size='small' styles={styles} />
				</Box>
			</Box>
			<Box sx={{display: 'flex', alignItems: 'center', my: 2}}>
				<Box width='100%'>
					<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>From</InputLabel>
					<CustomDatePicker name='edufrom' size='small' styles={styles} />
				</Box>
				<Box width='100%'>
					<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>To</InputLabel>
					<CustomDatePicker name='eduto' size='small' styles={styles} />
				</Box>
			</Box>
			<Box>
				<CRUDButton
					iconComponent={<AddBoxRoundedIcon sx={{mr: 2}} />}
					color='#02A450'
					typoValue='Add Certificate'
				/>
			</Box>
		</Box>
	);
};

export default Education;
