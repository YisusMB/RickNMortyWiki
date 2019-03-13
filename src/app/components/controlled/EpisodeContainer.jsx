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
              <ListItem style={{ maxWidth: '100%' }} key={`idCharacter_${index}`}><Text content={`Nombre: ${episodesData.name}`}/></ListItem><Divider />
              <ListItem style={{ maxWidth: '100%' }} key={`characterName_${index}`}><Text content={`Episodio #${episodesData.id}`}/></ListItem><Divider />
              <ListItem style={{ maxWidth: '100%' }} key={`characterOrigin_${index}`}><Text content={`Se transmitio: ${episodesData.air_date}`}/></ListItem><Divider />
              {/*<ListItem style={{ maxWidth: '100%' }} key={`characterSpecies_${index}`}><Text content={`Especie: ${episodesData.url}`}/></ListItem><Divider />*/}
            </List>
          </div>
        </Paper>
      </Box>
    )
  }
}

export default EpisodeContainer