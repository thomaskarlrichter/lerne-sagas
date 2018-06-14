import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

export default class Zahl extends React.PureComponent {
  render() {
    console.log('in Zahl');
    return <Typography variant="body2">{this.props.zahl}</Typography>;
  }
}
Zahl.propTypes = {
  zahl: PropTypes.number,
};
