import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Button ,Icon, Thumbnail } from 'native-base';
import { Form as FormNB } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { Col, Row, Grid } from 'react-native-easy-grid'

import TextInput from '../../redux/redux-form/TextInput';

// const required = value => value ? undefined : 'This field is required';



class Form extends Component {
    handleSubmit(){
        alert('pressed');
    }
    render() {
    return (
      <Grid>
        
        <Col>
          <FormNB>
            <Grid >
                <Col size={1} style={{ alignSelf: 'center',alignItems:'center' }}>
                    <Icon name='ios-camera-outline' />
                </Col>
              <Col size={4}>
                <Field
                  component={TextInput}
                  name="comment"
                  placeholder="Write Comment ..."
                />
              </Col>
              <Col size={1} style={{ alignSelf: 'center',alignItems:'center' }}>
                <Button transparent onPress={this.props.handleSubmit} style={{ alignSelf: 'center' }}>
                  <Icon name='md-share-alt' />
                </Button>
              </Col>
            </Grid>
          </FormNB>
        </Col>
      </Grid>
    )
  }
}

const wrapperForm = reduxForm({
  form: 'comment',
})(Form);

export default wrapperForm;