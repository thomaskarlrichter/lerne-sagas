import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Text from './Text';
import Zahl from './Zahl';

const styles = theme => ({
  buttons: {
    margin: '2em'
  },
  button: {
    '&:hover': {
      background: 'pink'
    },
    background: '#aeaaff',
    margin: '0.3em'
  }
});

class Container extends React.Component {
  render() {
    const { classes, dispatch, zahl, text } = this.props;
    return (
      <div style={{paddingTop: "2em"}}>
        <div className={classes.buttons}>
          <Button className={classes.button} variant="raised"
            onClick={() => {
              dispatch({ type: 'TEXT' });
            }}
          >
            Text
          </Button>
          <Button className={classes.button} variant="outlined"
            onClick={() => {
              dispatch({ type: 'ZAHL' });
            }}
          >
            Zahl
          </Button>
        </div>
        <Zahl zahl={zahl} />
        <Text text={text} />
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

export default connect(mapStateToProps)(withStyles(styles)(Container));
