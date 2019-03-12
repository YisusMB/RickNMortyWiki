import React, { Component } from 'react'
import Text from "./controlled/TextControlled";
import { CircularProgress, Paper } from "@material-ui/core";

class Loader extends Component {
  render() {
    return (
      <Paper style={{ display: 'block', margin: 'auto', width: '80vh', paddingBottom: '15px'}}>
        <p><Text style={{ align: 'center' }} content={`Cargando...`} /></p>
        <CircularProgress className='class123' />
      </Paper>
    )
  }
}

export default Loader