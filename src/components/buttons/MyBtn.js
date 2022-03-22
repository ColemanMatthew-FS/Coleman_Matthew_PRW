import React from 'react'

const MyBtn = props => {
    return (
        <button style={styles.btn} onClick={props.onClick}>
            {props.btnText}
        </button>
    )
}
export default MyBtn

const styles= {
    btn: {
        fontWeight: 'bold',
        backgroundColor: '#3A405A',
        color: 'white',
        padding: '7px',
        margin: '1%',
        width: '100%',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
    }
}