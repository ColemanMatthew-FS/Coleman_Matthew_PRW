import React, { Component } from 'react'
import MyHeader from './components/MyHeader'
import PostForm from './components/PostForm'
import MyAd from './components/MyAd'
import AppleCider from './images/applecider.jpeg'
import Bedding from './images/sheets.jpeg'
import Nav from './components/Nav'
import Post from './components/Post'
import Avatar from './images/generic-avatar-1.jpeg'

class App extends Component {
  state = {
    pList: [{
      pImg: Avatar,
      pAlt: 'A generic avatar',
      pTitle: 'Post 1',
      pDesc: 'I\'m new here, nice to meet you!',
    },
    {
      pImg: Avatar,
      pAlt: 'A generic avatar',
      pTitle: 'Post 2',
      pDesc: 'I\'m new here, nice to meet you!',
    }],
    color: '#3A405A',
  }

componentDidMount() {
  setTimeout(() => {
    this.setState({color: 'transparent'})
  }, 5000)
}

  //function named changeInputText
  //takes in e as an argument (usually an input field)
  //runs the this.setState function, databinding the value of the input field to the state
  //the key is the target (input)'s name, allowing this function to fill multiple properties
  getInput = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  addItem = e => {
    e.preventDefault()
    this.setState({
      //uses a spread operator to copy the array and push the new name into it
      pList: [...this.state.pList,
        {pImg:Avatar,
          pAlt: 'A generic avatar',
          pTitle:this.state.pTitle,
          pDesc:this.state.pDesc
        }]
    })
    e.target.reset()
  }

  //Uses the filter method to filter out any posts with a matching index number
  //This prevents mutating the state
  removeItem = (key) => {
    console.log(key)
    const newpList = this.state.pList.filter(post => this.state.pList.indexOf(post) !== key)
    this.state.pList.filter(post => this.state.pList.indexOf(post) !== key)
    this.setState({pList:newpList})
    console.log(newpList)
  }
  render() {
    //takes the array of posts above
    //(element is the first argument and is the current element)
    //(i is the second argument and is the index)
    //maps each element and index pair (or a kvp) onto a new object
    //the removeItem function is passed into the delMe prop as well
    //the new object is a post object
    let postList = this.state.pList.map((element, i) => {
      return <Post key={i} val={element} delMe={() =>this.removeItem(i)} />
    })
    return (
      <div className="App" style={styles.container}>
        {/* Header is dropped in here */}
        <MyHeader />
        {/* Flex column layout */}
        <div style={styles.subContainer}>
          {/* The nav component on the left goes here */}
          <Nav />
          {/* The post form and post go in this div */}
          {/* initially, the background color is set to blue, then, after a few seconds, the lifecycle function runs and it changes to transparent */}
          <div style={{backgroundColor: this.state.color, margin: '10px', width: '30%'}}>
            <PostForm
            addItem={this.addItem}
            getInput={this.getInput}
            btnText="Submit Post"/>
            {postList}
          </div>
          {/* The aside for the ad cards is in here */}
          <aside>
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