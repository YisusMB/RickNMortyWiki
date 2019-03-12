import React, { Component } from 'react'
import { Divider, List, ListItem, Paper } from "@material-ui/core";
import Text from "./TextControlled";
import { Box } from "reflexbox";

class CharacterContainer extends Component {
  render(){
    const { charactersData, index } = this.props.data;
    return (
      <Box key={`key_${charactersData.id}`} className={`BoxCharacter_${charactersData.id}`} w={[ 1, 1/2 ]} p={1}>
        <Paper>
          <div>
            <img alt={`character_${charactersData.name}`} src={charactersData.image}/>
            <List>
              <Divider/>
              <ListItem key={`idCharacter_${index}`}><Text content={`Id: ${charactersData.id}`}/></ListItem><Divider />
              <ListItem key={`characterName_${index}`}><Text content={`Nombre: ${charactersData.name}`}/></ListItem><Divider />
              <ListItem key={`characterOrigin_${index}`}><Text content={`Origen: ${(charactersData.origin.name === 'unknown' ? 'Desconocido' : charactersData.origin.name)}`}/></ListItem><Divider />
              <ListItem key={`characterSpecies_${index}`}><Text content={`Especie: ${(charactersData.species === 'unknown' ? 'Desconocido' : charactersData.species)}`}/></ListItem><Divider />
              <ListItem key={`characterStatus_${index}`}><Text content={`Estatus: ${(charactersData.status === 'unknown' ? 'Desconocido' : charactersData.status)}`}/></ListItem>
            </List>
          </div>
        </Paper>
      </Box>
    )
  }
}

export default CharacterContainer