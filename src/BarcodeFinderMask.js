import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';

class BarcodeFinderMask extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ left: 0, right: 0, bottom: 0, top: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: this.props.width, height: this.props.height }}>
          <View style={styles.topLeftEdge} />
          <View style={styles.topRightEdge} />
          <View style={styles.bottomLeftEdge} />
          <View style={styles.bottomRightEdge} />
        </View>
      </View>
    );
  }
};

const BORDER_COLOR = "rgba(255,255,255,0.6)";
const BORDER_WIDTH = 1;
const WIDTH = 40;
const HEIGHT = 20;

var styles = StyleSheet.create({
  topLeftEdge: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: WIDTH,
    height: HEIGHT,
    borderColor: BORDER_COLOR,
    borderLeftWidth: BORDER_WIDTH,
    borderTopWidth: BORDER_WIDTH,
  },
  topRightEdge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: WIDTH,
    height: HEIGHT,
    borderColor: BORDER_COLOR,
    borderRightWidth: BORDER_WIDTH,
    borderTopWidth: BORDER_WIDTH,
  },
  bottomLeftEdge: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: WIDTH,
    height: HEIGHT,
    borderColor: BORDER_COLOR,
    borderLeftWidth: BORDER_WIDTH,
    borderBottomWidth: BORDER_WIDTH,
  },
  bottomRightEdge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: WIDTH,
    height: HEIGHT,
    borderColor: BORDER_COLOR,
    borderRightWidth: BORDER_WIDTH,
    borderBottomWidth: BORDER_WIDTH,
  },
});

module.exports = BarcodeFinderMask;
