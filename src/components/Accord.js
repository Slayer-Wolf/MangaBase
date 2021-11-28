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
						That's for you to find out and me to know if you already found it
						out.
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
						Just a Front-end developer and money maker through my skills
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography className={classes.heading}>WHat i Want?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Nothing more than an a just a simple developer job in your company
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
