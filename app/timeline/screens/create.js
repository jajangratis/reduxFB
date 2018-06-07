import React, { Component } from 'react'
import { Button, StyleSheet , Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Container } from 'native-base'
import { connect } from 'react-redux'

import Form from '../component/form';
import { addToTimeline , allTimeline } from '../actions'

class CreateTimeline extends Component {

  constructor() {
    super();
  }

  handleCreate(value){
    this.props.dispatch(addToTimeline(this.props.timelineform.values.status))
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
  timelineform : state.form.timeline
})

export default connect(mapStateToProps)(CreateTimeline);
