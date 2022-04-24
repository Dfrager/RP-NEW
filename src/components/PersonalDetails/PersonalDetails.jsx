import React, {useRef, useState} from 'react';
import {Avatar, Box, InputLabel, Typography} from '@mui/material';

import {useFormikContext} from 'formik';

import TextInputField from '../UI/FormComponents/Input/TextInputField';
import CustomDatePicker from '../UI/FormComponents/DatePicker/CustomDatePicker';
import CustomSelect from '../UI/FormComponents/Select/CustomSelect';

const genderItems = [
	{value: 'Male', id: 123},
	{value: 'Female', id: 456},
	{value: 'Others', id: 789},
];

const stateItems = [
	{value: 'Karnataka', id: 123},
	{value: 'Kerala', id: 456},
	{value: 'Tamil Nadu', id: 789},
];

const cityItems = [
	{value: 'Bengaluru', id: 123},
	{value: 'Mysore', id: 456},
];

const PersonalDetails = () => {
	const [imagePreview, setImagePreview] = useState(null);
	const {values, setFieldValue} = useFormikContext();
	console.log(values);
	const fileRef = useRef(null);

	const reader = new FileReader();
	if (values.profileImage) reader.readAsDataURL(values.profileImage);

	reader.onload = () => {
		setImagePreview(reader.result);
	};

	const styles = {
		width: '250px',
		marginRight: '1rem',
		[`& fieldset`]: {
			borderRadius: 30,
		},
	};
	return (
		<>
			<Box sx={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
				<Typography sx={{mr: 2}}>Profile Picture</Typography>
				<input
					ref={fileRef}
					hidden
					type='file'
					name='profileImage'
					onChange={(e) => setFieldValue('profileImage', e.target.files[0])}
				/>
				<Box
					onClick={() => {
						fileRef.current.click();
					}}
				>
					{values.profileImage ? <Avatar src={imagePreview} /> : <Avatar />}
				</Box>
			</Box>
			<Box>
				<>
					<Box sx={{display: 'flex', alignItems: 'center', my: 4}}>
						<Box>
							<InputLabel sx={{fontWeight: 600, color: '#000'}}>First Name</InputLabel>
							<TextInputField name='firstName' size='small' styles={styles} />
						</Box>
						<Box>
							<InputLabel sx={{fontWeight: 600, color: '#000'}}>Last Name</InputLabel>
							<TextInputField name='lastName' size='small' styles={styles} />
						</Box>
						<Box>
							<InputLabel sx={{fontWeight: 600, color: '#000'}}>Gender</InputLabel>
							<CustomSelect
								name='gender'
								styles={{
									width: '250px',
									marginRight: '1rem',
								}}
								options={genderItems}
								size='small'
							/>
						</Box>
					</Box>
				</>
				<>
					<Box sx={{display: 'flex', alignItems: 'center', my: 4}}>
						<Box>
							<InputLabel sx={{fontWeight: 600, color: '#000'}}>Date Of Birth</InputLabel>
							<CustomDatePicker name='dateOfBirth' size='small' styles={styles} />
						</Box>

						<Box>
							<InputLabel sx={{fontWeight: 600, color: '#000'}}>Mobile Number</InputLabel>
							<TextInputField name='mobileNumber' size='small' styles={styles} />
						</Box>
						<Box>
							<InputLabel sx={{fontWeight: 600, color: '#000'}}>Email ID</InputLabel>
							<TextInputField name='emailId' size='small' styles={styles} />
						</Box>
					</Box>
				</>
				<>
					<Box sx={{display: 'flex', alignItems: 'center', my: 4}}>
						<Box>
							<InputLabel sx={{fontWeight: 600, color: '#000'}}>State</InputLabel>
							<CustomSelect
								name='state'
								styles={{
									width: '250px',
									marginRight: '1rem',
								}}
								options={stateItems}
								size='small'
							/>
						</Box>
						<Box>
							<InputLabel sx={{fontWeight: 600, color: '#000'}}>City</InputLabel>
							<CustomSelect
								name='city'
								styles={{
									width: '250px',
									marginRight: '1rem',
								}}
								options={cityItems}
								size='small'
							/>
						</Box>
						<Box>
							<InputLabel sx={{fontWeight: 600, color: '#000'}}>Pincode</InputLabel>
							<TextInputField name='pincode' size='small' styles={styles} />
						</Box>
					</Box>
				</>
			</Box>
		</>
	);
};

export default PersonalDetails;
