import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      display: 'flex',
      flexWrap: 'wrap',
      margin: "5px",
      flexDirection: "column",
      // width: theme.spacing(100),
      // height: theme.spacing(30),
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(100),
        height: theme.spacing(20),
      },
    },
    p: {
      fontFamily: "Courier New, Courier, monospace"
    },
  }));
  
  
  
  export default function JokePaper() {
    const classes = useStyles();
   
  //   const addToJokes = (bigArray) =>{
  //     bigArray.map(joke=>(joke.content))
  //     //was hoping to use this to go through everything but its not working out
  //   }
    

  
  
  
    return (
      <div className={classes.root}>
   
        <Paper className= "paper" elevation={3}> 
          <p className={classes.p}>
            I built this project as a tribute to Mitch Hedgeberg and to all victims of addiction. I used a nokogiri to scrape all of his top jokes from a buzzfeed article.
            For the front end I used React.JS and Material UI and used hooks with the Use Styles library to style my code.
            This is a pet project and thanks for checking it out!
          </p>
        </Paper>
        
        {/* make content reflective of obj in the fetch */}
      </div>
    );
  }