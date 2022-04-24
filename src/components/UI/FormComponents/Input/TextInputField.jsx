import React, {memo} from 'react';
import {styled, TextField} from '@mui/material';
import {useField} from 'formik';

const TextFieldWrapper = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		borderRadius: 30,
		backgroundColor: '#fff',
	},
});

const TextInputField = ({name, styles, ...otherProps}) => {
	const [field, meta] = useField(name);

	const configTextField = {
		...field,
		...otherProps,
		// fullWidth: true,
		variant: 'outlined',
	};

	if (meta && meta.touched && meta.error) {
		configTextField.error = true;
		configTextField.helperText = meta.error;
	}

	return <TextFieldWrapper {...configTextField} sx={styles} />;
};

export default memo(TextInputField);
