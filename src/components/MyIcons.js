import React from 'react'

//Generic icon
const MyIcons = props => {
    return (
        <img src={props.IconImg} alt={props.ImgAlt} style={styles.myIcon} />
    )
}
export default MyIcons

const styles= {
    myIcon: {
        height: '50px',
        cursor: 'pointer',
        borderRadius: '50%',
    }
}