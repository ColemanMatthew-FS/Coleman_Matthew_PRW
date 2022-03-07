import React from 'react'
import MyBtn from './buttons/MyBtn'
import MyIcons from './MyIcons'
import { FaPen, FaTrash } from 'react-icons/fa'

//Post component featuring an avatar, title, and description as well as edit and delete buttons
const Post = props => {
    //all of the props are prefixed with props.val
    //this is because the props passed in from app.js are objects with multiple properties
    return (
        <article style={styles.postArticle}>
            <div style={styles.titleContainer}>
                <MyIcons IconImg={props.val.pImg} ImgAlt={props.val.pAlt} />
                <h2 style={styles.title}>{props.val.pTitle}</h2>
            </div>
            <div style={styles.textContainer}>
                <p>{props.val.pDesc}</p>
            </div>
            <div style={styles.postButtons}>
                {/* edit button */}
                <MyBtn btnText={<FaPen />}/>
                {/* delete button */}
                <MyBtn btnText={<FaTrash />} onClick={props.delMe} />
            </div>
        </article>
    )
}
export default Post

const styles= {
    postArticle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        margin: '5% 1% 1% 1%',
        padding: '1%',
        backgroundColor: 'white',
        color: '#3A405A',
        borderRadius: '2%',
        boxShadow: '0 4px 10px 0',
    },
    titleContainer: {
        display: 'flex',
        margin: '2%',
    },
    title: {
        alignSelf: 'center',
        margin: '2%',
    },
    postButtons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '2%',
    },
    textContainer: {
        margin: '2%',
        fontSize: '1rem',
    }
}