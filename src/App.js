import React from 'react'
import {Routes, Route } from 'react-router-dom'
import MyHeader from './components/MyHeader'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'
import ReportsDash from './pages/ReportsDash'
import IncomeDash from './pages/IncomeDash'
import SavingsDash from './pages/SavingsDash'
import SpendingDash from './pages/SpendingDash'
import SettingsDash from './pages/SettingsDash'

function App() {
  
  return (
    <div style={styles.container}>
      <MyHeader />
      <main style={styles.main}>
        <Nav />
        
        <section style={styles.subContainer}>
          {/* Routing for each of the pages */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="ReportsDash" element={<ReportsDash />} />
            <Route path="IncomeDash" element={<IncomeDash />} />
            <Route path="SavingsDash" element={<SavingsDash />} />
            <Route path="SpendingDash" element={<SpendingDash />} />
            <Route path="SettingsDash" element={<SettingsDash />} />
          </Routes>
        </section>  
      </main>
    </div>
  );
}
export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: '#CDCDCD',
    fontSize: '.75rem',
    fontFamily: 'Source Sans Pro',
  },
  main: {
    padding: '55px 25px 0px 0px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    background: '#fff',
    borderRadius: '10px',
  },
  cardContainer: {
    margin: '10px',
  }
}