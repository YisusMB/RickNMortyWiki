import React, { Component } from 'react'
import { Flex } from 'reflexbox'

import Loader from "../../components/Loader"
import CharacterContainer from '../../components/controlled/CharacterContainer'
import WelcomeHeader from '../../components/WelcomeHeader'

class LandingPage extends Component {
  state = {
    loading: false,
    anything: [],
    promptMessage: '',
    url: 'https://rickandmortyapi.com/api/character/'
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
    console.log(anything);
    return (
      <div>
      <Flex wrap align='center' w={1} >
        {this.state.loading === true ? (
          <Loader/>
        ) : (
          <div>
            <WelcomeHeader />
          </div>
          && anything.map(characterData => (
            <CharacterContainer data={characterData}/>
        ))
        )}
      </Flex>
      </div>
    )
  }
}

export default LandingPage