import React from 'react'
import MyBtn from './buttons/MyBtn'
import MyIcons from './MyIcons'
import ImageUrl from '../images/generic-avatar-1.jpeg'

const PostForm = props => {
    return (
        <form style={styles.myForm} onSubmit={props.submit}>
            <div style={styles.inputContainer}>
                <MyIcons IconImg={ImageUrl} ImgAlt='A generic avatar' />
                <input style={styles.input} placeholder="Title your post"/>
            </div>
            <div style={styles.inputContainer}>
                <textarea style={styles.textArea} placeholder="What's on your mind?"/>
                <MyBtn btnText={'Submit Post'}/>
            </div>
        </form>
    )
}
export default PostForm

const styles= {
    myForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        margin: '1%',
        padding: '1%',
        backgroundColor: 'white',
        color: '#3A405A',
        borderRadius: '2%',
        boxShadow: '0 4px 10px 0',
    },
    input: {
        width: '90%',
        margin: '1%',
        padding: '2%',
        border: 'none',
    },
    textArea: {
        width: '90%',
        margin: '3%',
        padding: '2%',
        border: 'none',
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2%',
    },
}