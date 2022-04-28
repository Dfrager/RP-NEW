import React, {memo} from 'react';
import {MenuItem, TextField, styled} from '@mui/material';
import {useField, useFormikContext} from 'formik';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

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
				MenuProps: MenuProps,
			}}
		>
			{options.map((item) => (
				<MenuItem key={item} value={item}>
					{item}
				</MenuItem>
			))}
		</TextFieldWrapper>
	);
};

export default memo(CustomSelect);
