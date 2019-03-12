import React, { Component } from 'react'
import { Divider, List, ListItem, Paper } from "@material-ui/core";
import Text from "./TextControlled";
import { Box } from "reflexbox";

class CharacterContainer extends Component {
  render(){
    const { data, index } = this.props;
    return (
      <Box key={`key_${data.id}`} className={`BoxCharacter_${data.id}`} w={[ 1, 1/2 ]} p={1}>
        <Paper>
          <div>
            <img alt={`character_${data.name}`} src={data.image}/>
            <List>
              <Divider/>
              <ListItem key={`idCharacter_${index}`}><Text content={`Id: ${data.id}`}/></ListItem><Divider />
              <ListItem key={`characterName_${index}`}><Text content={`Nombre: ${data.name}`}/></ListItem><Divider />
              <ListItem key={`characterOrigin_${index}`}><Text content={`Origen: ${(data.origin.name === 'unknown' ? 'Desconocido' : data.origin.name)}`}/></ListItem><Divider />
              <ListItem key={`characterSpecies_${index}`}><Text content={`Especie: ${(data.species === 'unknown' ? 'Desconocido' : data.species)}`}/></ListItem><Divider />
              <ListItem key={`characterStatus_${index}`}><Text content={`Estatus: ${(data.status === 'unknown' ? 'Desconocido' : data.status)}`}/></ListItem>
            </List>
          </div>
        </Paper>
      </Box>
    )
  }
}

export default CharacterContainer