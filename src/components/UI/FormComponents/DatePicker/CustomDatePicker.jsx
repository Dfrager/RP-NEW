import {TextField} from '@mui/material';
import {useField} from 'formik';
import React from 'react';

const CustomDatePicker = ({name, styles, ...otherProps}) => {
	const [field, meta] = useField(name);

	const configDatePicker = {
		...field,
		...otherProps,
		type: 'date',
		variant: 'outlined',
		InputLabelProps: {
			shrink: true,
		},
	};

	if (meta && meta.touched && meta.error) {
		configDatePicker.error = true;
		configDatePicker.helperText = meta.error;
	}

	return <TextField {...configDatePicker} sx={styles} />;
};

export default CustomDatePicker;
