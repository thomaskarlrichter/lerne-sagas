import React from 'react';
import PropTypes from 'prop-types';
export class Text extends React.Component {
  shouldComponentUpdate(nextProps) {
    // wenn sich props.text verändert wird true zurück gegeben
    return nextProps.text !== this.props.text;
  }
  render() {
    console.log('in text');
    return <div>{this.props.text}</div>;
  }
}
Text.propTypes = {
  text: PropTypes.string,
};
