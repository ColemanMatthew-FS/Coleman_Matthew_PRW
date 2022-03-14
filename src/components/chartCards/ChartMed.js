import React from 'react'
import ScattChart from '../charts/ScattChart'

//brings in the scatter chart from the state in the dashboard
//passes it into a callback function that returns an article
//the article has an id for future reference
const ChartMed = ({chartMed}) => {
    return (
        <article key={chartMed.id} style={styles.card}>
            <h1>{chartMed.chartHeader}</h1>
            <h2>{chartMed.chartsubHeader}</h2>
            <ScattChart />
        </article>
    )
}

export default ChartMed

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        minHeight: '100%',
        backgroundColor: 'white',
        margin: '1rem',
        padding: '.5rem',
        width: '30%',
    }
}