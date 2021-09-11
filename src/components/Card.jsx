import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
		width: 200,
		margin: 70,
		height: 250,
		borderRadius: 10,
	},

	data: {
		justifyContent: "center",
		fontFamily: "robota",
	},
});

export default function ShowCard(props) {
	const classes = useStyles();
	return (
		<div>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						height="150"
						width="70"
						component="img"
						alt={props.alt}
						image={props.img}
					/>
					<CardContent>
						<CardActions className={classes.data}>
							<Typography
								style={{ justifyContent: "center", fontWeight: "bold" }}
							>
								{props.name}
							</Typography>
						</CardActions>

						<a className="btn btn-dark link" href={props.link} role="button">
							Read it
						</a>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
}
