import React, {Component} from 'react'
import { View , Image , StyleSheet , FlatList} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import {Root,Container , Content, Text, List, ListItem, Spinner, Thumbnail , Icon , Form , ActionSheet , Input , Left , Right, Button, Badge} from 'native-base';
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form';

import { allTimeline , getTimeline , deleteTimeline , likepostbyId , getComments } from '../actions'
import TextInput from '../../redux/redux-form/TextInput';
import {getmember} from '../../members/actions'
import CreateTimeline from './create'

var BUTTONS = ["Delete","Edit","Cancel"];
var CANCEL_INDEX = 2;

class fbTimelineList extends Component{
    
    constructor(props){
        super(props)
        this.state={};
    }
    
    componentDidMount(){
        this._getTimeline()
    }

    _getTimeline = () => {
        this.props.dispatch(allTimeline())
        this.props.dispatch(getmember())
    }

    handleCreate(){
        this.props.navigation.navigate('CreateTimeline')
    }
    handleDelete(val){
        this.props.dispatch(deleteTimeline(val))
        .then(res => {
            this.props.dispatch(allTimeline());
        })
        .catch(err => {
            alert('OK Gagal');
        })
    }

    handleGetTimeline(id){
        this.props.dispatch(getTimeline(id))
        this.props.dispatch(getComments(id))
        this.props.navigation.navigate('TimelineDetail',id)
    }

    handleEdit(id){
        this.props.dispatch(getTimeline(id))
        this.props.navigation.navigate('EditTimeline',id)

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

    handleSubmit(){
        alert("MASUK")
    }

    handlePages(){
        this.props.navigation.navigate('ContactsList')
        
        
    }

    
    

    render(){
        return(
            <Container>
                <Content>
                   <CreateTimeline />
                    {this.props.timeline.isLoading ? (
                        <Spinner/>
                    ) : (
                        <List >
                        <ListItem itemDivider/>

                        <ListItem>
                            <Grid>
                                <Row>
                                    <Col size={5}>
                                        <Content>
                                            <Text style={{textAlign:'left'}}>Stories</Text>
                                        </Content>
                                    </Col>
                                    <Col size={2}>
                                        <Text>Play All</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <FlatList
                                        data={this.props.member.results}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={(res)=>
                                            <Thumbnail source={{ uri: res.item.pic }} style={{ margin: 10 }} />
                                        }
                                    />
                                </Row>
                            </Grid>
                        </ListItem>

                        <ListItem itemDivider/>
                        {this.props.timeline.results?(
                                    <FlatList
                                        data={this.props.timeline.results}
                                        refreshing={this.props.timeline.isLoading}
                                        onRefresh={this.getTimeline}
                                        inverted
                                        refreshing={true}
                                        ListEmptyComponent ={()=>
                                            <Grid>
                                                <Col>
                                                    <Text>Data is Empty</Text>
                                                </Col>
                                            </Grid>
                                        }
                                        renderItem={(res) =>
                                            <ListItem >
                                                <Grid >
                                                    <Row>
                                                        <Col size={1}>
                                                            <Thumbnail source={{ uri: res.item.name.pic }} style={{ width: 50, height: 50 }} />
                                                        </Col>
                                                        <Col size={3} >
                                                            <Row><Text style>{res.item.name.name}</Text></Row>
                                                            <Row><Text note>5 Minutes Ago</Text></Row>
                                                        </Col>
                                                        {(res.item.name.name === "Trian Afiansyah") ? (
                                                            <Col size={1}>
                                                                <Root>
                                                                <Button transparent  onPress={()=>
                                                                ActionSheet.show(
                                                                    {
                                                                      options: BUTTONS,
                                                                      cancelButtonIndex: CANCEL_INDEX,
                                                                      title: "Olah Status"
                                                                    },
                                                                    buttonIndex => {
                                                                      this.setState({ clicked: 
                                                                        BUTTONS[buttonIndex]=="Delete" ? (this.handleDelete(res.item.id)):(
                                                                            BUTTONS[buttonIndex]=="Edit" ? (this.handleEdit(res.item.id)):(null)
                                                                        )
                                                                      });
                                                                    }
                                                                  )}
                                                                >
                                                                    <Icon name='ios-arrow-down-outline'/>
                                                                </Button>
                                                                </Root>
                                                                {/* <Button transparent onPress={() => this.handleDelete(res.item.id)}>
                                                                    <Text>Delete</Text>
                                                                </Button>
                                                                <Button transparent onPress={() => this.handleEdit(res.item.id)} style={{ alignItems: 'center' }}>
                                                                    <Text>EDIT</Text>
                                                                </Button> */}
                                                            </Col>
                                                        ) : (null)}
                                                    </Row>
                                                    <Row style={{ margin: "5%" }}>
                                                        <Text>{res.item.status}</Text>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <Button iconLeft transparent>
                                                                <Text>{res.item.like}</Text>
                                                                <Image source={require('../../../assets/reactions_like_sutro.png')} />
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col >
                                                            <Button transparent onPress={() => this.handleLike(res.item.id, res.item.like)} >
                                                                <Image source={require('../../../assets/orca_ic_like_action_big.png')} style={{ width: 30, height: 30 }} />
                                                                <Text style={{ color: 'grey' }}>Like</Text>
                                                            </Button>
                                                        </Col>
                                                        <Col >
                                                            <Button style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }} transparent onPress={() => this.handleGetTimeline(res.item.id)}>
                                                                <Image source={require('../../../assets/sysnotif_message.png')} style={{ width: 20, height: 20 }} />
                                                                <Text style={{ color: 'grey' }}>Comments</Text>
                                                            </Button>
                                                        </Col>

                                                    </Row>
                                                </Grid>
                                            </ListItem>
                                        }
                                    />
                        ):(<Spinner/>)}
                      </List>
                    )}
                </Content>
            </Container>
        )
    }

}


const mapStateToProps = (state)=>({
    timeline : state.timelineReducer,
    timelineform : state.form.timeline,
    member : state.memberReducer,
})

export default connect(mapStateToProps)(fbTimelineList)