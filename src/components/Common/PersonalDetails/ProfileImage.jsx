import React, {useRef, useState} from 'react';
import {Avatar, Box, Typography} from '@mui/material';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

import {useFormikContext} from 'formik';
import CRUDButton from '../../UI/CRUDButton/CRUDButton';

const ProfileImage = (props) => {
	const [imagePreview, setImagePreview] = useState(null);
	const {values, setFieldValue} = useFormikContext();

	const fileRef = useRef(null);

	const reader = new FileReader();
	if (values.profileImage) reader.readAsDataURL(values.profileImage);

	reader.onload = () => {
		setImagePreview(reader.result);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<Box sx={{cursor: 'pointer'}}>
				<Box
					onClick={() => {
						fileRef.current.click();
					}}
				>
					{values.profileImage ? (
						<Avatar
							src={imagePreview}
							sx={{
								width: 250,
								height: 250,
							}}
						/>
					) : (
						<Avatar
							sx={{
								width: 250,
								height: 250,
								background: '#AFDCDF',
							}}
						/>
					)}
				</Box>
				<Box
					sx={{width: '100%', mt: 2, textAlign: 'center'}}
					onClick={() => {
						fileRef.current.click();
					}}
				>
					<CRUDButton
						iconComponent={<AddBoxRoundedIcon sx={{mr: 2}} />}
						color='#02A450'
						typoValue='Add New Profile'
						isCenter='center'
					/>
				</Box>
				<input
					ref={fileRef}
					hidden
					type='file'
					name='profileImage'
					onChange={(e) => setFieldValue('profileImage', e.target.files[0])}
					disabled={props.isDisabled}
				/>
			</Box>
		</Box>
	);
};

export default ProfileImage;
