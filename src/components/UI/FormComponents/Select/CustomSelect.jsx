import React, {memo} from 'react';
import {MenuItem, TextField, styled} from '@mui/material';
import {useField, useFormikContext} from 'formik';

const TextFieldWrapper = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		borderRadius: 30,
		backgroundColor: '#fff',
	},
});

const CustomSelect = ({
	name,
	options,
	styles,
	placeholder,
	startAdornment,
	renderValue,
	...otherProps
}) => {
	const {setFieldValue} = useFormikContext();
	const [field, meta] = useField(name);

	const handleChange = (e) => {
		const {value} = e.target;
		setFieldValue(name, value);
	};

	const configSelect = {
		...field,
		...otherProps,
		select: true,
		variant: 'outlined',
		onChange: handleChange,
	};

	if (meta && meta.touched && meta.error) {
		configSelect.error = true;
		configSelect.helperText = meta.error;
	}

	return (
		<TextFieldWrapper
			sx={styles}
			{...configSelect}
			InputProps={{
				startAdornment: startAdornment,
			}}
			SelectProps={{
				renderValue: renderValue,
				defaultValue: '',
			}}
		>
			<MenuItem disabled value=''>
				{placeholder}
			</MenuItem>
			{options.map((item) => (
				<MenuItem key={item.id} value={item.value}>
					{item.value}
				</MenuItem>
			))}
		</TextFieldWrapper>
	);
};

export default memo(CustomSelect);
