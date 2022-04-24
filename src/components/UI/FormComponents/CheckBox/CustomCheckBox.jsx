import React from 'react';
import {
	Checkbox,
	FormControlLabel,
	FormControl,
	FormGroup,
	Box,
	FormHelperText,
} from '@mui/material';
import {useField, useFormikContext} from 'formik';

const CustomCheckBox = ({name, label, link, ...otherProps}) => {
	const {setFieldValue} = useFormikContext();
	const [field, meta] = useField(name);

	const handleChange = (event) => {
		const {checked} = event.target;
		setFieldValue(name, checked);
	};

	const configCheckbox = {
		...field,
		onChange: handleChange,
	};

	const configFormControl = {};

	if (meta && meta.touched && meta.error) {
		configFormControl.error = true;
	}

	return (
		<FormControl {...configFormControl}>
			<FormGroup>
				<Box sx={{display: 'flex', alignItems: 'center'}}>
					<FormControlLabel control={<Checkbox {...configCheckbox} />} label={label} />
					{link}
				</Box>
				<FormHelperText>{meta.error}</FormHelperText>
			</FormGroup>
		</FormControl>
	);
};

export default CustomCheckBox;
