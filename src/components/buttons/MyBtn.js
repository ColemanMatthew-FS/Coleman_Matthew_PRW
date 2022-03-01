import React from 'react'

const MyBtn = props => {
    return (
        <button style={styles.btn}>
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
        padding: '1%',
        margin: '1%',
        borderRadius: '10%',
        border: 'none',
        cursor: 'pointer',
    }
}