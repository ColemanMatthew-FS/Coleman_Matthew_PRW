import React from 'react'

//Generic avatar
const Avatar = props => {
    return (
        <img src={props.AvImg} alt={props.ImgAlt} style={styles.myAv} />
    )
}
export default Avatar

const styles= {
    myAv: {
        maxHeight: '128px',
        maxWidth: '128px',
        cursor: 'pointer',
        border: '1px solid #3A405A',
        borderRadius: '50%',
        alignSelf: 'center'
    }
}