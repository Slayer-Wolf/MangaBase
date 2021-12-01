import React, { useState,useEffect} from 'react';
import Box from '@material-ui/core/Box';
import  Button  from '@mui/material/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { Typography } from "@material-ui/core";
import axios from "axios";
const Cate = () => {

const [cates, setCates] = useState([]);
 //Api
useEffect( () => {
async function getdata() {
  const options = {
  method: 'GET',
  url: 'https://jikan1.p.rapidapi.com/genre/manga/1/1',
  headers: {
    'x-rapidapi-host': 'jikan1.p.rapidapi.com',
    'x-rapidapi-key': 'e76062bcfcmshcb4cb7081fb349cp1ce701jsn7e0574d996b4'
  }
};
await axios.request(options).then(function (response) {
console.log(response.data.manga)
setCates(response.data.manga)
}).catch(function (error) {
	console.error(error);
});
}
getdata();
 },[]);
 // End //

  const styles = useCoverCardMediaStyles();
  return (
    cates.map((e)=>{
      return(
 <Box position={'relative'}  p={1} marginTop={9} marginLeft={9}  key={e.mal_id}  marginBottom={5} style={{border: "2px solid black"}} >
      <CardMedia

        component='img' // add this line to use <img />
        height="150"
						width="70"
        image={e.image_url}
        classes={styles}
      />
      <Box position={'relative'}  >
        	<Typography
								style={{ width:"auto", justifyContent: "center", fontWeight: "bold", color:"black", padding:'2px' } }>
                <ul className='l1'>
                {e.genres.map((sub)=>{
                  return(
                 <li>
                  <Button variant="outlined" href={sub.mal_url}>{sub.name}</Button>
                  </li>
                  )
                  
                })}
                </ul>
              </Typography>        
      </Box>
    </Box>
      );
    } )        
      );
};

export default Cate;