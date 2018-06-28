import React, { Component } from 'react'
import { Button, StyleSheet , Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Container } from 'native-base'
import { connect } from 'react-redux'

import Form from '../component/formcomment';
import { addComment } from '../actions'

class Comments extends Component {

  constructor() {
    super();
  }

  handleCreate(value){
    this.props.dispatch(addComment(this.props.timelineform.values.comment,this.props.timeline.Getdata.id))
    .then(res => {
      alert('OK Update');
    })
    .catch(err => {
      alert('OK Gagal');
    })
  }

  render() {
    return (
        <Form
          {...this.props}
          onSubmit={this.handleCreate.bind(this)}
        />
    )
  }
}

const mapStateToProps = (state)=>({
  timeline : state.timelineReducer,
  timelineform : state.form.comment
})

export default connect(mapStateToProps)(Comments);
