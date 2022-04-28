import React from 'react';
import {Box, InputLabel} from '@mui/material';
import TextInputField from '../../UI/FormComponents/Input/TextInputField';
import CustomDatePicker from '../../UI/FormComponents/DatePicker/CustomDatePicker';

const Work = () => {
	const styles = {
		width: '80%',
		marginRight: '1rem',
		[`& fieldset`]: {
			borderRadius: 30,
		},
	};
	return (
		<Box>
			<Box>
				<Box sx={{display: 'flex', alignItems: 'center', my: 2}}>
					<Box width='100%'>
						<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>Designation</InputLabel>
						<TextInputField name='designation' size='small' styles={styles} />
					</Box>
					<Box width='100%'>
						<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>Organisation</InputLabel>
						<TextInputField name='organization' size='small' styles={styles} />
					</Box>
				</Box>
				<Box sx={{display: 'flex', alignItems: 'center', my: 2}}>
					<Box width='100%'>
						<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>Description</InputLabel>
						<TextInputField
							name='description'
							size='small'
							multiline
							rows={4}
							styles={{
								width: '90%',
								[`& fieldset`]: {
									borderRadius: 6,
								},
							}}
						/>
					</Box>
				</Box>

				<Box sx={{display: 'flex', alignItems: 'center', my: 2}}>
					<Box width='100%'>
						<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>From</InputLabel>
						<CustomDatePicker name='workfrom' size='small' styles={styles} />
					</Box>
					<Box width='100%'>
						<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>To</InputLabel>
						<CustomDatePicker name='workto' size='small' styles={styles} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Work;
