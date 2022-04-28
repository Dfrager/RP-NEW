import React, {useEffect, useRef, useState} from 'react';
import {Avatar, Box, InputLabel, Typography} from '@mui/material';

import {useFormikContext} from 'formik';

import TextInputField from '../../UI/FormComponents/Input/TextInputField';
import CustomDatePicker from '../../UI/FormComponents/DatePicker/CustomDatePicker';
import CustomSelect from '../../UI/FormComponents/Select/CustomSelect';
import ProfileImage from './ProfileImage';

const genderItems = ['Male', 'Female'];

const stateItems = ['Karnataka', 'Kerala', 'Tamil Nadu'];

const cityItems = ['Bengaluru', 'Mysore'];

const PersonalDetails = (props) => {
	const {values} = useFormikContext();

	useEffect(() => {}, []);

	const styles = {
		width: '200px',
		marginRight: '1rem',
		[`& fieldset`]: {
			borderRadius: 30,
		},
	};

	const selectStyles = {
		width: '200px',
		marginRight: '1rem',
	};
	return (
		<>
			<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
				<ProfileImage isDisabled={props.isDisabled} />
				<Box>
					<>
						<Box sx={{display: 'flex', alignItems: 'center', my: 4}}>
							<Box>
								<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>First Name</InputLabel>
								<TextInputField
									name='firstName'
									size='small'
									styles={styles}
									disabled={props.isDisabled}
								/>
							</Box>
							<Box>
								<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>Last Name</InputLabel>
								<TextInputField
									name='lastName'
									size='small'
									styles={styles}
									disabled={props.isDisabled}
								/>
							</Box>
							<Box>
								<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>Gender</InputLabel>
								<CustomSelect
									name='gender'
									styles={selectStyles}
									options={genderItems}
									size='small'
									disabled={props.isDisabled}
								/>
							</Box>
						</Box>
					</>
					<>
						<Box sx={{display: 'flex', alignItems: 'center', my: 4}}>
							<Box>
								<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>Date Of Birth</InputLabel>
								<CustomDatePicker
									name='dateOfBirth'
									size='small'
									styles={styles}
									disabled={props.isDisabled}
								/>
							</Box>

							<Box>
								<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>Mobile Number</InputLabel>
								<TextInputField
									name='mobileNumber'
									size='small'
									styles={styles}
									disabled={props.isDisabled}
								/>
							</Box>
							<Box>
								<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>Email ID</InputLabel>
								<TextInputField
									name='emailId'
									size='small'
									styles={styles}
									disabled={props.isDisabled}
								/>
							</Box>
						</Box>
					</>
					<>
						<Box sx={{display: 'flex', alignItems: 'center', my: 4}}>
							<Box>
								<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>State</InputLabel>
								<CustomSelect
									name='state'
									styles={selectStyles}
									options={stateItems}
									size='small'
									disabled={props.isDisabled}
								/>
							</Box>
							<Box>
								<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>City</InputLabel>
								<CustomSelect
									name='city'
									styles={selectStyles}
									options={cityItems}
									size='small'
									disabled={props.isDisabled}
								/>
							</Box>
							<Box>
								<InputLabel sx={{fontWeight: 400, color: '#95a5a6'}}>Pincode</InputLabel>
								<TextInputField
									name='pincode'
									size='small'
									styles={styles}
									disabled={props.isDisabled}
								/>
							</Box>
						</Box>
					</>
				</Box>
			</Box>
		</>
	);
};

export default PersonalDetails;
