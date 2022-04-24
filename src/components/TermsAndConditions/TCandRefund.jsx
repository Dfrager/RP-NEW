import React from 'react';
import {Box, Tab, Tabs, AppBar, Button} from '@mui/material';
import {useTheme} from '@mui/material/styles';

import TermsAndCondition from './TermsAndCondition';
import RefundPolicy from './RefundPolicy';
import CustomModal from '../UI/Modal/CustomModal';

function TabPanel(props) {
	const {children, value, index, ...others} = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tabpanel-${index}`}
			{...others}
		>
			{value === index && <Box sx={{p: 3}}>{children}</Box>}
		</div>
	);
}

function allyProps(index) {
	return {
		id: `full-width-tabpanel-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

const TCandRefund = ({handleClose}) => {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	// const handleChangeIndex = (index) => {
	// 	setValue(index);
	// };

	return (
		<Box>
			<AppBar position='static' sx={{background: '#AFDCDF'}}>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='secondary'
					textColor='inherit'
					variant='fullWidth'
				>
					<Tab label='Terms and Conditions' {...allyProps(0)} />
					<Tab label='Refund Policies' {...allyProps(1)} />
				</Tabs>
			</AppBar>
			<Box>
				<TabPanel value={value} index={0}>
					<TermsAndCondition />
				</TabPanel>

				<TabPanel value={value} index={1}>
					<RefundPolicy />
				</TabPanel>
			</Box>
			<Box p={2} textAlign='right'>
				<Button
					variant='contained'
					disableRipple
					sx={{
						px: '1rem',
						py: '0.5rem',
						background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
					}}
					onClick={handleClose}
				>
					Agree&Continue
				</Button>
			</Box>
		</Box>
	);
};

export default TCandRefund;
