import React from 'react'
import TangerineLogo from '../images/tangerinelogo.png'
import { FaAmbulance } from 'react-icons/fa'

const MyHeader = props => {
    return (
        <header>
            <img alt="A tangerine" src={TangerineLogo} style={styles.tangerineLogo}/>
            <FaAmbulance/>
        </header>
    )
}
export default MyHeader

const styles= {
    tangerineLogo: {
        height: '50px',
    }
}