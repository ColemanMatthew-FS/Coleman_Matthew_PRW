import React from 'react'

function IncomeDash() {
    return (
        <section style={styles.container}>
            <h1>Income</h1>
            <p>Some stuff here</p>
            <p>Some stuff here</p>
        </section>
    )
}

export default IncomeDash

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
    }
}