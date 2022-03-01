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
        backgroundColor: 'white',
        color: '#3A405A',
        padding: '1%',
        margin: '1%',
        borderRadius: '10%',
        border: '1px solid #3A405A',
        cursor: 'pointer',
    }
}