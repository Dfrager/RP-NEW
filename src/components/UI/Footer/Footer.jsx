import React from 'react';
import {Box} from '@mui/system';
import {Container, Typography} from '@mui/material';
import {Logo} from '../../../assets/index';

const Footer = () => {
	const subtitle1Styles = {
		fontWeight: 700,
		color: 'white',
	};
	return (
		<>
			<Box
				sx={{
					background: 'linear-gradient(180deg, #1976D2 0%, #6ED7DD 69.64%)',
					py: '5rem',
					px: '2.5rem',
					mt: 6,
				}}
			>
				<Container>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<Box>
							<Box>
								<Typography variant='subtitle1' sx={subtitle1Styles}>
									We are here
								</Typography>
							</Box>
							<Box>
								<Typography color='white'>lorem ipsum</Typography>
								<Typography color='white'>lorem ipsum</Typography>
								<Typography color='white'>lorem ipsum</Typography>
							</Box>
						</Box>

						<Box>
							<Box>
								<Typography variant='subtitle1' sx={subtitle1Styles}>
									Get in touch@
								</Typography>
							</Box>
							<Box>
								<Typography color='white'>lorem ipsum</Typography>
								<Typography color='white'>lorem ipsum</Typography>
								<Typography color='white'>lorem ipsum</Typography>
							</Box>
						</Box>

						<Box>
							<Box>
								<Typography variant='subtitle1' sx={subtitle1Styles}>
									Navigation
								</Typography>
							</Box>
							<Box>
								<Typography color='white'>lorem ipsum</Typography>
								<Typography color='white'>lorem ipsum</Typography>
								<Typography color='white'>lorem ipsum</Typography>
							</Box>
						</Box>

						<Box>
							<Box>
								<Typography variant='subtitle1' sx={subtitle1Styles}>
									Subscribe to our newsletter
								</Typography>
							</Box>
							<Box>{/* TODO: Subcribe email form */}</Box>
						</Box>
					</Box>
				</Container>
			</Box>
			<Box>
				<Container>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							py: '1rem',
						}}
					>
						<Box
							sx={{
								justifySelf: 'flex-start',
								cursor: 'pointer',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<img src={Logo} alt='LOGO' style={{height: '50px'}} />
						</Box>

						<Typography>©2022 All Rights Reserved</Typography>
						<Box>Social Icons</Box>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Footer;
