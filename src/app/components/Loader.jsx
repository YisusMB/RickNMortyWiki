import React, { Component } from 'react'
import { Text } from "grommet";
import { CircularProgress, Paper } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    backgroundColor: 'rgb(23,24,28)'
  },
});

class Loader extends Component {
  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.root} style={{ display: 'block', margin: 'auto', width: '80%', paddingBottom: '15px'}}>
        <p style={{ paddingTop: '1%' }}><Text color='rgba(232, 231, 227, 0.87)'>Cargando...</Text></p>
        <CircularProgress className='class123' />
      </Paper>
    )
  }
}

export default withStyles(styles)(Loader)