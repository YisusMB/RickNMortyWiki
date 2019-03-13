import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchPageCreators } from './duck'

import { Flex, Box } from 'reflexbox'
import { Paper } from '@material-ui/core'

import Loader from "../../components/Loader"
import CharacterContainer from '../../components/controlled/CharacterContainer'
import WelcomeHeader from '../../components/WelcomeHeader'
import TextControlled from "../../components/controlled/TextControlled"
import EpisodeContainer from "../../components/controlled/EpisodeContainer"

const state = state => ({
  characters: state.searchPage.characters,
  chapters: state.searchPage.chapters,
  error: state.searchPage.error,
  loading: state.searchPage.loading
});

const dispatch = {
  getData: searchPageCreators.fetchData
};

const INITIAL_STATE = {
  characters: [],
  chapters: [],
  loading: true
};

@connect(state, dispatch)
class searchPage extends Component {
  state = INITIAL_STATE;

  componentDidMount(){
    this.props.getData();
  };

  render() {
    const { chapters, characters, loading } = this.props;

    return (
      loading === true ? (
        <Loader/>
      ) : (
        <Flex wrap align='center' w={1} >
          <Flex wrap align='center' w={1}>
            <Box w={1}>
              <WelcomeHeader PageTitle='Wanna search something?' />
            </Box>
          </Flex>
          <Flex wrap align='baseline' w={1}>
            <Flex wrap w={[1, 1/2]}>
              <Box w={1} p={1}>
                <Paper>
                  <TextControlled needStyle padding={{padding: '10px'}} content='CHECK OUT CHAPTERS'/>
                </Paper>
              </Box>
              {chapters.results.map((episodesData, index) => (
                <EpisodeContainer data={{episodesData, index}}/>
              ))}
            </Flex>
            <Flex wrap w={[1, 1/2]}>
              <Box w={1} p={1}>
                <Paper>
                  <TextControlled needStyle padding={{padding: '10px'}} content='CHECK OUT CHARACTERS'/>
                </Paper>
              </Box>
              {characters.results.map((charactersData, index) => (
                <CharacterContainer data={{charactersData, index}}/>
              ))}
            </Flex>
          </Flex>
        </Flex>
      )
    )
  }
}

export default searchPage