import React, { Component } from 'react'

class WelcomeHeader extends Component {
  render(){
    const { PageTitle } = this.props
    return (
      <div>
      <h1 style={{ color: '#e8e7e3'}}>{PageTitle}</h1>
      </div>
    )
  }
}

export default WelcomeHeader