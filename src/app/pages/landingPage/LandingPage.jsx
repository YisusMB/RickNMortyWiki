import React, { Component } from 'react'
import { connect } from 'react-redux'
import { landingPageCreators } from './duck'

import { Flex, Box } from 'reflexbox'
import { Paper } from '@material-ui/core'

import Loader from "../../components/Loader"
import CharacterContainer from '../../components/controlled/CharacterContainer'
import WelcomeHeader from '../../components/WelcomeHeader'
import TextControlled from "../../components/controlled/TextControlled"
import EpisodeContainer from "../../components/controlled/EpisodeContainer"

const state = state => ({
  characters: state.landingPage.characters,
  chapters: state.landingPage.chapters,
  error: state.landingPage.error
});

const dispatch = {
  getChapters: landingPageCreators.fetchChapters,
  getCharacters: landingPageCreators.fetchCharacters,
};

const INITIAL_STATE = {
  characters: [],
  chapters: [],
  loading: true
};

@connect(state, dispatch)
class LandingPage extends Component {
  state = INITIAL_STATE;

  componentDidMount(){
    this.props.getChapters();
    this.props.getCharacters();
  };

  render() {
    const { characters, episodes } = this.state;
    console.log(episodes);
    return (
      this.state.loading === true ? (
        <Loader/>
      ) : (
        <Flex wrap align='center' w={1} >
          <Flex wrap align='center' w={1}>
            <Box w={1}>
              <WelcomeHeader />
            </Box>
          <Flex wrap align='center' w={[1, 1/2]}>
            <Box w={1} p={1}>
              <Paper>
                <TextControlled content='CHECK OUT CHAPTERS'/>
              </Paper>
            </Box>
            {characters.map((index, charactersData) => (
              <CharacterContainer data={{charactersData, index}}/>
            ))}
          </Flex>
          <Flex wrap align='center' w={[1, 1/2]}>
            <Box w={1} p={1}>
              <Paper>
                <TextControlled content='Check out characters'/>
              </Paper>
            </Box>
            {episodes.map((index, episodesData) => (
              <EpisodeContainer data={{episodesData, index}}/>
            ))}
          </Flex>
          </Flex>
        </Flex>
        )
    )
  }
}

export default LandingPage