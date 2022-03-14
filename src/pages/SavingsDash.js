import React from 'react'

function SavingsDash() {
    return (
        <section style={styles.container}>
            <h1>SavingsDash</h1>
            <p>Some stuff here</p>
            <p>Some stuff here</p>
        </section>
    )
}

export default SavingsDash

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
    }
}