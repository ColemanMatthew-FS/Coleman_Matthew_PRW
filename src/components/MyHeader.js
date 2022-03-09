import React from 'react'
import TangerineLogo from '../images/tangerinelogo.png'
import { FaSearch, FaBell } from 'react-icons/fa'
import { GiSettingsKnobs } from 'react-icons/gi'
import MyIcons from './MyIcons'
import ImageUrl from '../images/generic-avatar-1.jpeg'

const MyHeader = () => {
    return (
        //Header consists of three main divs, one to the left, one in the middle, and one on the right
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
                <button style={styles.rightIcons}><FaBell/></button>
                <button style={styles.rightIcons}><GiSettingsKnobs/></button>
                <MyIcons IconImg={ImageUrl} ImgAlt='A generic avatar' />
            </div>
        </header>
    )
}
export default MyHeader

const styles= {
    myHeader: {
        position: 'fixed',
        width: '100%',
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
        fontSize: '1rem',
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