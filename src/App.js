import React, { Component } from 'react';
import MyHeader from './components/MyHeader';
import MyBtn from './components/buttons/MyBtn';
import MyBtnInactive from './components/buttons/MyBtnInactive';
import PostForm from './components/PostForm';
import MyAd from './components/MyAd';

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.main}>
        <MyHeader />
        <div style={styles.container}>
          <div style={styles.subContainer}>
            <PostForm />
          </div>
          <MyAd imgSrc={'./images/applecider.jpeg'} imgAlt={'A glass of apple cider'}/>
        </div>
      </div>
    );
  }
}
export default App;

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    background: '#CDCDCD',
    height: '100vh',
    fontSize: '.75rem',
  },
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  subContainer: {
    width: '30%',
  }
}