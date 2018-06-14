import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text } from './Text';
import { Zahl } from './Zahl';

class Container extends React.Component {
  render() {
    return (
      <div style={{paddingTop: "2em"}}>
        <div>
          <Button variant="raised"
            onClick={() => {
              this.props.dispatch({ type: 'TEXT' });
            }}
          >
            Text
          </Button>
          <Button variant="secondary"
            onClick={() => {
              this.props.dispatch({ type: 'ZAHL' });
            }}
          >
            Zahl
          </Button>
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
