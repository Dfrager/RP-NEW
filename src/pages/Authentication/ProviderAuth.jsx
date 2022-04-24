import React from 'react';
import {Box, Link} from '@mui/material';

import {google, facebook} from '../../assets/index';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const providerNames = [
	{provider: 'google', imageSrc: google},
	{provider: 'facebook', imageSrc: facebook},
];

const ProviderAuth = () => {
	return (
		<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			{providerNames?.map((providerName) => (
				<Link
					href={`${backendUrl}/api/connect/${providerName.provider}`}
					key={providerName.provider}
				>
					<img
						src={providerName.imageSrc}
						alt='google'
						style={{
							width: '70px',
							height: '70px',
							cursor: 'pointer',
						}}
					/>
				</Link>
			))}
		</Box>
	);
};

export default ProviderAuth;
