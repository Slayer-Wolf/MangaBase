import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from"@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import axios from "axios";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';

// Breadcrumbs style//
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});
// styling End//

// Card styling //
const useStyles = makeStyles({
	root: {
		boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
		width: 250,
		margin: 50,
		height: 350,
		borderRadius: 10,
    padding:0
	},

	data: {
		justifyContent: "center",
		fontFamily: "robota",
    alignItem:"center",
	},
  cont:{
    padding:5
  },
 rate:{
   display:"flex",
 },
 btn:{
   
   display:"flex",
   display:"relative"

 }
});
// styling end // 

export default function ShowCard() {
const[anime, setAnime] = useState([]);

 //Api //
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
 // APi End // 


const classes = useStyles();  
//  Main Function //
      return(
        anime.map((e)=>{
          return(
            <React.Fragment key={e.mal_id}>
			<Card className={classes.root}  >
				<CardActionArea  >
					<CardMedia 
						className={classes.media}
						height="150"
						component="img"				
            image={e.image_url}
					/>
					<CardContent className={classes.cont} >
						<CardActions className={classes.data}>
							<Typography component="div"
								style={{ justifyContent: "center", fontWeight: "bold" }}>
								{e.title}
							</Typography>
						</CardActions>
             <Typography variant="caption" style={{fontWeight: "bold"}}>Genre:</Typography>
          {e.genres.map((f)=>{                
                return (
                  <React.Fragment key={f.mal_id}>                 
                   <Box 
      sx={{
        display: 'inline-block',
        justifyContent:"left",
        }} >
        <Breadcrumbs>              
              <StyledBreadcrumb component="a" href={f.url} label={f.name} />
              </Breadcrumbs>
   </Box>
   </React.Fragment>)
              })}
              <div className={classes.rate} >
              <Typography variant="caption" style={{fontWeight: "bold"}}> Rating:{e.score}</Typography>
              </div>
              <div className={classes.rate} >
              <Typography variant="caption" style={{fontWeight: "bold"}}> Episodes:{e.episodes}</Typography>
              </div>
					</CardContent>          
				</CardActionArea>
        <div className={classes.btn}>
          <a className="btn btn-dark link" href={e.url} role="button">
							Watch It
						</a>
            </div> 
			</Card>  
		</React.Fragment>
    );})
      );}	

