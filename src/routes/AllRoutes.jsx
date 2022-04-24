import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Footer from '../components/UI/Footer/Footer';
import Appbar from '../components/UI/Naviagtion/Appbar';
import Authentication from '../pages/Authentication/Authentication';
import ScrollToTop from '../hoc/ScrollToTop/ScrollToTop';
import PrivateRoute from './PrivateRoute';
import ProfileRegistration from '../pages/ProfileRegistration/ProfileRegistration';

const AllRoutes = () => {
	return (
		<>
			<ScrollToTop>
				{/* <Appbar /> */}
				<Routes>
					<Route path='/' element={<h1>REACT</h1>} />
					<Route path='/profile-registration' element={<ProfileRegistration />} />

					<Route path='/login' element={<Authentication />} />
				</Routes>
				<Footer />
			</ScrollToTop>
		</>
	);
};

export default AllRoutes;
