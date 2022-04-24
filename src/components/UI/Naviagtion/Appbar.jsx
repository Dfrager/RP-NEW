import React, {useEffect, useState} from 'react';

import {animateScroll as scroll} from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';

import {
	AppBar,
	AppbarContainer,
	AppbarItems,
	AppbarLinks,
	AppbarMenu,
	AppbarLogo,
	AppbarBtn,
} from './Appbar.styles';
import {Typography} from '@mui/material';

import {Logo} from '../../../assets';
import CommonButton from '../Button/CommonButton';
import ProfileAvatar from './ProfileAvatar';

const pages = ['about', 'contact'];

const Appbar = (props) => {
	const [scrollNav, setScrollNav] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false); // ! Replace it with api call
	const [username, setUsername] = useState('');

	const onScrollChangeHander = () => {
		if (window.scrollY >= 80) setScrollNav(true);
		else setScrollNav(false);
	};

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	useEffect(() => {
		window.addEventListener('scroll', onScrollChangeHander);

		if (sessionStorage) {
			setIsAuthenticated(!!sessionStorage.getItem('token'));
			setUsername(sessionStorage.getItem('username'));
		}

		// (async () => {})();
	}, [scrollNav]);

	return (
		<AppBar scrollNav={scrollNav}>
			<AppbarContainer>
				<AppbarLogo to='/' onClick={toggleHome} style={{textDecoration: 'none'}}>
					<img src={Logo} alt='LOGO' style={{height: '55px'}} />
					<Typography
						sx={{
							fontSize: '1rem',
							background: 'linear-gradient(180deg, #00A059 39.05%, #0280B4 66.27%)',
							backgroundClip: 'text',
							textFillColor: 'transparent',
							fontWeight: 700,
						}}
					>
						RIGHT PLATFORM
					</Typography>
				</AppbarLogo>
				<AppbarMenu>
					<AppbarItems>
						<AppbarLinks to='/'> home </AppbarLinks>
					</AppbarItems>
					{pages.map((item, i) => (
						<AppbarItems key={i}>
							<AppbarLinks to={item}> {item} </AppbarLinks>
						</AppbarItems>
					))}
					<AppbarBtn>
						{isAuthenticated ? (
							<ProfileAvatar name={username} profileSrc={props.profileSrc} />
						) : (
							<CommonButton variant='contained' size='small' component={RouterLink} toPath='/login'>
								Login
							</CommonButton>
						)}
					</AppbarBtn>
				</AppbarMenu>
			</AppbarContainer>
		</AppBar>
	);
};

export default Appbar;
