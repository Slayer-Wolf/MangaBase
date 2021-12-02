import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import StarsIcon from "@material-ui/icons/Stars";
import InfoIcon from "@material-ui/icons/Info";
import { NavLink } from "react-router-dom";
import RoundSocialLink from "./components/Footer";
import Accord from "./components/Accord";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		boxSizing: "border-box",
	},

	appBar: {
		backgroundColor: "#10b6d7",
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		backgroundColor: "#0b9ab6",
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 10,
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "wrap",
	},
	drawerOpen: {
		width: drawerWidth,
		backgroundColor: "#b2beb5",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(0) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(0) + 1,
		},
	},
	toolbar: {
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		justifyContent: "center",
		Width: "100%",
		flexWrap: "wrap",
		padding: 20,
		margin: 50,
    display:"flex"
    
	},
}));

export default function About() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.father}>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							className={clsx(classes.menuButton, {
								[classes.hide]: open,
							})}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap>
							About
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="permanent"
					className={clsx(classes.drawer, {
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					})}
					classes={{
						paper: clsx({
							[classes.drawerOpen]: open,
							[classes.drawerClose]: !open,
						}),
					}}
				>
					<div className={classes.toolbar}>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === "rtl" ? (
								<ChevronRightIcon />
							) : (
								<ChevronLeftIcon />
							)}
						</IconButton>
					</div>
					<Divider />
					<List>
						<ListItem>
							<ListItemIcon>
								<ul className="list">
									<li>
										<NavLink to="/category" exact activeClassName="active">
											<LibraryBooksIcon />
											Category
										</NavLink>
									</li>
									<li>
										<NavLink to="/top" exact activeClassName="active">
											<StarsIcon /> Top
										</NavLink>
									</li>
									<li>
										<NavLink to="/about" exact activeClassName="active">
											<InfoIcon /> About us
										</NavLink>
									</li>
								</ul>
							</ListItemIcon>
							<ListItemText />
						</ListItem>
					</List>
					<Divider />
				</Drawer>
			</div>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Accord />
			</main>
			<div>
				<RoundSocialLink />
			</div>
		</div>
	);
}
