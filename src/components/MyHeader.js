import React from 'react'
import TangerineLogo from '../images/tangerinelogo.png'
import { FaSearch, FaEnvelope, FaBell } from 'react-icons/fa'
import MyIcons from './MyIcons'
import ImageUrl from '../images/generic-avatar-1.jpeg'

const MyHeader = props => {
    return (
        <header style={styles.myHeader}>
            <div style={styles.left}>
                <img src={TangerineLogo} alt={"Logo for the app"} style={styles.tangerineLogo} />
                <h1>Tangerine</h1>
            </div>
            <div style={styles.searchCont}>
                <input type='text' style={styles.inputwithIcon} placeholder='search'/>
                <span style={styles.inputIcon}><FaSearch/></span>
            </div>
            <div style={styles.right}>
                <button style={styles.rightIcons}><FaEnvelope/></button>
                <button style={styles.rightIcons}><FaBell/></button>
                <MyIcons IconImg={ImageUrl} ImgAlt='A generic avatar' />
            </div>
        </header>
    )
}
export default MyHeader

const styles= {
    myHeader: {
        paddingLeft: '1%',
        paddingRight: '1%',
        backgroundColor: '#DD614A',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tangerineLogo: {
        height: '50px',
        marginRight: '10%',
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchCont: {
        border: '1px solid #3A405A',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '10px',
        width: '40%',
    },
    inputwithIcon: {
        fontSize: '15px',
        border: 'none',
        borderRadius: '10px 0px 0px 10px',
        flex: 1,
        padding: '10px',
    },
    inputIcon: {
        background: '#CDCDCD',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem',
        borderRadius: '0px 10px 10px 0px',
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '3%',
    },
    rightIcons: {
        fontSize: '25px',
        cursor: 'pointer',
        margin: '5%',
        border: 'none',
        background: 'none',
        color: 'white',
    },

}