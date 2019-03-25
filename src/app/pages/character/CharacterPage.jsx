import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Text} from "grommet";
import {characterPageCreators} from "./duck";
import {connect} from "react-redux";
import {Box, Flex} from "reflexbox";

import WelcomeHeader from '../../components/WelcomeHeader'
import Loader from "../characters/CharactersPage";
import {NewReleases} from "@material-ui/icons";
import Page404 from "../Page404";
import {Divider, List, ListItem, withStyles} from "@material-ui/core";

const styles = theme => ({
  root: {
    backgroundColor: 'rgb(23,24,28)'
  },
  divider: {
    backgroundColor: 'rgba(38, 36, 31, 0.87)'
  }
});

const state = state => ({
  character: state.characterPage.character,
  error: state.characterPage.error,
  loading: state.characterPage.loading
});

const dispatch = {
  getCharacter: characterPageCreators.fetchCharacter,
};
const INITIAL_STATE = {
  character: [],
  loading: true
};

@connect(state, dispatch)
class CharacterPage extends Component {
  state = INITIAL_STATE;

  componentDidMount() {
    this.props.getCharacter(this.props.location.pathname)
  }

  render(){
    const { loading, character, classes } = this.props
    return (
      loading === true ? (<Loader />) : (
        <Flex w={1} p={1} align='center' wrap>
          <Flex w={1} p={1} align='center' wrap>
            <Box w={1}>
              <WelcomeHeader PageTitle={(character.name ? character.name : <NewReleases style={{ fontSize: '100px'}} color='error'/>)} />
            </Box>
          </Flex>
          { character.error ? <Page404 /> : (
            <Flex wrap w={1} p={1}>
              <Flex wrap w={1} p={1}>
                <Box p={1} w={[1, 1/4]}>
                  <img alt='profileImg' src={character.image}/>
                </Box>
                <Box p={1} w={[1, 3/4]}>
                  <div style={{ border: '1px solid rgba(38, 36, 31, 0.87)', borderRadius: '16px' }}>
                  <List>
                    <ListItem key={`idCharacter_`}><Text color='rgba(232, 231, 227, 0.87)'>{`Id: ${character.id}`}</Text></ListItem><Divider className={classes.divider}/>
                    <ListItem key={`characterStatus_`}><Text color='rgba(232, 231, 227, 0.87)'>{`Estatus: ${(character.status === 'unknown' ? 'Desconocido' : character.status)}`}</Text></ListItem><Divider className={classes.divider}/>
                    <ListItem key={`characterSpecies_`}><Text color='rgba(232, 231, 227, 0.87)'>{`Especie: ${(character.species === 'unknown' ? 'Desconocido' : character.species)}`}</Text></ListItem><Divider className={classes.divider}/>
                    <ListItem key={`characterOrigin_`}><Text color='rgba(232, 231, 227, 0.87)'>{`Origen: ${(character.origin.name === 'unknown' ? 'Desconocido' : character.origin.name)}`}</Text></ListItem><Divider className={classes.divider}/>
                    <ListItem key={`currentLocation_`}><Text color='rgba(232, 231, 227, 0.87)'>{`Ultima Ubicacion: ${(character.location.name === 'unknown' ? 'Desconocido' : character.location.name)}`}</Text></ListItem>
                  </List>
                  </div>
                </Box>
              </Flex>
            </Flex>
          )}
        </Flex>
      )
    )
  }
}

export default withStyles(styles)(CharacterPage)