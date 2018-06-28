/**
 * Sample React Native TodoDetail
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import { View , StyleSheet , Image } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import {Container,  Content, Text, List, ListItem ,Spinner, Thumbnail , Icon , Form , Item , Input , Left , Right, Button} from 'native-base'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form';

import { editToTimeline, allTimeline } from '../actions'
import FormEdit from '../component/formedit';


class EditTimeline extends Component {
  


  handleEdit(value){
    this.props.dispatch(editToTimeline(this.props.timeline.Getdata.id,this.props.timelineform.values.status))
    .then(res => {
      this.props.navigation.goBack()
      this.props.navigation.dispatch(allTimeline())
    })
    .catch(err => {
      alert('OK Gagal');
    })
  }

  render() {
    return (
      <Container>
        <Content>
          <FormEdit
            {...this.props}
            onSubmit={this.handleEdit.bind(this)}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state)=>({
    timeline : state.timelineReducer,
    timelineform : state.form.timeline
})

export default connect(mapStateToProps)(EditTimeline)
