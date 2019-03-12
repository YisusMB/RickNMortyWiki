import React, { Component } from 'react'
import { Text } from 'grommet'

class TextControlled extends Component {
  render() {
    const { content, padding, margin, needStyle } = this.props;
    return (
      needStyle ? (
      <div style={padding === undefined ? {} : padding ? padding : {}}>
        <Text
          margin={margin === undefined ? {} : margin ? margin : {}}
        >
          {content}
        </Text>
      </div>
      ) : (
        <Text>
          {content}
        </Text>
      )
    )
  }
}

export default TextControlled