import React, {useEffect, useState} from 'react';

import {Box, Chip, Container, InputLabel, Paper, Typography} from '@mui/material';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

import {Form, Formik} from 'formik';

import axios from '../../axios-instance';

import PersonalDetails from '../../components/Common/PersonalDetails/PersonalDetails';
import CustomAccordion from '../../components/UI/Accordion/CustomAccordion';
import CustomSelect from '../../components/UI/FormComponents/CustomSelect/CustomSelect';

import {SERVICES_VALIDATION, USER_PROFILE_VALIDATION_SCHEMA} from '../../shared/utils/validation';
import UserProfileUI from '../../components/UI/UserProfileUI/UserProfileUI';
import CRUDButton from '../../components/UI/CRUDButton/CRUDButton';
import FreelancerDetails from '../../components/Common/Freelancer/FreelancerDetails';
import CustomModal from '../../components/UI/Modal/CustomModal';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const serviceItems = [
	'Home Tutor',
	'Gym Trainer',
	'Fitness Trainer',
	'Cricket Coaching',
	'Yoga Coaching',
	'Football Coaching',
	'Basket Coaching',
	'Digital Marketing',
	'Graphic Designer',
];

const freelancerProfile = [
	'Home Tutor',
	'Gym Trainer',
	'Fitness Trainer',
	// 'Cricket Coaching',
	// 'Yoga Coaching',
	// 'Football Coaching',
	// 'Basket Coaching',
];

// FORMIK INITIAL VALUES
const COMMON_DETAILS = {
	firstName: '',
	lastName: '',
	gender: '',
	dateOfBirth: '',
	mobileNumber: '',
	emailId: '',
	state: '',
	city: '',
	pincode: '',
	profileImage: null,
};

const ProfileRegistration = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(null);
	const [isDisabled, setIsDisabled] = useState(false);
	const [commonDetails, setCommonDetails] = useState();

	const [expanded, setExpanded] = React.useState(false);
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	// OPEN and CLOSE MODAL
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	// OPEN and CLOSE MODAL

	useEffect(() => {
		// http://localhost:1337/api/user-profiles/?userProfile="userId"&equalTo="1"&populate=*

		let id = sessionStorage.getItem('userId');
		const profileId = 10;
		const queryParam = `${profileId}?userProfile="userId"&equalTo="${id}"&populate=*`;
		const url = `${backendUrl}/api/user-profiles/10`;

		axios
			.get(url)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				setIsError(error.response.data.error);
			});
	}, []);

	const handleEditCommonDetails = (values) => {
		setIsDisabled(false);
	};

	const handleCommonDetailsData = (values) => {
		setIsLoading(true);

		console.log(values);

		const userProfileData = {
			data: {
				firstName: values.firstName,
				lastName: values.lastName,
				gender: values.gender,
				DOB: values.dateOfBirth,
				phone: values.mobileNumber,
				state: values.state,
				city: values.city,
				pincode: values.pincode,
				email: values.emailId,
				// profilePicture: values.profileImage,
			},
		};

		const url = `${backendUrl}/api/user-profiles`;

		axios
			.post(url, userProfileData)
			.then((response) => {
				setIsLoading(false);
				console.log(response.data);
				setIsDisabled(true);
			})
			.catch((err) => {
				setIsLoading(false);
				setIsError(err.response.data.error);
				setIsDisabled(false);
			});
	};

	return (
		<Container>
			<CustomModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
				<Formik
					initialValues={{
						fservices: '',
					}}
				>
					{({values}) => (
						<Form>
							<UserProfileUI header='Freelancer Details' isSubmit='submit'>
								<Box
									sx={{
										overflowY: 'scroll',
										maxHeight: '460px',
										height: '460px',
									}}
								>
									<FreelancerDetails values={values} />
								</Box>
							</UserProfileUI>
						</Form>
					)}
				</Formik>
			</CustomModal>
			<Box sx={{width: '100%', height: '100%', my: 16}}>
				{/* User Profile Details */}

				<Box sx={{my: 8}}>
					<Formik
						initialValues={COMMON_DETAILS}
						validationSchema={USER_PROFILE_VALIDATION_SCHEMA}
						onSubmit={(values) => handleCommonDetailsData(values)}
					>
						{(formik) => (
							<Form>
								<UserProfileUI header='Personal Details' isSubmit='submit' showShadow={true}>
									<PersonalDetails isDisabled={isDisabled && !!commonDetails} />
								</UserProfileUI>
							</Form>
						)}
					</Formik>
				</Box>

				{/* User Profile Details */}

				{/* Customer Interests */}
				<Box sx={{my: 8}}>
					<Formik
						initialValues={{
							services: [],
						}}
						validationSchema={SERVICES_VALIDATION}
					>
						{({values}) => (
							<Form>
								<UserProfileUI header='Client Profiles' isSubmit='submit' showShadow={true}>
									<InputLabel sx={{fontWeight: 600, color: '#000', mb: 2}}>
										What services are you Interested in?
									</InputLabel>
									<CustomSelect
										name='services'
										label='Services'
										size='small'
										options={serviceItems}
										isMultiple={true}
										formikValue={values.services}
										styles={{
											width: '50%',
											marginRight: '1rem',
										}}
										renderValue={(selected) => (
											<Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
												{selected.map((value) => (
													<Chip key={value} label={value} />
												))}
											</Box>
										)}
									/>
								</UserProfileUI>
							</Form>
						)}
					</Formik>
				</Box>

				{/* Customer Interests */}

				{/* Freelancer Profile */}
				<Box>
					<Paper sx={{boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px', p: 4}}>
						<Box
							sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4}}
						>
							<Box>
								<Typography
									sx={{
										fontSize: '1.4rem',
										fontWeight: 700,
										textTransform: 'uppercase',
										// color: '#02a450',
									}}
								>
									Freelancer Profiles
								</Typography>
							</Box>
							<CRUDButton
								iconComponent={<AddBoxRoundedIcon sx={{mr: 2}} />}
								color='#02A450'
								typoValue='Add New Profile'
								clicked={handleOpen}
							/>
						</Box>
						<Box>
							{freelancerProfile && freelancerProfile.length > 0 ? (
								<>
									{freelancerProfile.map((name, index) => (
										<CustomAccordion
											accordionHeader={name}
											key={name}
											index={index}
											expanded={expanded}
											handleChange={handleChange}
										></CustomAccordion>
									))}
								</>
							) : (
								<Typography sx={{fontWeight: 'bold', textAlign: 'center'}}>
									No Profiles Here!! Create a new one!!
								</Typography>
							)}
						</Box>
					</Paper>
				</Box>
				{/* Freelancer Profile */}
			</Box>
		</Container>
	);
};

export default ProfileRegistration;

/*
<UserProfileUI header='Freelancer Profiles' isSubmit='submit'>
	<Box>
		<Box
			sx={{
				width: '100%',
				mb: 4,
			}}
		>
			<CRUDButton
				iconComponent={<AddBoxRoundedIcon sx={{mr: 2}} />}
				color='#02A450'
				typoValue='Add New Profile'
				isCenter='center'
			/>
		</Box>
		{freelancerProfile && freelancerProfile.length > 0 ? (
			<>
				{freelancerProfile.map((name) => (
					<CustomAccordion accordionHeader={name} key={name} />
				))}
			</>
		) : (
			<Typography sx={{fontWeight: 'bold', textAlign: 'center'}}>
				No Profiles Found, Create a new one!!
			</Typography>
		)}
	</Box>
</UserProfileUI>
*/
