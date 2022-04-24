import React, {useState} from 'react';
import {useNavigate} from 'react-router';

import {Alert, Box, Container, Link, Paper, Typography} from '@mui/material';

import axios from '../../axios-instance';
import {Logo} from '../../assets/index';

import ProviderAuth from './ProviderAuth';

import Spinner from '../../components/UI/Spinner/Spinner';
import SignIn from '../../components/Authentication/SignIn';
import SignUp from '../../components/Authentication/SignUp';

const Authentication = (props) => {
	const navigate = useNavigate();

	const [isSignIn, setIsSignIn] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState();

	const handleClickAuth = () => setIsSignIn(!isSignIn);

	// * Sending your user credentials to the backend for login and registration
	const handleAuthSubmit = async (email, password, name) => {
		setIsLoading(true);

		let authData;
		let authURL;

		authData = {
			identifier: email,
			password: password,
		};

		authURL = '/api/auth/local';

		if (!isSignIn) {
			authData = {
				username: name,
				email: email,
				password: password,
			};
			authURL = '/api/auth/local/register';
		}

		axios
			.post(authURL, authData)
			.then((response) => {
				console.log(response.data);
				sessionStorage.setItem('token', response.data.jwt);
				sessionStorage.setItem('username', response.data.user.username);
				setIsError(null);
				setIsLoading(false);
				navigate('/profile-registration');
			})
			.catch((error) => {
				setIsError(error.response.data.error);
				setIsLoading(false);
			});
	};

	// * Switching up login to register and vice versa
	let form;
	if (!isSignIn) form = <SignUp handleAuthSubmit={handleAuthSubmit} />;
	else form = <SignIn handleAuthSubmit={handleAuthSubmit} />;

	// * Loadder for awating POST request to send request to the backend
	if (isLoading) {
		form = (
			<Box sx={{display: 'grid', placeContent: 'center', width: '100%', my: 8}}>
				<Spinner size='8rem' />
			</Box>
		);
	}

	// * Displaying authentication error messages
	let errorMessage = null;
	if (isError) {
		errorMessage = (
			<Alert severity='error' sx={{mb: 2}}>
				This is an error alert — <strong>{isError.message}</strong>
			</Alert>
		);
	}

	const cardStyles = {
		padding: '4rem 8rem',
		borderRadius: '15px',
		width: '968px',
		backgroundColor: 'rgba(206, 231, 235, 0.1)',
	};

	return (
		<Container>
			<Box sx={{width: '100%', height: '100%', display: 'grid', placeContent: 'center'}}>
				<Paper elevation={0} rounded='true' sx={cardStyles}>
					<Box textAlign='center' mb={4}>
						<img
							src={Logo}
							alt='logo'
							style={{
								width: '120px',
								cursor: 'pointer',
							}}
							onClick={() => navigate('/')}
						/>
					</Box>
					{errorMessage}

					{form}

					<Box sx={{mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
						<hr style={{width: '35%'}} />
						{/* TODO: Make the registration page based on click func to change text */}
						<Typography sx={{fontWeight: '600'}}>or Sign In with</Typography>
						<hr style={{width: '35%'}} />
					</Box>
					<ProviderAuth />
					<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
						<Typography sx={{fontWeight: '600', fontSize: '1.2rem'}}>
							{isSignIn ? `Dont't have an account? ` : `Already have an account? `}
							<Link
								sx={{color: '#02A450', textDecoration: 'none', cursor: 'pointer'}}
								onClick={handleClickAuth}
							>
								{/* TODO: Make the registration page based on click func to change text */}
								{isSignIn ? 'Sign Up!' : 'Sign In!'}
							</Link>
						</Typography>
					</Box>
				</Paper>
			</Box>
		</Container>
	);
};

export default Authentication;
