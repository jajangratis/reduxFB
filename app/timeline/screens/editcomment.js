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

import { editToTimeline, allTimeline , editComment } from '../actions'
import FormEditComment from '../component/formeditcomment'
import FormEdit from '../component/formedit'


class EditComment extends Component {
  


  handleEdit(){
    console.log(this.props.timeline.singlecomment.id);
    this.props.dispatch(editComment(this.props.timeline.singlecomment.id,this.props.commentform.values.comment))
    .then(res => {
      this.props.navigation.goBack()
    })
    .catch(err => {
      alert('OK Gagal');
      this.props.navigation.goBack()
    })
  }

  render() {
    return (
      <Container>
        <Content>
          <FormEditComment
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
    commentform : state.form.comment
})

export default connect(mapStateToProps)(EditComment)
