import React, { Component } from 'react'
import { Divider, List, ListItem, Paper } from "@material-ui/core";
import { Text } from "grommet";
import { Box } from "reflexbox";
import { withStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const styles = theme => ({
  root: {
    backgroundColor: 'rgb(23,24,28)'
  },
  divider: {
    backgroundColor: 'rgba(38, 36, 31, 0.87)'
  }
});

class CharacterContainer extends Component {
  render(){
    const { classes } = this.props;
    const { charactersData, index } = this.props.data;
    return (
      <Box key={`key_${charactersData.id}`} className={`BoxCharacter_${charactersData.id}`} w={[ 1, 1/2, 1/4 ]} p={1}>
        <div>
          <div style={{ border: '1px solid rgba(38, 36, 31, 0.87)', borderRadius: '16px' }}>
            <img style={{ margin: 'auto', maxWidth: '100%' }} alt={`character_${charactersData.name}`} src={charactersData.image}/>
            <List>
              <ListItem key={`idCharacter_${index}`}><Text color='rgba(232, 231, 227, 0.87)'>{`Id: ${charactersData.id}`}</Text></ListItem><Divider className={classes.divider}/>
              <ListItem key={`characterName_${index}`}><Text color='rgba(232, 231, 227, 0.87)'>{`Nombre: ${charactersData.name}`}</Text></ListItem><Divider className={classes.divider}/>
              <ListItem key={`characterOrigin_${index}`}><Text color='rgba(232, 231, 227, 0.87)'>{`Origen: ${(charactersData.origin.name === 'unknown' ? 'Desconocido' : charactersData.origin.name)}`}</Text></ListItem><Divider className={classes.divider}/>
              <ListItem key={`characterSpecies_${index}`}><Text color='rgba(232, 231, 227, 0.87)'>{`Especie: ${(charactersData.species === 'unknown' ? 'Desconocido' : charactersData.species)}`}</Text></ListItem><Divider className={classes.divider}/>
              <ListItem key={`characterStatus_${index}`}><Text color='rgba(232, 231, 227, 0.87)'>{`Estatus: ${(charactersData.status === 'unknown' ? 'Desconocido' : charactersData.status)}`}</Text></ListItem><Divider className={classes.divider}/>
              <Link style={{ textDecoration: 'none' }} to={`character/${charactersData.id}`}><ListItem  key={`characterSpecies_${index}`}><Text color='rgba(232, 231, 227, 0.87)'>{`Mas informacion`}</Text></ListItem></Link>
            </List>
          </div>
        </div>
      </Box>
    )
  }
}

export default withStyles(styles)(CharacterContainer)