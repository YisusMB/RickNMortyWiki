import React, { Component } from 'react'
import { Divider, List, ListItem, Paper } from "@material-ui/core";
import { Link } from 'react-router-dom'
import { Text } from "grommet";
import { Box } from "reflexbox";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    backgroundColor: 'rgb(23,24,28)'
  },
  divider: {
    backgroundColor: 'rgba(38, 36, 31, 0.87)'
  }
});

class EpisodeContainer extends Component {
  render(){
    const { classes } = this.props;
    const { episodesData, index } = this.props.data;
    return (
      <Box key={`key_${episodesData.id}`} className={`BoxCharacter_${episodesData.id}`} w={[ 1, 1/2 ]} p={1}>
        <Paper className={classes.root}>
          <div>
            <List>
              <ListItem style={{ maxWidth: '100%' }} key={`idCharacter_${index}`}><Text color='rgba(232, 231, 227, 0.87)'>{`Nombre: ${episodesData.name}`}</Text></ListItem><Divider className={classes.divider}/>
              <ListItem style={{ maxWidth: '100%' }} key={`characterName_${index}`}><Text color='rgba(232, 231, 227, 0.87)'>{`Episodio: #${episodesData.id}`}</Text></ListItem><Divider className={classes.divider}/>
              <ListItem style={{ maxWidth: '100%' }} key={`characterOrigin_${index}`}><Text color='rgba(232, 231, 227, 0.87)'>{`Se transmitio: ${episodesData.air_date}`}</Text></ListItem><Divider className={classes.divider}/>
              <Link style={{ textDecoration: 'none' }} to={`chapter/${episodesData.id}`}><ListItem  key={`characterSpecies_${index}`}><Text color='rgba(232, 231, 227, 0.87)'>{`Mas informacion`}</Text></ListItem></Link>
            </List>
          </div>
        </Paper>
      </Box>
    )
  }
}

export default withStyles(styles)(EpisodeContainer)