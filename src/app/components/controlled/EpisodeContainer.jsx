import React, { Component } from 'react'
import { Divider, List, ListItem, Paper } from "@material-ui/core";
import Text from "./TextControlled";
import { Box } from "reflexbox";

class EpisodeContainer extends Component {
  render(){
    const { episodesData, index } = this.props.data;
    return (
      <Box key={`key_${episodesData.id}`} className={`BoxCharacter_${episodesData.id}`} w={[ 1, 1/2 ]} p={1}>
        <Paper>
          <div>
            <List>
              <Divider/>
              <ListItem key={`idCharacter_${index}`}><Text content={`Id: ${episodesData.id}`}/></ListItem><Divider />
              <ListItem key={`characterName_${index}`}><Text content={`Nombre: ${episodesData.air_date}`}/></ListItem><Divider />
              <ListItem key={`characterOrigin_${index}`}><Text content={`Origen: ${episodesData.episode}`}/></ListItem><Divider />
              <ListItem key={`characterSpecies_${index}`}><Text content={`Especie: ${episodesData.url}`}/></ListItem><Divider />
              <ListItem key={`characterStatus_${index}`}><Text content={`Estatus: ${episodesData.created}`}/></ListItem>
            </List>
          </div>
        </Paper>
      </Box>
    )
  }
}

export default EpisodeContainer