import React from 'react'

function SpendingDash() {
    return (
        <section style={styles.container}>
            <h1>SpendingDash</h1>
            <p>Some stuff here</p>
            <p>Some stuff here</p>
        </section>
    )
}

export default SpendingDash

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
    }
}