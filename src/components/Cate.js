// import React, { useState,useEffect} from 'react';
// import Box from '@material-ui/core/Box';
// import CardMedia from '@material-ui/core/CardMedia';
// import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
// import axios from "axios";
// const Cate = () => {

// const [genre, setGenre]= useState([]); 

//  //Api
// useEffect( () => {
// async function getdata() {
//   const options = {
//   method: 'GET',
//   url: 'https://jikan1.p.rapidapi.com/genre/anime/1/1',
//   headers: {
//     'x-rapidapi-host': 'jikan1.p.rapidapi.com',
//     'x-rapidapi-key': 'e76062bcfcmshcb4cb7081fb349cp1ce701jsn7e0574d996b4'
//   }
// };
// await axios.request(options).then(function (response) {
// 	const newData = response.data;
// const slam = newData.anime;
// setGenre(slam);
// console.log(slam);
// }).catch(function (error) {
// 	console.error(error);
// });
// }
// getdata();
//  },[]);
//  // End //

//   const styles = useCoverCardMediaStyles();
  

//   return (
//     genre.map((e)=>{
//       return(  
//           <Box position={'relative'} width={'200'} height={'250'} p={3} marginTop={9} marginLeft={9} >
//       <CardMedia
//         component='img' // add this line to use <img />
//         image={e.image_url}
//         classes={styles}
//       />
//       <Box position={'relative'}>
//         <h3>{e.title}</h3>
//         <p>To show that the image is a </p>
//       </Box>
//     </Box>
//       );})


//   );
// };

// export default Cate;