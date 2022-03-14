import React from 'react'
import HorzLineChart from '../charts/HorzLineChart'

//brings in the line chart from the state in the dashboard
//passes it into a callback function that returns an article
//the article has an id for future reference
const ChartHorz = ({chartHorz}) => {
    return (
        <article key={chartHorz.id} style={styles.card}>
            <h1>{chartHorz.chartHeader}</h1>
            <HorzLineChart />
        </article>
    )
}

export default ChartHorz

const styles = {
    card: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        minHeight: '100%',
        backgroundColor: 'white',
        margin: '1rem',
        padding: '.5rem',
        width: '50%',
    }
}