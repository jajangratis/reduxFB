import React, { Component } from 'react'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { View , Image , StyleSheet , FlatList , Text , Dimensions} from 'react-native'
import {List,ListItem,Left,Body,Container,Content,Spinner,Button,Fab,Icon,Badge} from 'native-base'
import {connect} from 'react-redux'

import {getmember} from '../actions'
class memberList extends Component {
    componentDidMount(){
        this._getFriends()
    }

    _getFriends = () => {
        this.props.dispatch(getmember())
    }
  render() {
    return (
      <Container>
          {this.props.member.isLoading?(<Spinner/>):(
              <List>
                  <FlatList
                    data={this.props.member.results}
                    renderItem={(data)=>
                        <ListItem key={data.item.id}>
                            <Grid>
                                <Col size={1}>
                                    <Image source={{ uri: data.item.pic }} style={{ width: 70, height: 70 }} />
                                </Col>
                                <Col size={3}>
                                    <Row>
                                        <Col>
                                            <Text>{data.item.name}</Text>
                                        </Col>
                                        <Col>
                                            <Button light style={{ width: '83%',height:'60%',}}>
                                                <Col>
                                                    <Icon name='md-people'/>
                                                </Col>
                                                <Col>
                                                    <Text >Friends</Text>
                                                </Col>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Grid>
                        </ListItem>
                    }
                  />
              </List>
          )}
      </Container>
    )
  }
}

const mapStateToProps = (state)=>({
    member : state.memberReducer
})

export default connect(mapStateToProps)(memberList)
