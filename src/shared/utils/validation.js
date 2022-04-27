import * as yup from 'yup';

export const emptyServices = {
	selectServices: '',
	serviceDescription: '',
};

export const emptyRequirements = {
	addSkills: '',
	skillExperience: '',
	highestDegree: '',
	qualification: '',
	expInYears: '',
	certOrAwards: '',
	inWhichYear: '',
};

export const FORM_INIT = {
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

	services: [emptyServices],

	// requirements: [emptyRequirements],
};

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const USER_PROFILE_VALIDATION_SCHEMA = yup.object({
	firstName: yup.string().required('Please enter first name'),
	lastName: yup.string().required('Please enter last name'),
	gender: yup.string().required('Please select your gender'),
	dateOfBirth: yup.date().required('Please enter your date of birth'),

	mobileNumber: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.min(10, 'Mobile number must be at least 10 characters')
		.max(10, 'Mobile number must be at least 10 characters')
		.required('Please enter your Mobile Number'),

	emailId: yup
		.string()
		.email('Please enter a valid email address')
		.required('Please enter your email address'),

	state: yup.string().required('Please select your state'),

	city: yup.string().required('Please select your city'),

	pincode: yup
		.number()
		.integer('Please enter a valid code')
		.min(6, 'Please enter a valid pincode')
		.required('Please enter your pincode'),
});

// export const SERVICES_VALIDATION = yup.object({
// 	services: yup.array(
// 		yup.object({
// 			services: yup.string().required('Please select your Interested services '),
// 		})
// 	),
// });

export const SERVICES_VALIDATION = yup.object({
	services: yup.array().of(yup.string()).min(3, 'Please Select atleast 3 Interested services'),
});

export const REQ_FORM_VALIDATION = yup.object({
	requirements: yup.array(
		yup.object({
			addSkills: yup.string().required('Skill Required'),
			skillExperience: yup.string().required('Skill Experience Required'),
			highestDegree: yup.string().required('select your highest degree'),
			qualification: yup.string().required('Qualification Required'),
			expInYears: yup.string().required('Experience in years Required'),
			certOrAwards: yup.string().required('Certificate or Awards Required'),
			inWhichYear: yup.string().required('Year of received required'),
			// certificateFile: yup.mixed().required('Provide us a certificate'),
		})
	),
});
