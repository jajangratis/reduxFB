import React, { Component } from 'react';
import { Button, ActivityIndicator } from 'react-native';
import { Form as FormNB } from 'native-base';
import { Field, reduxForm } from 'redux-form';

import TextInput from '../../redux/redux-form/TextInput';

const required = value => value ? undefined : 'This field is required';

class Form extends Component {
  render() {
    return (
      <FormNB>
        <Field
          component={TextInput}
          name="name"
          placeholder="Nama"
          validate={[ required ]}
        />
        <Field
          component={TextInput}
          name="address"
          placeholder="Address"
          validate={[ required ]}
        />
        {this.props.contacts.isLoading
        ? <ActivityIndicator />
        : <Button
          onPress={this.props.handleSubmit}
          title="Create" />}
      </FormNB>
    )
  }
}

const wrapperForm = reduxForm({
  form: 'contact',
})(Form);

export default wrapperForm;