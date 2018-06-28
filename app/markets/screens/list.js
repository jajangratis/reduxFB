import React, { Component } from 'react'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { View , Image , StyleSheet , FlatList , Text} from 'react-native'
import {List,ListItem,Left,Body,Container,Content,Spinner,Button,Item,Icon} from 'native-base'
import {connect} from 'react-redux'

import { allmarkets } from '../actions'

class MarketsList extends Component {

    componentDidMount(){
        this._getMarkets()
    }

    _getMarkets = () => {
        this.props.dispatch(allmarkets())
    }

  render() {
    return (
      <Container>
          <Content>
              {this.props.datareducer.isLoading ? (<Spinner/>) : (
                  <List>
                        <ListItem>
                            <FlatList
                                data={[
                                    { id: 1, name: 'You', icon: 'md-person' },
                                    { id: 2, name: 'Saved', icon: 'star' },
                                    { id: 3, name: 'Categories', icon: 'menu' },
                                    { id: 4, name: 'Search', icon: 'search' }
                                ]}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <Button transparent>
                                        <Item rounded style={{ margin: 10,width:110,justifyContent:'center' }}>
                                            <Icon name={item.icon} />
                                            <Text>{item.name}</Text>
                                        </Item>
                                    </Button>
                                }
                                horizontal
                            />
                        </ListItem>
                        <ListItem itemDivider/>
                        <ListItem>
                            <Text>Top Picks</Text>
                        </ListItem>
                        <ListItem>
                            <FlatList
                                data={this.props.datareducer.results}
                                numColumns={2}
                                renderItem={(get) =>
                                    <Item>
                                        <Image source={{ uri: get.item.pic }} style={{ width: 150, height: 150 }} />
                                    </Item>
                                } />
                        </ListItem>
                  </List>
              )}
          </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state)=>({
    datareducer : state.marketsreqReducer,
})

export default connect(mapStateToProps)(MarketsList)
