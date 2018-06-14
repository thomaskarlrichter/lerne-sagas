import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
export class Text extends React.Component {
  shouldComponentUpdate(nextProps) {
    // wenn sich props.text verändert wird true zurück gegeben
    return nextProps.text !== this.props.text;
  }
  render() {
    console.log('in text');
    return <Typography variant="caption">{this.props.text}</Typography>;
  }
}
Text.propTypes = {
  text: PropTypes.string,
};
