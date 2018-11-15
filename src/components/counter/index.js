import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Counter extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    error: PropTypes.string,

    fontSize: PropTypes.number,

    baseColor: PropTypes.string.isRequired,
    errorColor: PropTypes.string.isRequired,

    style: Text.propTypes.style,
  };

  render() {
    let {
      count,
      min,
      max,
      error,
      baseColor,
      errorColor,
      fontSize,
      style,
    } = this.props;

    let textStyle = {
      color: (count > max || count < min) && error ? errorColor : baseColor,
      fontSize,
    };

    if (!(min || max)) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={[styles.text, style, textStyle]}>
          {count} / {max ? max : min}
        </Text>
      </View>
    );
  }
}
