import React from 'react';
import {
	Box,
	FormControlLabel,
	InputLabel,
	Radio,
	RadioGroup,
	Typography,
	FormLabel,
} from '@mui/material';
import TextInputField from '../../UI/FormComponents/Input/TextInputField';
import CustomSelect from '../../UI/FormComponents/Dropdown/CustomSelect';

const dropdownItems = [
	{value: 'lorem ipsum', id: 123},
	{value: 'lorem ipsum', id: 456},
	{value: 'lorem ipsum', id: 789},
	{value: 'lorem ipsum', id: 1011},
	{value: 'lorem ipsum', id: 1012},
	{value: 'lorem ipsum', id: 1013},
	{value: 'lorem ipsum', id: 1014},
	{value: 'lorem ipsum', id: 1015},
	{value: 'lorem ipsum', id: 1016},
];

const ServiceDetails = ({serviceTitle, descName, select1, select2, select3, select4}) => {
	const styles = {
		width: '50%',
		mr: 4,
	};

	return (
		<>
			<Box>
				<Typography fontWeight={700} mb={2} fontSize='1rem' textTransform='uppercase'>
					{serviceTitle}
				</Typography>
				<Box>
					<Box width='100%'>
						<InputLabel sx={{fontWeight: 600, color: '#000'}}>Description</InputLabel>
						<TextInputField
							name={descName}
							size='small'
							multiline
							rows={4}
							styles={{
								width: '100%',
								[`& fieldset`]: {
									borderRadius: 6,
								},
							}}
						/>
					</Box>
					<Box>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								my: 4,
							}}
						>
							<Box width='100%'>
								<InputLabel sx={{fontWeight: 600, color: '#000'}}>Label</InputLabel>
								<CustomSelect name={select1} styles={styles} options={dropdownItems} size='small' />
							</Box>

							<Box width='100%'>
								<InputLabel sx={{fontWeight: 600, color: '#000'}}>Label</InputLabel>
								<CustomSelect name={select2} styles={styles} options={dropdownItems} size='small' />
							</Box>
						</Box>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								my: 4,
							}}
						>
							<Box width='100%'>
								<InputLabel sx={{fontWeight: 600, color: '#000'}}>Label</InputLabel>
								<CustomSelect name={select3} styles={styles} options={dropdownItems} size='small' />
							</Box>

							<Box width='100%'>
								<InputLabel sx={{fontWeight: 600, color: '#000'}}>Label</InputLabel>
								<CustomSelect name={select4} styles={styles} options={dropdownItems} size='small' />
							</Box>
						</Box>
					</Box>
					<Box>
						{/* TODO: Validate Radio buttons */}
						<FormLabel
							id='demo-row-radio-buttons-group-label'
							sx={{fontWeight: 600, color: '#000'}}
						>
							Availabilty
						</FormLabel>
						<RadioGroup
							row
							aria-labelledby='demo-row-radio-buttons-group-label'
							name='row-radio-buttons-group'
						>
							<FormControlLabel value='online' control={<Radio />} label='Online' />
							<FormControlLabel value='offline' control={<Radio />} label='Offline' />
							<FormControlLabel value='both' control={<Radio />} label='Both' />
						</RadioGroup>
						{/* TODO: Validate Radio buttons */}
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default ServiceDetails;
