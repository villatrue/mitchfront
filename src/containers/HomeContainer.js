import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from '../components/Header'
import JokePaper from '../components/JokePaper'

export default function HomeContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        <Header></Header>
        <JokePaper></JokePaper>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        
      </Container>
    </React.Fragment>
  );
}
