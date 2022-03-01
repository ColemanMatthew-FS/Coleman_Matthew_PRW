import React from 'react'
import MyBtn from './buttons/MyBtn'

const Nav = props => {
    return (
        <nav style={styles.article}>
            <ul style={styles.list}>
                <li><button style={styles.button}>Newsfeed</button></li>
                <li><button style={styles.button}>Messages</button></li>
                <li><button style={styles.button}>Watch</button></li>
            </ul>
        </nav>
    )
}
export default Nav

const styles={
    article: {
        display: 'flex',
        flexDirection: 'column',
    },
    list: {
        listStyleType: 'none',
    },
    button: {
        fontWeight: 'bold',
        backgroundColor: '#3A405A',
        color: 'white',
        padding: '1%',
        margin: '3%',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        width: '200px',
        height: '30px',
    }
}