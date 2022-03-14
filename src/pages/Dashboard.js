import React, {useState} from 'react'
import ChartHorz from '../components/chartCards/ChartHorz'
import ChartMed from '../components/chartCards/ChartMed'
import ChartSmall from '../components/chartCards/ChartSmall'

function Dashboard() {
    //hooks for the state for each chart
    const [chartHorz] = useState([
        {chartHeader: 'Income Overview'},
        {chartHeader: 'Savings Overview'}
    ])
    const [chartSmall] = useState([
        {chartHeader: 'Income'},
        {chartHeader: 'Savings'},
        {chartHeader: 'Savings'}
    ])
    const [chartMed] = useState([
        {
            chartHeader:'Savings Overview',
            chartsubHeader:'Start saving today'
        },
        {
            chartHeader:'Savings Overview',
            chartsubHeader:'Start saving today'
        }
    ])
    return (
        <section style={styles.container}>
            <p style={styles.chartHorz}>
                {/* mapping through the state and placing that data into each chart */}
                {chartHorz.map((chartHorz, id) => (
                    <ChartHorz
                        key={id}
                        id={id}
                        chartHorz={chartHorz}    
                    />
                ))}
            </p>
            <p style={styles.row}>
                {chartMed.map((chartMed, id) => (
                    <ChartMed
                        key={id}
                        id={id}
                        chartMed={chartMed}    
                    />
                ))}
            </p>
            <p style={styles.chartHorz}>
                {chartSmall.map((chartSmall, id) => (
                    <ChartSmall
                        key={id}
                        id={id}
                        chartSmall={chartSmall}    
                    />
                ))}
            </p>
        </section>
    )
}

export default Dashboard

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    chartHorz: {
        display: 'flex',
        flexDirection: 'row',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
}