import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon,Button,FlatList,Accordion} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid'
import {StyleSheet,View,TouchableNativeFeedback,Image} from 'react-native'


const dataArray = [
    { 
        title: "Help & Support", 
        content: [
            "Help Center",
            "Help Community",
            "Report a Problem",
            "Term & Policies"
        ] 
    },
    { 
        title: "Settings & Privacy", 
        content: [
            "Settings",
            "Privacy Shortcuts",
            "Language",
            "Data Saver",
            "Code Generator",
            "Edit Shortcuts"
        ]  
    }
  ];

export default class MenuScreen extends Component {

    _renderHeader(title) {
        let _ICON;
        switch (title) {
            case "Help & Support":
                _ICON="ios-help-circle"
                break;
            case "Settings & Privacy":
                _ICON="md-settings"
                break;
            default:
                _ICON="md-people"
                break;
        }
        return (
            <Grid style={{paddingLeft:20,paddingTop:20,paddingBottom:20,paddingRight:5,backgroundColor:"#ccd4e2"}}>
                <Col>
                  <Content>
                      <Grid>
                          <Col size={0.5}>
                              <Icon name={_ICON} size={2} style={{}}/>
                          </Col>
                          <Col size={5}>
                                <Text style={{ fontWeight: "600" }}>
                                    {" "}{title}
                                </Text>
                          </Col>
                          <Col size={0.5}>
                              <Icon name='ios-arrow-down' size={2} style={{}}/>
                          </Col>
                      </Grid>
                  </Content>
                </Col>
            </Grid>
        );
      }


      _renderContent(content) {
        return (
        <Grid style={{backgroundColor:"#e3e6ea"}}>
            <Col >
              <Content>
                  {content.map(res=>
                    <Grid style={{paddingLeft:20,paddingTop:20,paddingBottom:20}}>
                    <Col size={0.5}>
                        {/* MENU 1 */}
                        {res=="Help Center"?(<Icon name="ios-help-buoy" size={2} style={{}}/>):(null)}
                        {res=="Help Community"?(<Icon name="md-chatbubbles" size={2} style={{}}/>):(null)}
                        {res=="Report a Problem"?(<Icon name="ios-close-circle-outline" size={2} style={{}}/>):(null)}
                        {res=="Term & Policies"?(<Icon name="md-bookmarks" size={2} style={{}}/>):(null)}
                        {/* MENU 2 */}
                        {res=="Settings"?(<Icon name="ios-contact" size={2} style={{}}/>):(null)}
                        {res=="Privacy Shortcuts"?(<Icon name="md-lock" size={2} style={{}}/>):(null)}
                        {res=="Language"?(<Icon name="ios-globe" size={2} style={{}}/>):(null)}
                        {res=="Data Saver"?(<Icon name="ios-phone-portrait" size={2} style={{}}/>):(null)}
                        {res=="Code Generator"?(<Icon name="ios-key" size={2} style={{}}/>):(null)}
                        {res=="Edit Shortcuts"?(<Icon name="ios-brush" size={2} style={{}}/>):(null)}
                    </Col>
                    <Col size={5}>
                          <Text style={{ fontWeight: "600" }}>
                              {" "}{res}
                          </Text>
                    </Col>
                </Grid>
                )}
                  
              </Content>
            </Col>
        </Grid>
        );
      }


  render() {
    return (
      <Container>
          <Content padder>
              <List>
                  <ListItem Component={TouchableNativeFeedback} onPress={()=>this.props.navigation.navigate("memberList")}>
                      <Grid >
                          <Col >
                            <Content>
                                <Grid>
                                    <Col size={0.5}>
                                        <Image source={require('../../../assets/friendsicon.jpg')} style={{width:40,height:40}}/>
                                    </Col>
                                    <Col size={5}>
                                        <Text style={{marginLeft:40 , textAlignVertical:'center'}}>Friends</Text>
                                    </Col>
                                </Grid>
                            </Content>
                          </Col>
                      </Grid>
                  </ListItem>
                  <ListItem Component={TouchableNativeFeedback} onPress={()=>this.props.navigation.navigate("memberList")}>
                      <Grid >
                          <Col>
                            <Content>
                                <Grid>
                                    <Col size={0.5}>
                                        <Image source={require('../../../assets/groupsicon.jpg')} style={{width:40,height:41}}/>
                                    </Col>
                                    <Col size={5}>
                                        <Text style={{marginLeft:40 , textAlignVertical:'center'}}>Groups</Text>
                                    </Col>
                                </Grid>
                            </Content>
                          </Col>
                      </Grid>
                  </ListItem>
                  <ListItem >
                      <Grid >
                          <Col onPress={()=>this.props.navigation.navigate("Markets")}>
                            <Content>
                                <Grid>
                                    <Col size={0.5}>
                                        <Image source={require('../../../assets/marketsicon.jpg')} style={{width:40,height:40}}/>
                                    </Col>
                                    <Col size={5}>
                                        <Text style={{marginLeft:40 , textAlignVertical:'center'}}>Marketplace</Text>
                                    </Col>
                                </Grid>
                            </Content>
                          </Col>
                      </Grid>
                  </ListItem>
                  <ListItem Component={TouchableNativeFeedback} onPress={()=>this.props.navigation.navigate("MarketsList")}>
                      <Grid >
                          <Col  >
                            <Content>
                                <Grid>
                                    <Col size={0.5}>
                                        <Image source={require('../../../assets/calendaricon.jpg')} style={{width:40,height:40}}/>
                                    </Col>
                                    <Col size={5}>
                                        <Text style={{marginLeft:40 , textAlignVertical:'center'}}>Events</Text>
                                    </Col>
                                </Grid>
                            </Content>
                          </Col>
                      </Grid>
                  </ListItem>
                  <ListItem >
                      <Grid >
                          <Col onPress={()=>this.props.navigation.navigate("MarketsList")}>
                            <Content>
                                <Grid>
                                    <Col size={0.5}>
                                        <Image source={require('../../../assets/memoriesicon.jpg')} style={{width:40,height:40}}/>
                                    </Col>
                                    <Col size={5}>
                                        <Text style={{marginLeft:40 , textAlignVertical:'center'}}>Memories</Text>
                                    </Col>
                                </Grid>
                            </Content>
                          </Col>
                      </Grid>
                  </ListItem>
                  <ListItem >
                      <Grid >
                          <Col onPress={()=>this.props.navigation.navigate("MarketsList")}>
                            <Content>
                                <Grid>
                                    <Col size={0.5}>
                                        <Image source={require('../../../assets/savedicon.jpg')} style={{width:40,height:40}}/>
                                    </Col>
                                    <Col size={5}>
                                        <Text style={{marginLeft:40 , textAlignVertical:'center'}}>Saved</Text>
                                    </Col>
                                </Grid>
                            </Content>
                          </Col>
                      </Grid>
                  </ListItem>
                  <ListItem >
                      <Grid >
                          <Col onPress={()=>this.props.navigation.navigate("MarketsList")}>
                            <Content>
                                <Grid>
                                    <Col size={0.5}>
                                        {/* <Icon name='logo-instagram' size={2} style={{}}/> */}
                                        <Image source={require('../../../assets/ig.jpg')} style={{width:40,height:40}}/>
                                    </Col>
                                    <Col size={5}>
                                        <Text style={{marginLeft:40 , textAlignVertical:'center'}}>Instagram</Text>
                                    </Col>
                                </Grid>
                            </Content>
                          </Col>
                      </Grid>
                  </ListItem>
                  <ListItem >
                      <Grid >
                          <Col onPress={()=>this.props.navigation.navigate("MarketsList")}>
                            <Content>
                                <Grid>
                                    <Col size={0.5}>
                                        <Image source={require('../../../assets/messenger-logo.png')} style={{width:40,height:40}}/>
                                    </Col>
                                    <Col size={5}>
                                        <Text style={{marginLeft:40 , textAlignVertical:'center'}}>Messenger</Text>
                                    </Col>
                                </Grid>
                            </Content>
                          </Col>
                      </Grid>
                  </ListItem>
                  <ListItem >
                      <Grid >
                          <Col onPress={()=>this.props.navigation.navigate("MarketsList")}>
                            <Content>
                                <Grid>
                                    <Col size={0.5}>
                                        <Image source={require('../../../assets/wa.png')} style={{width:40,height:40}}/>
                                    </Col>
                                    <Col size={5}>
                                        <Text style={{marginLeft:40 , textAlignVertical:'center'}}>WhatsApp</Text>
                                    </Col>
                                </Grid>
                            </Content>
                          </Col>
                      </Grid>
                  </ListItem>
                  <ListItem >
                      <Grid >
                          <Col onPress={()=>this.props.navigation.navigate("MarketsList")}>
                            <Content>
                                <Grid>
                                    <Col size={0.5}>
                                        <Image source={require('../../../assets/pagesicon.jpg')} style={{width:40,height:40}}/>
                                    </Col>
                                    <Col size={5}>
                                        <Text style={{marginLeft:40 , textAlignVertical:'center'}}>Pages</Text>
                                    </Col>
                                </Grid>
                            </Content>
                          </Col>
                      </Grid>
                  </ListItem>
                  <ListItem >
                      <Grid >
                          <Col onPress={()=>this.props.navigation.navigate("MarketsList")}>
                            <Content>
                                <Grid>
                                    <Col size={0.5}>
                                        <Image source={require('../../../assets/localicon.jpg')} style={{width:40,height:40}}/>
                                    </Col>
                                    <Col size={5}>
                                        <Text style={{marginLeft:40 , textAlignVertical:'center'}}>Local</Text>
                                    </Col>
                                </Grid>
                            </Content>
                          </Col>
                      </Grid>
                  </ListItem>
                    <Accordion
                        dataArray={dataArray}
                        icon="ios-arrow-down"
                        expandedIcon="ios-arrow-up"
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />
              </List>
                
          </Content>
      </Container>
    )
  }
}

