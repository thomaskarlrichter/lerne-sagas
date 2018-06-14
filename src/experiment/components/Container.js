import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text } from './Text';
import { Zahl } from './Zahl';

class Container extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.props.dispatch({ type: 'TEXT' });
            }}
          >
            Text
          </button>
          <button
            onClick={() => {
              this.props.dispatch({ type: 'ZAHL' });
            }}
          >
            Zahl
          </button>
        </div>
        <Zahl zahl={this.props.zahl} />
        <Text text={this.props.text} />
      </div>
    );
  }
}
Container.propTypes = {
  dispatch: PropTypes.func,
  text: PropTypes.string,
  zahl: PropTypes.number,
};

const mapStateToProps = state => ({ text: state.experiment.text, zahl: state.experiment.zahl });

export default connect(mapStateToProps)(Container);
