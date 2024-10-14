import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { grey, blue } from '@mui/material/colors';

import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import NotesIcon from '@mui/icons-material/Notes';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const ThemeAppBar = styled(AppBar)(({ theme, isDarkMode }) => ({
	color: isDarkMode ? theme.palette.getContrastText(grey[900]) : theme.palette.getContrastText(blue[800]),
	backgroundColor: isDarkMode ? grey[900] : blue[800],
}));

const ThemeDrawerContent = styled(Box)(({ theme, isDarkMode }) => ({
	color: isDarkMode ? theme.palette.getContrastText(grey[900]) : theme.palette.getContrastText(grey[200]),
	backgroundColor: isDarkMode ? grey[900] : grey[200],
}));

export default function PersistentDrawer({ isDarkMode }) {
	const [drawerOpen, setDrawerOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};

	const drawer = (
		<ThemeDrawerContent onClick={handleDrawerToggle} isDarkMode={isDarkMode} sx={{ textAlign: 'center' }}>
			<List
				style={{
					marginTop: "60px"
				}}
				sx={{
					'& li.MuiListItem-root .MuiButtonBase-root .MuiListItemIcon-root': {
						color: isDarkMode ? '#fff' : 'rgba(0, 0, 0, 0.54)'
					},
					'& li.MuiListItem-root a': {
						color: isDarkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)'
					},
				}}
			>
				<ListItem key="Save" disablePadding>
					<ListItemButton sx={{
						textAlign: 'left'
					}}>
						<ListItemIcon>
							<DescriptionIcon />
						</ListItemIcon>
						<ListItemText primary="Save" />
					</ListItemButton>
				</ListItem>
				<ListItem key="Export to HTML" disablePadding>
					<ListItemButton sx={{ textAlign: 'left' }}>
						<ListItemIcon>
							<CodeIcon />
						</ListItemIcon>
						<ListItemText primary="Export to HTML" />
					</ListItemButton>
				</ListItem>
				<ListItem key="Export to Word" disablePadding>
					<ListItemButton sx={{ textAlign: 'left' }}>
						<ListItemIcon>
							<MicrosoftIcon />
						</ListItemIcon>
						<ListItemText primary="Export to Word" />
					</ListItemButton>
				</ListItem>
				<ListItem key="Export to PDF" disablePadding>
					<ListItemButton sx={{ textAlign: 'left' }}>
						<ListItemIcon>
							<PictureAsPdfIcon />
						</ListItemIcon>
						<ListItemText primary="Export to PDF" />
					</ListItemButton>
				</ListItem>
				<Divider />
				<ListItem key="Editor" disablePadding>
					<NavLink to="/"
						style={{
							textDecoration: 'none',
							display: 'contents'
						}}
					>
						<ListItemButton sx={{ textAlign: 'left' }}>
							<ListItemIcon>
								<NotesIcon />
							</ListItemIcon>
							<ListItemText primary="Editor" />
						</ListItemButton>
					</NavLink>
				</ListItem>

				<ListItem key="Find" disablePadding>
					<ListItemButton sx={{ textAlign: 'left' }}>
						<ListItemIcon>
							<SearchIcon />
						</ListItemIcon>
						<ListItemText primary="Find" />
					</ListItemButton>
				</ListItem>

				<ListItem key="Settings" disablePadding>
					<NavLink to="/settings"
						style={{
							textDecoration: 'none',
							display: 'contents'
						}}
					>
						<ListItemButton sx={{ textAlign: 'left' }}>
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText primary="Settings" />
						</ListItemButton>
					</NavLink>
				</ListItem>

			</List>
		</ThemeDrawerContent>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<ThemeAppBar isDarkMode={isDarkMode} position="fixed">
				<Toolbar variant="dense">
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Menu
					</Typography>
				</Toolbar>
			</ThemeAppBar>

			<Drawer
				open={drawerOpen}
				style={{
					zIndex: "1"
				}}
				sx={{
					'& .MuiDrawer-paper': {
						backgroundColor: isDarkMode ? grey[900] : grey[200],
						boxSizing: 'border-box',
						width: drawerWidth,
					},
				}}
			>
				{drawer}
			</Drawer>

		</Box>
	);
}