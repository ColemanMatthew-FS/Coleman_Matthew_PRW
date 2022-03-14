import React, { Component } from 'react'
import {Routes, Route } from 'react-router-dom'
import MyHeader from './components/MyHeader'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'

function App() {
  
  return (
    <div style={styles.container}>
      <MyHeader />
      <main style={styles.main}>
        <aside>
          <Nav />
        </aside>
        
        <section style={styles.subContainer}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
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
    height: '100%',
    fontSize: '.75rem',
    fontFamily: 'Source Sans Pro'
  },
  main: {
    padding: '55px 25px 10px 25px',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
  },
  subContainer: {
    justifyContent: 'center',
    width: '30%',
    margin: '10px',
  },
  cardContainer: {
    margin: '10px',
  }
}