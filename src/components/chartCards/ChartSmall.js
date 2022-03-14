import React from 'react'
import SmallBarChart from '../charts/SmallBarChart'

//brings in the Bar chart from the state in the dashboard
//passes it into a callback function that returns an article
//the article has an id for future reference
const ChartSmall = ({chartSmall}) => {
    return (
        <article key={chartSmall.id} style={styles.card}>
            <h1>{chartSmall.chartHeader}</h1>
            <SmallBarChart />
        </article>
    )
}

export default ChartSmall

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        minHeight: '100%',
        backgroundColor: 'white',
        margin: '1rem .2rem 1rem .2rem',
        padding: '.5rem',
    }
}