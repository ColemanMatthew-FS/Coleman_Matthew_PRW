import React, { Component } from 'react';
import AvatarIcon from './images/generic-avatar-1.jpeg';
import MyAvatar from './components/MyAvatar';
import { FaBeer } from 'react-icons/fa';
import MyHeader from './components/MyHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyAvatar AvatarIcon={AvatarIcon}/>
        <MyHeader />
        <div>
          <h1>Icon Examples:</h1>
          <p>
            <FaBeer />
          </p>
        </div>
      </div>
    );
  }
}
export default App;