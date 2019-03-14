import React, { Component } from 'react'
import Text from "./Controlled/TextControlled";
import { CircularProgress, Paper } from "@material-ui/core";

class Loader extends Component {
  render() {
    return (
      <Paper style={{ display: 'block', margin: 'auto', width: '80%', paddingBottom: '15px'}}>
        <p style={{ paddingTop: '1%' }}><Text style={{ align: 'center' }} content={`Cargando...`} /></p>
        <CircularProgress className='class123' />
      </Paper>
    )
  }
}

export default Loader