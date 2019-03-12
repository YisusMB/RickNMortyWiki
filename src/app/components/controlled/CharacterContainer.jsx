import React, { Component } from 'react'
import { Divider, List, ListItem, Paper } from "@material-ui/core";
import Text from "./TextControlled";
import { Box } from "reflexbox";

class CharacterContainer extends Component {
  render(){
    const { data } = this.props;
    return (
      <Box key={`key_${data.id}`} className={`BoxCharacter_${data.id}`} w={[ 1, 1/2, 1/4 ]} p={1}>
        <Paper>
          <div>
            <List>
              <ListItem><img style={{ display: 'block', maxWidth: '100%' }} alt={`character_${data.name}`} src={data.image}/></ListItem><Divider/>
              <ListItem><Text content={`Id: ${data.id}`}/></ListItem><Divider />
              <ListItem><Text content={`Nombre: ${data.name}`}/></ListItem><Divider />
              <ListItem><Text content={`Origen: ${(data.origin.name === 'unknown' ? 'Desconocido' : data.origin.name)}`}/></ListItem><Divider />
              <ListItem><Text content={`Especie: ${(data.species === 'unknown' ? 'Desconocido' : data.species)}`}/></ListItem><Divider />
              <ListItem><Text content={`Estatus: ${(data.status === 'unknown' ? 'Desconocido' : data.status)}`}/></ListItem>
            </List>
          </div>
        </Paper>
      </Box>
    )
  }
}

export default CharacterContainer