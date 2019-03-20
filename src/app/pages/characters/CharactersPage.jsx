import React, { Component } from 'react'
import {Button, withStyles} from '@material-ui/core'
import { connect } from 'react-redux'
import WelcomeHeader from "../../components/WelcomeHeader";
import { Flex, Box } from "reflexbox";
import {charactersPageCreators} from "../characters/duck";
import Loader from "../../components/Loader";
import CharacterContainer from "../../components/Controlled/CharacterContainer";
import {KeyboardArrowLeft as PrevIcon, KeyboardArrowRight as NextIcon} from "@material-ui/icons";

const state = state => ({
  characters: state.charactersPage.characters,
  error: state.charactersPage.error,
  loading: state.charactersPage.loading
});

const dispatch = {
  getCharacters: charactersPageCreators.fetchCharacters,
  getNextPage: charactersPageCreators.fetchNextPage
};
const INITIAL_STATE = {
  characters: [],
  loading: true
};

@connect(state, dispatch)
class CharactersPage extends Component {
  state = INITIAL_STATE;

  componentDidMount(){
    this.props.getCharacters();
  }

  render() {
    const { loading, characters } = this.props;
    return (
      loading === true ? (<Loader />) : (
        <Flex w={1} p={1} align='center' wrap>
          <Flex w={1} p={1} align='center' wrap>
            <Box w={1}>
              <WelcomeHeader PageTitle={`Let's check out some episodes Morty!`} />
            </Box>
          </Flex>
          <Flex wrap w={1} p={1}>
            {characters.results.map((charactersData, index) => (
              <CharacterContainer data={{charactersData, index}}/>
            ))}
          </Flex>
          <Flex wrap align='center' w={1} p={1}>
            <Box w={1}>
              <Button variant='outlined' color='primary' disabled={characters.info.prev === ''} onClick={()=>(this.props.getNextPage(characters.info.prev))} style={{ margin: '1vh' }}><PrevIcon/> Prev</Button>
              <Button variant='outlined' color='primary' disabled={characters.info.next === ''} onClick={()=>(this.props.getNextPage(characters.info.next))} style={{ margin: '1vh' }}>Next <NextIcon/></Button>
            </Box>
          </Flex>
        </Flex>
      )
    )
  }
}

export default CharactersPage