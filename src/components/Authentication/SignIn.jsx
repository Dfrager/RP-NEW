import React, {useState} from 'react';

import {Box, Checkbox, FormControlLabel, IconButton, InputAdornment} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';

import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import TextInputField from '../UI/FormComponents/Input/TextInputField';
import CommonButton from '../UI/Button/CommonButton';

// * FORM Validation
export const FORM_VALIDATION = Yup.object({
	email: Yup.string()
		.email('Please enter a valid email address')
		.required('Please enter your email address'),

	password: Yup.string().required('Please enter your password'),
});
// * FORM Validation

const SignIn = (props) => {
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword(!showPassword);

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const styles = {
		width: '85%',
		[`& fieldset`]: {
			borderRadius: 30,
		},
	};

	return (
		<Formik
			style={{width: '100%'}}
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={FORM_VALIDATION}
			onSubmit={({email, password}) => {
				props.handleAuthSubmit(email, password, null);
			}}
		>
			{() => (
				<Form>
					<Box
						sx={{
							width: '70%',
							mx: 'auto',
						}}
					>
						<Box sx={{textAlign: 'center'}}>
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
						</Box>
					</Box>
					<Box sx={{width: '50%', mx: 'auto', textAlign: 'center', mt: '1.5rem'}}>
						<CommonButton variant='contained' size='small' type='submit'>
							Login
						</CommonButton>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default SignIn;
