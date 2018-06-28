import React, { Component } from 'react';
import { Image }  from 'react-native';
import {Root,ActionSheet,Container, Content, Text, List, ListItem, Spinner,FlatList,Thumbnail,Button,Icon} from 'native-base'
import {connect} from 'react-redux'
import { Col, Row, Grid } from 'react-native-easy-grid'


import { allNotifications } from '../actions';

var BUTTONS = ["Hide","Remove","Cancel"];
var CANCEL_INDEX = 2;
class NotificationList extends Component {
    
    componentDidMount(){
        this._getNotifications()
    }

    _getNotifications = () => {
        this.props.dispatch(allNotifications())
        
    }

    // componentDidMount(){
    //     this.props.dispatch(allNotifications())
    // }

    render() {
    
    const data = this.props.notifications.results
    return (
      <Container>
        <Content>
            {this.props.notifications.isLoading ? (<Spinner/>):(
                <List>
                {data.map(result => 
                    <ListItem>
                        <Grid>
                            <Col size={1}>
                                <Thumbnail source={{ uri: result.member.pic }} style={{ width: 50, height: 50 }} />
                            </Col>
                            <Col size={3}>
                                <Text>{result.member.name} {result.notif_content}</Text>
                            </Col>
                            <Col size={1}>
                                <Button transparent onPress={()=>
                                    ActionSheet.show(
                                        {
                                          options: BUTTONS,
                                          cancelButtonIndex: CANCEL_INDEX,
                                          title: "Olah Notifications"
                                        },
                                        buttonIndex => {
                                          this.setState({ clicked: 
                                            BUTTONS[buttonIndex]=="Hide" ? (alert("This Is Hide Button")):(
                                                BUTTONS[buttonIndex]=="Remove" ? (alert("This Is Remove Button")):(null)
                                            )
                                          });
                                        }
                                      )}
                                    >
                                    <Icon name='ios-more'/>
                                </Button>
                            </Col>
                        </Grid>
                    </ListItem>
                )}
            </List>
            )}
        </Content>
      </Container>
    )
  }
};

const mapStateToProps = (state)=>({
    notifications : state.notifReducer,
})

export default connect(mapStateToProps)(NotificationList)
