/**
 * Sample React Native TodoDetail
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import { View , StyleSheet , Image , TouchableNativeFeedback } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import {Root ,Footer,ActionSheet,Container,  Content, Text, List, ListItem, Spinner, Thumbnail , Icon , Form , Card ,CardItem, Input , Left , Button,FlatList} from 'native-base'
import {connect} from 'react-redux'

import { allTimeline , getTimeline , deleteTimeline , likepostbyId ,getComments , deleteComment , getSingleComment} from '../actions'
import Comments from './comment'

var BUTTONS = ["Delete","Edit","Cancel"];
var CANCEL_INDEX = 2;

class TimelineDetail extends Component {
    constructor(props) {
        super(props);
        this.state={};
        this.actionSheet = null;
    }

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

    handleComment(id){
        this.props.dispatch(getComments(id))
        .then(res =>  {
            this.props.navigation.goBack()
        })
        .catch(err =>{
            console.log('error')
        })
    }

    handleDelete(id){
        this.props.dispatch(deleteComment(id))
        .then(res=>{
            alert('Berhasil Dihapus')
            console.log(res)
            this.props.navigation.goBack()
        })
        .catch(err => {
            alert("Something Error")
        })
    }

    handleEdit(id){
        this.props.dispatch(getSingleComment(id))
        this.props.navigation.navigate("EditComment",id)
    }
    
  render() {
      const res = this.props.timeline.Getdata;
      const id_nest = ((res || {}).name || {}).id;
      const name_nest = ((res || {}).name || {}).name;
      const pic_nest = ((res || {}).name || {}).pic;

      const comment_arr = this.props.timeline.comment;

    return (
      <Container>
          <Content>
                {this.props.timeline.isLoading ? (<Spinner/>) : (
                    <List>
                        <ListItem key={res.id} >
                            <Grid >
                                <Row>
                                    <Col size={1}>
                                        <Thumbnail source={{ uri: pic_nest }} style={{ width: 50, height: 50 }} />
                                    </Col>
                                    <Col size={3} >
                                        <Row><Text style>{name_nest}</Text></Row>
                                        <Row><Text note>5 Minutes Ago</Text><Icon name='md-people' size={.3} /></Row>
                                    </Col>

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
                                        <Button style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }} transparent onPress={() => this.handleComment(res.id)}>
                                            <Image source={require('../../../assets/sysnotif_message.png')} style={{ width: 20, height: 20 }} />
                                            <Text style={{ color: 'grey' }}>Comments</Text>
                                        </Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </ListItem>
                        {comment_arr.map(test =>
                            <ListItem>
                                <Grid>
                                    <Row>
                                        <Col size={1}>
                                            <Thumbnail source={{ uri: test.comment_by.pic }} style={{ width: 60, height: 60 }} />
                                        </Col>
                                        <Col size={3} >
                                            <CardItem bordered style={{backgroundColor:'#dae1ed'}}>
                                                <Root>
                                                    <TouchableNativeFeedback
                                                        onPress={()=> 
                                                            ActionSheet.show(
                                                                {
                                                                options: BUTTONS,
                                                                cancelButtonIndex: CANCEL_INDEX,
                                                                title: "Olah Komentar"
                                                                },
                                                                buttonIndex => {
                                                                this.setState({ clicked: 
                                                                    BUTTONS[buttonIndex]=="Delete" ? (this.handleDelete(test.id)):(
                                                                        BUTTONS[buttonIndex]=="Edit" ? (this.handleEdit(test.id)):(null)
                                                                    )
                                                                });
                                                                }
                                                            )
                                                        }
                                                    >
                                                        <Grid>
                                                            <Row>
                                                                <Text>{test.comment_by.name}</Text>
                                                            </Row>
                                                            <Row>
                                                                <Text note>{test.comment}</Text>
                                                            </Row>
                                                        </Grid>
                                                    </TouchableNativeFeedback>
                                                    <ActionSheet ref={(c) => { this.actionSheet = c; }} />
                                                </Root>
                                            </CardItem>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Text note>22h</Text>
                                        </Col>
                                        <Col>
                                            <Text note>Like</Text>
                                        </Col>
                                        <Col>
                                            <Text note>Reply</Text>
                                        </Col>
                                    </Row>
                                </Grid>
                            </ListItem>
                        )}
                        <Footer style={{backgroundColor:'white'}}>
                            <Content style={{marginTop:-5}}>
                                <Comments/>
                            </Content>
                        </Footer> 
                    </List>
                     
                )}   
                    
          </Content>
      </Container>
    );
  }

    showActionSheet(){
        if ( this.actionSheet !== null ) {
            ActionSheet.show(
                {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                title: "Olah Komentar"
                },
                buttonIndex => {
                this.setState({ clicked: 
                    BUTTONS[buttonIndex]=="Delete" ? (this.handleDelete(test.id)):(
                        BUTTONS[buttonIndex]=="Edit" ? (this.handleEdit(test.id)):(null)
                    )
                });
                }
            ),
            this.actionSheet._root.showActionSheet({options: BUTTONS}, (i) => console.log(i));
        }
    }
}



const mapStateToProps = (state)=>({
    timeline : state.timelineReducer
})

export default connect(mapStateToProps)(TimelineDetail)
