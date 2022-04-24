import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {NavLink as NLinkR} from 'react-router-dom';

export const AppBar = styled.nav`
	background-color: ${({scrollNav}) => (scrollNav ? 'rgba(255,255,255, 0.45)' : 'white')};
	backdrop-filter: ${({scrollNav}) =>
		scrollNav ? 'blur(10px) saturate(100%) contrast(45%) brightness(130%)' : 'none'};
	box-shadow: ${({scrollNav}) => (scrollNav ? '0 12px 12px -12px rgb(0 0 0 / 30%)' : 'none')};
	height: 80px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 888;
	margin-bottom: 2rem;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const AppbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	max-width: 1200px;
	padding: 0 24px;
`;

export const AppbarLogo = styled(LinkR)`
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
	text-decoration: 'none';
`;

export const AppbarMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const AppbarItems = styled.li`
	height: 80px;
`;

export const AppbarLinks = styled(NLinkR)`
	color: #1f2041;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	cursor: pointer;
	height: 100%;
	transition: all 0.2s ease-in-out;
	font-weight: 700;
	text-transform: capitalize;

	&:hover {
		color: #1976d2;
		transition: all 0.2s ease-in-out;
	}

	&.active {
		color: #1976d2;
		transition: all 0.2s ease-in-out;
	}
`;

export const AppbarBtn = styled.div`
	display: flex;
	align-items: center;
	margin-left: 15px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
