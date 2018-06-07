/**
 * Sample React Native TodoDetail
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import { View , StyleSheet , Image } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import {Container,  Content, Text, List, ListItem, Spinner, Thumbnail , Icon , Form , Item , Input , Left , Right, Button} from 'native-base'
import {connect} from 'react-redux'

import { allTimeline , getTimeline , deleteTimeline , likepostbyId } from '../actions'

class TimelineDetail extends Component {

    handleDelete(val) {
        this.props.dispatch(deleteTimeline(val))
          .then(res => {
            this.props.dispatch(allTimeline());
          })
          .catch(err => {
            alert('OK Gagal');
          })
      }
    
    
    
    handleLike(id,like){
        this.props.dispatch(likepostbyId(id,like))
        .then(res => {
            this.props.dispatch(allTimeline())
        })
        .catch(err => {
            alert ('error ');
            this.props.dispatch(allTimeline())
        })
    }
    
  render() {
      const res = this.props.timeline.Getdata;
    return (
      <Container>
          <Content>

                <List>
                    <ListItem key={res.id} >
                        <Grid >
                            <Row>
                                <Col size={1}>
                                    <Thumbnail source={res.pic == null ? (require('../../../assets/orca_phone_unknown_contact.png')) : (res.pic)} style={{ width: 50, height: 50 }} />
                                </Col>
                                <Col size={3} >
                                    <Row><Text style>{res.name}</Text></Row>
                                    <Row><Text note>5 Minutes Ago</Text><Icon name='md-people' size={.3} /></Row>
                                </Col>
                                {(res.name === "Trian Afiansyah") ? (
                                    <Col size={1}>
                                        {/* <Button transparent onPress={() => this.handleDelete(res.id)}>
                                            <Text>Delete</Text>
                                        </Button>
                                        <Button transparent onPress={() => this.handleEdit(res.id)} style={{ alignItems: 'center' }}>
                                            <Text>EDIT</Text>
                                        </Button> */}
                                    </Col>
                                ) : (null)}
                            </Row>
                            <Row style={{ margin: "5%" }}>
                                <Text>{res.status}</Text>
                            </Row>
                            <Row>
                                <Col>
                                    <Button iconLeft transparent>
                                        <Text>{res.like}</Text>
                                        <Image source={require('../../../assets/reactions_like_sutro.png')} />
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    <Button transparent >
                                        <Image source={require('../../../assets/orca_ic_like_action_big.png')} style={{ width: 30, height: 30 }} />
                                        <Text style={{ color: 'grey' }}>Like</Text>
                                    </Button>
                                </Col>
                                <Col >
                                    <Button style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }} transparent onPress={() => this.handleGetTimeline(res.id)}>
                                        <Image source={require('../../../assets/sysnotif_message.png')} style={{ width: 20, height: 20 }} />
                                        <Text style={{ color: 'grey' }}>Comments</Text>
                                    </Button>
                                </Col>

                            </Row>
                        </Grid>
                    </ListItem>
                </List>            
          </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state)=>({
    timeline : state.timelineReducer
})

export default connect(mapStateToProps)(TimelineDetail)
