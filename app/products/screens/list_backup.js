import React, { Component } from 'react'
import {
  Container, Text, Content, List,
  ListItem, Fab, Body, Right,
  Form, Item, Input, Icon
} from 'native-base';
import { Button, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allProducts } from '../actions'

class ProductsList extends Component {

  componentDidMount() {
    this.props.dispatch(allProducts())
  }

  handleCreate(){
    this.props.navigation.navigate('ProductsCreate')
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List>
            {this.props.products.results.map((item, index) => (
              <ListItem key={index} >
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>{item.address}</Text>
                </Body>
              </ListItem>
            ))}
          </List>
        </Content>

        <Fab onPress={()=> this.handleCreate()} >
          <Icon name="add" />
        </Fab>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer
  }
}

export default connect(mapStateToProps)(ProductsList);

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
