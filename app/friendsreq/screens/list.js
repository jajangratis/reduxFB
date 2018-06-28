import React, { Component } from 'react'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { View , Image , StyleSheet , FlatList , Text , Dimensions} from 'react-native'
import {List,ListItem,Left,Body,Container,Content,Spinner,Button,Fab,Icon,Badge} from 'native-base'
import {connect} from 'react-redux'
import ActionButton from 'react-native-action-button';

import { allFriendsReq } from '../actions'
import { getmember } from '../../members/actions';

class FriendsReq extends Component {
    constructor(){
        super()
        this.state = {
            active: 'true'
        };
    }

    componentDidMount(){
        this._getTimeline()
    }

    _getTimeline = () => {
        this.props.dispatch(allFriendsReq())
    }


  render() {
    return (
      <Container>
          <Content>
              {this.state.active?(
                        this.props.datareducer.isLoading ? (<Spinner />) : (
                            <List>
                                <FlatList
                                    data={this.props.datareducer.results}
                                    renderItem={(data) =>
                                        <ListItem key={data.item.id}>
                                            <Grid>
                                                <Col size={1}>
                                                    <Image source={{ uri: data.item.pic }} style={{ width: 70, height: 70 }} />
                                                </Col>
                                                <Col size={3}>
                                                    <Row>
                                                        <Text>{data.item.name}</Text>
                                                    </Row>
                                                    <Row>
                                                        <Text>1 Mutual Friend</Text>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <Button style={{ width: '80%', justifyContent: 'center' }}>
                                                                <Text style={{ color: 'white' }}>Confirm</Text>
                                                            </Button>
                                                        </Col>
                                                        <Col>
                                                            <Button light style={{ width: '80%', justifyContent: 'center' }}>
                                                                <Text style={{ textAlign: 'center' }}>Reject</Text>
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Grid>
                                        </ListItem>
                                    }
                                />
                            </List>

                        )
                    
              ):(
                  <Grid style={{backgroundColor:'gray',height:(Dimensions.get('screen').height)-70}}>
                            
                  </Grid>
              )}
                
                <ActionButton buttonColor="#1a58bc" icon={<Icon name='ios-person-add-outline' style={{color:'white'}}/>} bgColor='rgba(200,202,206,0.8)' degrees={0} nativeFeedbackRippleColor>
                    <ActionButton.Item buttonColor='red' title="Search for New Friends" onPress={() => { }}>
                        <Icon name="ios-search-outline" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='orange' title="Friends Suggestions" onPress={() => console.log("notes tapped!")}>
                        <Icon name="ios-people-outline" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='green' title="See All Friends" onPress={() => {this.props.navigation.navigate('memberList')}}>
                        <Icon name="ios-person-outline" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            
          </Content>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 30,
      height: 22,
      color: 'white',
    },
  });

const mapStateToProps = (state)=>({
    datareducer : state.friendsreqReducer,
})

export default connect(mapStateToProps)(FriendsReq)
