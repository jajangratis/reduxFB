import React, { Component } from 'react';
import {Container, Content, Text, List, ListItem, Spinner} from 'native-base'
import {connect} from 'react-redux'


import { allNotifications } from '../actions';

class NotificationList extends Component {
    
    componentDidMount(){
        this.props.dispatch(allNotifications())
    }

    render() {
    return (
      <Container>
        <Content>
            <List>
                {this.props.notifications.map((res,i)=>
                (
                    <ListItem key={i}>
                        <Text>{res.nama}</Text>
                        <Text>{res.notif}</Text>
                    </ListItem>    
                )
                )}
            </List>
        </Content>
      </Container>
    )
  }
};

const mapStateToProps = (state)=>({
    notifications : state.notificationsReducer,
})

export default connect(mapStateToProps)(NotificationList)
