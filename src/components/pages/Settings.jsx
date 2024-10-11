import React from 'react';

import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { amber, grey, blue, deepPurple } from '@mui/material/colors';

const ThemeSwitch = styled(Switch)(({ theme, isDarkMode }) => ({
	width: 80,
	height: 40,
	padding: 8,
	'& .MuiSwitch-switchBase': {
		margin: 1,
		padding: 0,
		transform: 'translateX(6px)',
		'&.Mui-checked': {
			color: '#fff',
			transform: 'translateX(40px)',
			'& .MuiSwitch-thumb': {
				backgroundColor: grey[800],
			},
			'& .MuiSwitch-thumb:before': {
				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
					'#fff',
				)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
			},
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor: deepPurple[900],
				border: '0.5px solid #eee',
				backgroundSize: '25px',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: '0px center',
				boxShadow: 'inset rgba(255, 255, 255, 0.5) 8px 10px 10px -10px',
				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="30" width="40" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
					'#fff',
				)}" d="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z"/></svg>')`,
			},
		},
	},
	'& .MuiSwitch-thumb': {
		backgroundColor: amber[300],
		width: 35,
		height: 35,
		'&::before': {
			content: "''",
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
				'#fff',
			)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
		}
	},
	'& .MuiSwitch-track': {
		opacity: 1,
		backgroundColor: blue[400],
		border: '0.5px solid #e0e0e0',
		backgroundSize: '50px',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '18px 5px',
		boxShadow: 'inset rgba(255, 255, 255, 0.5) -10px 10px 10px -10px',
		backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(
			`<svg xmlns="http://www.w3.org/2000/svg" height="25" width="60" viewBox="0 0 20 20">
    <g>
      <g transform="translate(0, 0)">
        <path fill="#fff" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96"/>
      </g>
      <g transform="translate(10, 5)">
        <path fill="#fff" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96"/>
      </g>
    </g>
  </svg>`
		)}')`,
		borderRadius: 20 / 2
	},
}));

const Settings = ({ isDarkMode, toggleTheme }) => {

	return (
		<div
			style={{
				height: '92vh',
				display: 'flex',
				flexDirection: 'column',
				marginTop: '50px',
				backgroundColor: isDarkMode ? '#2d2d2d' : '#faf8f5',
				color: isDarkMode ? '#fff' : grey[900],
			}}
		>
			<h1>This is my Settings view!!!</h1>

			<FormGroup>
				<FormControlLabel
					control={<ThemeSwitch sx={{ m: 1 }} onClick={toggleTheme} />}
				/>
			</FormGroup>
		</div>
	)
}

export default Settings;