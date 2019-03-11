import React, { Component } from 'react'
import { Text } from 'grommet'

class TextControlled extends Component {
  render() {
    const { content } = this.props
    return (
      <Text>
        {content}
      </Text>
    )
  }
}

export default TextControlled