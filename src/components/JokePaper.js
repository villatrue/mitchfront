import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import './App.css'
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
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));



export default function JokePaper() {
  const classes = useStyles();
  const [jokeContent, setJokeContent] = useState([])
  const [randomJoke, setRandomJoke] = useState("")

//   const addToJokes = (bigArray) =>{
//     bigArray.map(joke=>(joke.content))
//     //was hoping to use this to go through everything but its not working out
//   }
  
    const fetchJokes = () =>
        fetch('http://localhost:3000')
        .then(response => response.json())
        .then(obj => {
            obj.map(joke=>{
                setJokeContent(jokeContent =>[...jokeContent,joke.content])
                // debugger
            })
            // debugger
            console.log(jokeContent)
        });

    const displayRandom =(arr)=>{
        const random = arr[Math.floor(Math.random() * arr.length)]
        if (random === ""){
            console.log("fixed that for you")
            random = arr[Math.floor(Math.random() * arr.length)]
        }
        setRandomJoke(random)
    }

    useEffect(() => {
        fetchJokes()
        displayRandom(jokeContent)
    }, [])

    const handleClick = () => {
        displayRandom(jokeContent)
    }



  return (
    <div className={classes.root}>
 
      <Paper className= "paper" elevation={3}> 
        {randomJoke} 
        <br/>
        <Button className= {classes.button} onClick={()=>{handleClick()}}>
            Randomize Joke
        </Button>
        
      </Paper>
      
      {/* make content reflective of obj in the fetch */}
    </div>
  );
}

