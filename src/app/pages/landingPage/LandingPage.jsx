import React, { Component } from 'react'
import { connect } from 'react-redux'
import { landingPageCreators } from './duck'
import { withStyles } from "@material-ui/core/styles";

import { Flex, Box } from 'reflexbox'
import { Text } from "grommet";
import { Paper } from '@material-ui/core'

import Loader from "../../components/Loader"
import CharacterContainer from '../../components/Controlled/CharacterContainer'
import WelcomeHeader from '../../components/WelcomeHeader'
import EpisodeContainer from "../../components/Controlled/EpisodeContainer"

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    backgroundColor: 'rgb(23,24,28)'
  },
});

const state = state => ({
  characters: state.landingPage.characters,
  chapters: state.landingPage.chapters,
  error: state.landingPage.error,
  loading: state.landingPage.loading
});

const dispatch = {
  getData: landingPageCreators.fetchData
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
    this.props.getData();
  };

  render() {
    const { chapters, characters, loading, classes } = this.props;

    return (
      loading === true ? (
        <Loader/>
      ) : (
        <Flex wrap align='center' w={1} >
          <Flex wrap align='center' w={1}>
            <Box w={1}>
              <WelcomeHeader PageTitle='Wanna get schwifty?' />
            </Box>
          </Flex>
          <Flex wrap align='baseline' w={1}>
            <Flex wrap w={[1, 1/2]}>
            <Box w={1} p={1}>
              <Paper className={classes.root}>
                <div style={{ padding: '10px' }}><Text color='rgba(232, 231, 227, 0.87)'>CHECK OUT CHAPTERS</Text></div>
              </Paper>
            </Box>
            {chapters.results.map((episodesData, index) => (
              <EpisodeContainer data={{episodesData, index}}/>
            ))}
            </Flex>
            <Flex wrap w={[1, 1/2]}>
              <Box w={1} p={1}>
                <Paper className={classes.root}>
                  <div style={{ padding: '10px' }}><Text color='rgba(232, 231, 227, 0.87)'>CHECK OUT CHARACTERS</Text></div>
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

export default withStyles(styles)(LandingPage)