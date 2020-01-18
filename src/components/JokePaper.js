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



export default function JokePaper() {
  const classes = useStyles();
  const [jokeContent, setJokeContent] = useState([])

//   const addToJokes = (bigArray) =>{
//     bigArray.map(joke=>(joke.content))
//     //was hoping to use this to go through everything but its not working out
//   }
  
  const fetchJokes = () =>
        fetch('http://localhost:3000')
        .then(response => response.json())
        .then(obj => {
            obj.map(joke=>{
                setJokeContent([...jokeContent,joke.content])
            })
            debugger
            console.log(jokeContent)
        });

  useEffect(() => {
    fetchJokes()
  }, [])

  const handleClick = () => {
      console.log(jokeContent)
  }



  return (
    <div className={classes.root}>
 
      <Paper className= "paper" elevation={3}> {jokeContent}</Paper>
      <button onClick={()=>{handleClick()}}/>
      {/* make content reflective of obj in the fetch */}
    </div>
  );
}

