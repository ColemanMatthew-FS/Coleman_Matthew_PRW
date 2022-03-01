import React from 'react'

const MyAd = props => {
    return (
        <article style={styles.myArticle}>
            <img src={props.ImgSrc} alt={props.ImgAlt} style={styles.image}/>
            <h2>{props.AdHeader}</h2>
            <p>{props.AdInfo}</p>
            <button style={styles.button}>Buy now!</button>
        </article>
    )
}
export default MyAd

const styles= {
    myArticle: {
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        margin: '3%',
        padding: '1%',
        backgroundColor: '#3A405A',
        color: 'white',
        borderRadius: '5px',
        textAlign: 'center',
    },
    button: {
        fontWeight: 'bold',
        backgroundColor: 'white',
        color: '#3A405A',
        padding: '1%',
        margin: '1%',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
    }
}