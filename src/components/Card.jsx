import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";
import axios from "axios";
const useStyles = makeStyles({
	root: {
		boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
		width: 200,
		margin: 70,
		height: 300,
		borderRadius: 10,
	},

	data: {
		justifyContent: "center",
		fontFamily: "robota",
	},
});

export default function ShowCard(props) {
 const[anime, setAnime] = useState([]);
 //Api
useEffect( () => {
async function asnew() {
  const options = {
  method: 'GET',
  url: 'https://jikan1.p.rapidapi.com/genre/anime/1/1',
  headers: {
    'x-rapidapi-host': 'jikan1.p.rapidapi.com',
    'x-rapidapi-key': 'e76062bcfcmshcb4cb7081fb349cp1ce701jsn7e0574d996b4'
  }
};
await axios.request(options).then(function (response) {
	const ani = response.data;
const slam = ani.anime;
setAnime(slam);
console.log(slam);
}).catch(function (error) {
	console.error(error);
});
}
asnew();
 },[]);
 // End //
const classes = useStyles();
  return (
		anime.map((ele)=>{
      return(
        <div>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						height="150"
						width="70"
						component="img"
						alt={ele.title}						
            image={ele.image_url}
					/>
					<CardContent>
						<CardActions className={classes.data}>
							<Typography
								style={{ width:"100%", justifyContent: "center", fontWeight: "bold" }}
							>
								{ele.title}
							</Typography>
						</CardActions>

						<a className="btn btn-dark link" href={props.link} role="button">
							Watch It
						</a>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
      );


    })
	);
}
