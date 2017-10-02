import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-698fc.cloudfunctions.net'

class SignUpForm extends Component {

  state = { phone: '' };

  handleSubmit = async () => {
    //async await
    await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
    await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter a phone number:</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button
          title="Submit"
          onSubmit={this.handleSubmit.bind(this)}
         />
      </View>

    )
  }
}

export default SignUpForm
