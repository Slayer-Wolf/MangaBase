import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
	root: {
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
		width: "100%",
    flexWrap:"wrap" 
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: "bold",
		color: "#10b6d7",
	},
}));

export default function Accord() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>Who Am I</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						My name is Darshan Talwar recently graduated from Icfai university, Jaipur with Btech CS degree in 2021, i have experience with HTML CSS & Javascript as well since i have made few projects based onn these and recently shifted towards javascript framework ReactJS i don't have any official work experience but i made projects by myself for hands on experience and knowledge.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography className={classes.heading}>What i do?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Just a Front-end developer eager to learn and enhance my skills through hard work with a hint of smartness to ease it out.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography className={classes.heading}>What i Want?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						To achieve my goal to be a good front developer and soon to be full stack as well to keep up with all the technology that are best suited for web Devopment 
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
