import React, {Component} from 'react';
import PreLoader from './application/components/PreLoader';
import GuestNavigation from './application/navigations/guest';
import LoggedNavigation from './application/navigations/logged';
import * as firebase from 'firebase';
import firebaseConfig from './application/utils/firebase';
firebase.initializeApp(firebaseConfig);

console.disableYellowBox = true;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLogged: false,
      loaded: false
    };
  }

  async componentDidMount() {
    // firebase.auth().signOut();

    await firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        this.setState({
          isLogged: true,
          loaded: true
        });
      }
      else {
        this.setState({
          isLogged: false,
          loaded: true
        });
      }
    });
  }

  render() {
    const {isLogged, loaded} = this.state;

    if (!loaded) {
      return (<PreLoader/>);
    }

    if (isLogged) {
      return (<LoggedNavigation/>);
    }
    else {
      return(<GuestNavigation/>);
    }

  }
}

export default App;
