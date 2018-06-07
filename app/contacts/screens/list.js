import React, { Component } from 'react'
import {
  Container, Text, Content, List,
  ListItem, Fab, Body, Right,
  Form, Input, Icon
} from 'native-base';
import { Button, View, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import axios from 'axios';

import { allContacts } from '../actions';
import Item from '../components/item';

class ContactsList extends Component {

  state = {selected: (new Map(): Map<string, boolean>)};

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.props.dispatch(allContacts());
  }

  handleCreate(){
    this.props.navigation.navigate('ContactsCreate')
  }

  render() {
    return (
      <Container style={styles.container}>
        <FlatList
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          data={this.props.contacts.results}
          renderItem={this._renderItem}
          refreshing={this.props.contacts.isLoading}
          onRefresh={this.getData}
        />
        <Fab onPress={()=> this.handleCreate()} >
          <Icon name="add" />
        </Fab>
      </Container>
    )
  }

  _renderItem = ({item}) => <Item item={item} />

  _keyExtractor = (item, index) => item.id.toString();

}

const mapStateToProps = (state) => {
  return {
    contacts: state.contactsReducer
  }
}

export default connect(mapStateToProps)(ContactsList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
