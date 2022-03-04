import React, { Component } from 'react'
import MyHeader from './components/MyHeader'
import PostForm from './components/PostForm'
import MyAd from './components/MyAd'
import AppleCider from './images/applecider.jpeg'
import Bedding from './images/sheets.jpeg'
import Nav from './components/Nav'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.container}>
        {/* Header is dropped in here */}
        <MyHeader />
        {/* Flex column layout */}
        <div style={styles.subContainer}>
          {/* The nav component on the left goes here */}
          <Nav />
          {/* The post form and post go in this div */}
          <div style={styles.main}>
            <PostForm />
            <Post PostTitle={'Howdy!'} PostText={'I\'m new, it\'s nice to meet everyone! I can\t wait to get to know you all over the course of our studies together! I\'m looking forward to seeing this app grow.'} />
          </div>
          {/* The aside for the ad cards is in here */}
          <aside style={styles.cardContainer}>
            <MyAd ImgSrc={AppleCider} ImgAlt={'A glass of apple cider'} AdHeader={'Momma\'s Apple Cider'} AdInfo={'Fresh-squeezed, not from concentrate'}/>
            <MyAd ImgSrc={Bedding} ImgAlt={'Fresh sheets'} AdHeader={'Grab a good night\'s rest'} AdInfo={'Satin, down, wool, your choice'}/>
          </aside>
        </div>
      </div>
    );
  }
}
export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: '#CDCDCD',
    height: '100%',
    fontSize: '.75rem',
    fontFamily: 'Source Sans Pro'
  },
  subContainer: {
    padding: '55px 25px 10px 25px',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  main: {
    width: '30%',
    margin: '10px',
  },
  cardContainer: {
    margin: '10px',
  }
}