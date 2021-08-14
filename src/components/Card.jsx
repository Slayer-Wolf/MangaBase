import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
	root: {
		maxWidth: 300,
		width: 200,
		borderRadius: 16,
	},
});

export default function MediaCard() {
	const classes = useStyles();
	return (
		<div className="main">
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						height="100"
						width="50"
						component="img"
						alt="naruto"
						image="https://picsum.photos/200"
						title="anime"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							NAME
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							Content
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}
