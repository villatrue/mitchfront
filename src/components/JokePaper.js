import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import './App.css'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(30),
    },
  },
}));

const [jokeContent, setJokeContent] = useState({
    content: ""              
})

const renderLat= ()=>{

    let url = `localhost:3000`
    
  fetch(url)
     .then(response => { 
         if (response.status === 200){
         return response.json()}
     })
     .then(obj => {
         setJokeContent({obj});
         // console.log(obj)
     
         // console.log(waypointDetails)
         // debugger

         // props.attress()

     })
     .catch(function() {
         alert("error");
          
     });

 }

export default function JokePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
 
      <Paper className= "paper" elevation={3}> Content </Paper>
      {/* make content reflective of obj in the fetch */}
    </div>
  );
}