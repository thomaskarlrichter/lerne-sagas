import React from 'react';
import PropTypes from 'prop-types';

export class Zahl extends React.PureComponent {
  render() {
    console.log('in Zahl');
    return <div>{this.props.zahl}</div>;
  }
}
Zahl.propTypes = {
  zahl: PropTypes.number,
};
