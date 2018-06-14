import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Container from './experiment/components/Container';

class App extends Component {
  render() {
    return (
      <div>
      <AppBar><Typography variant="display1">Lerne Sagas</Typography></AppBar>
      <Container />
      </div>
    );
  }
}

export default App;
