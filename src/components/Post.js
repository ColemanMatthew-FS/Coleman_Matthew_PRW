import React from 'react'
import MyBtn from './buttons/MyBtn'
import MyIcons from './MyIcons'
import ImageUrl from '../images/generic-avatar-1.jpeg'
import { FaPen, FaTrash } from 'react-icons/fa'

const Post = props => {
    return (
        <article style={styles.postArticle}>
            <div style={styles.titleContainer}>
                <MyIcons IconImg={ImageUrl} ImgAlt='A generic avatar' />
                <h2 style={styles.title}>{props.PostTitle}</h2>
            </div>
            <div style={styles.textContainer}>
                <p>{props.PostText}</p>
            </div>
            <div style={styles.postButtons}>
                <MyBtn btnText={<FaPen />}/>
                <MyBtn btnText={<FaTrash />}/>
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