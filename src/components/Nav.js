import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineInbox } from 'react-icons/ai'
import { MdAttachMoney } from 'react-icons/md'
import { BsFillPiggyBankFill } from 'react-icons/bs'
import { MdMoneyOff } from 'react-icons/md'

//This is for the nav options on the left
const Nav = () => {
    return (
        <nav style={styles.article}>
            <ul style={styles.list}>
                <li>
                    <Link style={styles.link} to="/Dashboard">
                        <p style={styles.linkPara}><AiFillHome /></p>
                        <p style={styles.linkPara}>Dashboard</p>
                    </Link>
                </li>
                <li>
                    <Link style={styles.link} to="/ReportsDash">
                        <p style={styles.linkPara}><AiOutlineInbox /></p>
                        <p style={styles.linkPara}>Reports</p>
                    </Link>
                </li>
                <li>
                    <Link style={styles.link} to="/IncomeDash">
                        <p style={styles.linkPara}><MdAttachMoney /></p>
                        <p style={styles.linkPara}>Income</p>
                    </Link>
                </li>
                <li>
                    <Link style={styles.link} to="/SavingsDash">
                        <p style={styles.linkPara}><BsFillPiggyBankFill /></p>
                        <p style={styles.linkPara}>Savings</p>
                    </Link>
                </li>
                <li>
                    <Link style={styles.link} to="/SpendingDash">
                        <p style={styles.linkPara}><MdMoneyOff /></p>
                        <p style={styles.linkPara}>Spending</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav

const styles={
    article: {
        padding: '1%',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1.5rem',
        backgroundColor: '#3A405A',
        color: 'white',
    },
    link: {
        display: 'flex',
        color: 'white',
        textDecoration: 'none',
    },
    linkPara: {
        margin: '3%',
    },
    list: {
        margin: '10px 15px 10px 10px',
        padding: '1%',
        listStyleType: 'none',
    },
    button: {
        fontWeight: 'bold',
        backgroundColor: '#3A405A',
        color: 'white',
        padding: '1%',
        margin: '3%',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        width: '200px',
        height: '30px',
    }
}