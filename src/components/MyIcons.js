import React from 'react'

const MyAvatar = props => {
    return (
        <img src={props.IconImg} alt={props.ImgAlt} style={styles.myIcon} />
    )
}
export default MyAvatar

const styles= {
    myIcon: {
        height: '50px',
        cursor: 'pointer',
        borderRadius: '50%',
    }
}