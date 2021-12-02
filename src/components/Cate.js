import React from 'react';
import Box from '@material-ui/core/Box';
import  Button  from '@mui/material/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { Typography } from "@material-ui/core";
import genre from "./Genre"
const Cate = () => {

  const styles = useCoverCardMediaStyles();
  return (
    genre.map((e)=>{
      return(
 <Box position={'relative'}  marginTop={9} marginLeft={9}  key={e.id}  marginBottom={5} p={2} >
      <CardMedia
        component='img' // add this line to use <img />
        height="250"
						width="70"
        image={e.image_url}
        classes={styles}
      />
      <Box position={'relative'}  >
        	<Typography
								style={{ width:"auto", justifyContent: "center", fontWeight: "bold" } }>
                <Button color="secondary" variant="contained"> {e.name}</Button>
              </Typography>        
      </Box>
    </Box>
      );
    } )        
      );
};

export default Cate;