import React from 'react'

function SettingsDash() {
    return (
        <section style={styles.container}>
            <h1>Settings</h1>
            <p>Some stuff here</p>
            <p>Some stuff here</p>
        </section>
    )
}

export default SettingsDash

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
    }
}