import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { Item, Input, Text } from 'native-base';

export default class TextInput extends Component {
  render() {
    const { placeholder, input, meta } = this.props;
    const { touched, error, warning } = meta;
    return (
      <View>
        <Item error={touched && error ? true : false}>
          <Input
            placeholder={placeholder}
            value={input.value}
            onChangeText={(text)=>input.onChange(text)} />
        </Item>
        {touched && error
        ? <Text style={{color: 'red', marginLeft: 20}}>{error}</Text>
        : null}

      </View>
    )
  }
}