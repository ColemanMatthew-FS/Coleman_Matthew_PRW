import React from 'react'

function ReportsDash() {
    return (
        <section style={styles.container}>
            <h1>Reports</h1>
            <p>Some stuff here</p>
            <p>Some stuff here</p>
        </section>
    )
}

export default ReportsDash

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
    }
}