import React from 'react';
import {MenuItem, TextField, styled} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {useField, useFormikContext} from 'formik';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
			'&::-webkit-scrollbar': {
				display: 'none',
			},
		},
	},
};

function getStyles(name, options, theme) {
	return {
		fontWeight:
			options.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

const TextFieldWrapper = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		borderRadius: 30,
		backgroundColor: '#fff',
	},
});

const CustomSelect = ({
	name,
	label,
	options,
	formikValue,
	styles,
	startAdornment,
	renderValue,
	isMultiple,
	...otherProps
}) => {
	const theme = useTheme();
	const {setFieldValue} = useFormikContext();
	const [field, meta] = useField(name);

	const handleChange = (e) => {
		const {value} = e.target;
		setFieldValue(name, typeof value === 'string' ? value.split(',') : value);
	};

	const configSelect = {
		...field,
		...otherProps,
		select: true,
		variant: 'outlined',
		label: label,
		SelectProps: {
			renderValue: renderValue,
			multiple: isMultiple,
			value: formikValue,
			MenuProps: MenuProps,
			onChange: handleChange,
		},
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
		>
			{options.map((item) => (
				<MenuItem key={item} value={item} style={getStyles(name, options, theme)}>
					{item}
				</MenuItem>
			))}
		</TextFieldWrapper>
	);
};

export default CustomSelect;
