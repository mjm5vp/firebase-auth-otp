import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';


export default class App extends React.Component {

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyAB6ioNX2EZn0Z8exCVMoLZeWpFswluVyM',
      authDomain: 'one-time-password-698fc.firebaseapp.com',
      databaseURL: 'https://one-time-password-698fc.firebaseio.com',
      projectId: 'one-time-password-698fc',
      storageBucket: 'one-time-password-698fc.appspot.com',
      messagingSenderId: '1035913942891'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
