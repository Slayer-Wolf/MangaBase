import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { makeStyles, Typography } from "@material-ui/core";
import Tool from './components/Tool';

const useStyles = makeStyles({
	name: {
		fontSize: 50,
	},
});

const headingFont = createTheme({
	typography: {
		fontFamily: ["Josefin Sans", "sans-serif"].join(","),
	},
});

export default function NavBar() {
	const classes = useStyles();
	return (
		<div>
			<AppBar position="relative">
				<Toolbar>
					<ThemeProvider theme={headingFont}>
						<Typography variant="h4" gutterbottom classname={classes.name}>
							mangaKap
						</Typography>
						<Tool/>
					</ThemeProvider>
				</Toolbar>
			</AppBar>
		</div>
	);
}
