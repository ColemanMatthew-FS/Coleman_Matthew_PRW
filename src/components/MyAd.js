import React from 'react'
import MyBtn from './buttons/MyBtn'

const MyAd = props => {
    return (
        <article style={styles.myArticle}>
            <img src={props.imgSrc} alt={props.imgAlt}/>
            <h2>{props.adHeader}</h2>
            <p>{props.adInfo}</p>
            <MyBtn btnText={'Buy Now!'}/>
        </article>
    )
}
export default MyAd

const styles= {
    myArticle: {
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        padding: '1%',
        backgroundColor: '#3A405A',
        color: 'white',
        justifyContent: 'space-between',
        borderRadius: '5px',
    },
}