import React, { Component } from 'react'
import { Paper, ListItem, List, Divider } from "@material-ui/core";
import { Box, Flex } from 'reflexbox'

import Text from '../../components/TextControlled'


class LandingPage extends Component {
  state = {
    loading: false,
    anything: [],
    url: 'https://rickandmortyapi.com/api/character'
  };

  componentDidMount(){
    this.getResults();
  };

  getResults = () => {
    this.setState({
      loading: true
    });
    fetch(this.state.url)
      .then(res=>res.json())
      .then(res=>{
        this.setState({
          anything: res.results,
          loading: false
        })
      })
  };

  render() {
    const { anything } = this.state;
    console.log(anything)
    return (
      <Flex wrap align='center' w={1} p={1}>
        {this.state.loading === true ?
          <Paper>Estoy cargando</Paper>
          : (anything.map(row => (

            <Box className={row.id} w={[ 1, 1/2, 1/4 ]} p={1}>
              <Paper>
                <div>
                  <img alt={`character_${row.name}`} style={{ position: 'relative' }} src={row.image}/>
                </div>
                <div>
                  <List>
                    <ListItem><Text content={`Id: ${row.id}`}/></ListItem><Divider />
                    <ListItem><Text content={`Nombre: ${row.name}`}/></ListItem><Divider />
                    <ListItem><Text content={`Origen: ${row.origin.name}`}/></ListItem><Divider />
                    <ListItem><Text content={`Especie: ${row.species}`}/></ListItem><Divider />
                    <ListItem><Text content={`Estatus: ${row.status}`}/></ListItem>
                  </List>
                </div>
              </Paper>
            </Box>
        )))}
      </Flex>
    )
  }
}

export default LandingPage