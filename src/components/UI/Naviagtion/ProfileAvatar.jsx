import * as React from 'react';

import {Link as RouterLink} from 'react-router-dom';
import {useNavigate} from 'react-router';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import {Logout} from '@mui/icons-material';
import {Typography} from '@mui/material';

function ProfileAvatar(props) {
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = (e) => {
		e.preventDefault();
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('username');
		navigate('/login');
	};

	return (
		<React.Fragment>
			<Box sx={{display: 'flex', alignItems: 'center'}}>
				<IconButton
					onClick={handleClick}
					size='small'
					sx={{ml: 2}}
					aria-controls={open ? 'account-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
				>
					<Avatar
						src={props.profileSrc}
						sx={{width: 45, height: 45, fontWeight: 700, backgroundColor: '#02A450'}}
					>
						{props.name[0].toUpperCase()}
					</Avatar>
				</IconButton>
				<Box mx='0.5rem' textAlign='left'>
					<Typography sx={{fontWeight: 700, textTransform: 'capitalize', fontSize: '1.2rem'}}>
						{props.name}
					</Typography>
					<Typography sx={{fontSize: '0.775rem'}}>General User</Typography>
				</Box>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id='account-menu'
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{horizontal: 'right', vertical: 'top'}}
				anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem component={RouterLink} to='startyourjourney'>
					Register Your Profile
				</MenuItem>
				<Divider />

				<MenuItem onClick={handleLogout}>
					<ListItemIcon>
						<Logout fontSize='small' />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</React.Fragment>
	);
}

export default ProfileAvatar;
