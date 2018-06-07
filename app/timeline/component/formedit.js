import React, { Component } from 'react';
import { ActivityIndicator , View , Item } from 'react-native'
import { Button ,Icon, Thumbnail,Input } from 'native-base';
import { Form  } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { Col, Row, Grid } from 'react-native-easy-grid'

import TextInput from '../../redux/redux-form/TextInput';

// const required = value => value ? undefined : 'This field is required';



class FormEdit extends Component {
    handleSubmit(){
        alert('pressed');
    }
    
    render() {
    return (
      <Grid>
        <Col size={1}>
          <Thumbnail source={require('../../../assets/orca_phone_unknown_contact.png')} style={{width:50,height:50}}/>
        </Col>
        <Col size={4}>
          
          <Form>
            <Grid >
              <Col size={2}>
                <Field
                  component={TextInput}
                  name="status"
                  placeholder={this.props.timeline.Getdata.status}
                />
              </Col>
              <Col size={1}>
                <Button transparent onPress={this.props.handleSubmit} style={{ alignSelf: 'center' }}>
                  <Icon name='md-share-alt' />
                </Button>
              </Col>
            </Grid>
          </Form>
        </Col>
      </Grid>
    )
  }
}

const wrapperForm = reduxForm({
  form: 'timeline',
})(FormEdit);

export default wrapperForm;