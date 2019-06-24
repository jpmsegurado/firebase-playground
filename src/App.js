import React from 'react';
import './App.css';

import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCBGhT4R7l1q1USAXuNTOR2qc-wp7wQLrs",
  authDomain: "test-firabase.firebaseapp.com",
  databaseURL: "https://test-firabase.firebaseio.com",
  projectId: "test-firabase",
  storageBucket: "test-firabase.appspot.com",
  messagingSenderId: "5844705573",
  appId: "1:5844705573:web:0009c4d868a6fde8"
}

firebase.initializeApp(firebaseConfig)

export default class App extends React.Component {
  state = {
    isLogged: false,
    username: 'jpmsegurado@gmail.com',
    password: 123123
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isLogged: true
        })
      }
    })
  }

  async submit () {
    if (this.state.isLogged) {
      const db = firebase.firestore()
      console.log(firebase.auth().currentUser.uid)
      const res = await db.collection('teste').where('uid', '==', firebase.auth().currentUser.uid).get()
      console.log(res.docs[0].data())
    } else {
      const { username, password } = this.state
      try {
        await firebase.auth().signInWithEmailAndPassword(username, password)
        this.setState({
          isLogged: true
        })
      } catch (e) {
        console.log(e)
      }
    }
  }

  render () {
    return (
      <div className="app">
        <div className="login">
          <input
            value={this.state.username}
            type="email"
            onChange={(event) => this.setState({ username: event.target.value })} />
          <input
            value={this.state.password}
            type="password"
            onChange={(event) => this.setState({ password: event.target.value })} />
          <button onClick={this.submit.bind(this)}>Loga ai</button>
        </div>
      </div>
    )
  }
}
