import React from 'react';
import { ListItem, Body, Text } from 'native-base';

export default (props) => {
  return (
    <ListItem >
      <Body>
        <Text>{props.item.name}</Text>
        <Text note>{props.item.address}</Text>
      </Body>
    </ListItem>
  )
}