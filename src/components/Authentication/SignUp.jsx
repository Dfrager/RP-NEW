import React, {useState} from 'react';

import {Box, Checkbox, FormControlLabel, IconButton, InputAdornment, Link} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';

import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import TextInputField from '../UI/FormComponents/Input/TextInputField';
import CustomCheckBox from '../UI/FormComponents/CheckBox/CustomCheckBox';
import CommonButton from '../UI/Button/CommonButton';
import CustomModal from '../UI/Modal/CustomModal';
import TCandRefund from '../TermsAndConditions/TCandRefund';

// const passwordRegex= ^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$

// * FORM Validation
const FORM_VALIDATION = Yup.object().shape({
	name: Yup.string().required('Please enter your name!!'),

	email: Yup.string()
		.email('Please enter a valid email address')
		.required('Please enter your email address'),

	password: Yup.string()
		.min(8, 'Password must be at least 8 characters long')
		// .matches(
		// 	'^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$',
		// 	'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
		// )
		.required('Please enter your password'),

	confirmPassword: Yup.string()
		.nullable(true)
		.required('Password Confirmation is Required!')
		.oneOf([Yup.ref('password'), null], 'Entered Passwords must be matched'),

	termsAndConditions: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});
// * FORM Validation

const SignIn = (props) => {
	const [showPassword, setShowPassword] = useState(false);
	const [open, setOpen] = useState(false);

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const styles = {
		width: '85%',
		[`& fieldset`]: {
			borderRadius: 30,
		},
	};

	return (
		<>
			<CustomModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
				<TCandRefund handleClose={handleClose} />
			</CustomModal>
			<Formik
				style={{width: '100%'}}
				initialValues={{
					name: '',
					email: '',
					password: '',
					confirmPassword: '',
					termsAndConditions: false,
				}}
				validationSchema={FORM_VALIDATION}
				onSubmit={({email, password, name}) => {
					props.handleAuthSubmit(email, password, name);
				}}
			>
				<Form>
					<Box sx={{width: '70%', mx: 'auto'}}>
						<Box sx={{textAlign: 'center'}}>
							<TextInputField name='name' label='Name' type='text' margin='dense' styles={styles} />
							<TextInputField
								name='email'
								label='Email Address'
								type='email'
								margin='dense'
								styles={styles}
							/>
							<TextInputField
								name='password'
								label='Password'
								margin='dense'
								type='password'
								styles={styles}
							/>
							<TextInputField
								name='confirmPassword'
								label='Confirm Password'
								margin='dense'
								type={showPassword ? 'text' : 'password'}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<IconButton onClick={handleClickShowPassword}>
												{showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									),
								}}
								styles={styles}
							/>
							<FormControlLabel control={<Checkbox />} label='Remember Me' />
							<CustomCheckBox
								name='termsAndConditions'
								label='Accept our -'
								link={
									<Link sx={{cursor: 'pointer'}} onClick={handleOpen}>
										terms and conditions
									</Link>
								}
							/>
						</Box>
						{/* <FormControlLabel
							control={<Checkbox />}
							label='Agree with our terms and conditions'
							onClick={handleOpen}
						/> */}
					</Box>
					<Box sx={{width: '50%', mx: 'auto', textAlign: 'center', mt: '1.5rem'}}>
						<CommonButton variant='contained' size='small' type='submit'>
							Sign Up
						</CommonButton>
					</Box>
				</Form>
			</Formik>
		</>
	);
};

export default SignIn;
