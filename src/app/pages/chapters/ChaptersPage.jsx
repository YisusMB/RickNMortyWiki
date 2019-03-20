import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { KeyboardArrowRight as NextIcon, KeyboardArrowLeft as PrevIcon } from '@material-ui/icons'
import {Box, Flex} from 'reflexbox'
import { chaptersPageCreators } from "./duck";
import WelcomeHeader from "../../components/WelcomeHeader";
import Loader from "../../components/Loader";
import EpisodeContainer from "../../components/Controlled/EpisodeContainer";

const state = state => ({
  chapters: state.chaptersPage.chapters,
  error: state.chaptersPage.error,
  loading: state.chaptersPage.loading,
  success: state.chaptersPage.success
});

const dispatch = {
  getChapters: chaptersPageCreators.fetchChapters,
  getNextPage: chaptersPageCreators.fetchNextPage
};
const INITIAL_STATE = {
  chapters: [],
  loading: true
};

@connect(state, dispatch)
class ChaptersPage extends Component {
  state = INITIAL_STATE;

  componentDidMount(){
    this.props.getChapters();
  }
  render() {
    const { loading, chapters } = this.props;
    return (
      loading === true ? (<Loader />) : (
        <Flex w={1} p={1} align='center' wrap>
          <Flex w={1} p={1} align='center' wrap>
            <Box w={1}>
              <WelcomeHeader PageTitle={`Let's check out some episodes Morty!`} />
            </Box>
          </Flex>
          <Flex wrap w={1} p={1}>
            {chapters.results.map((episodesData, index) => (
              <EpisodeContainer data={{episodesData, index}}/>
            ))}
          </Flex>
          <Flex wrap align='center' w={1} p={1}>
            <Box w={1}>
              <Button variant='outlined' color='primary' disabled={chapters.info.prev === ''} onClick={()=>(this.props.getNextPage(chapters.info.prev))} style={{ margin: '1vh' }}><PrevIcon/> Prev</Button>
              <Button variant='outlined' color='primary' disabled={chapters.info.next === ''} onClick={()=>(this.props.getNextPage(chapters.info.next))} style={{ margin: '1vh' }}>Next <NextIcon/></Button>
            </Box>
          </Flex>
        </Flex>
      )
    )
  }
}

export default ChaptersPage