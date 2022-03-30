import React from 'react'
import Avatar from './Avatar'
import MyBtn from './buttons/MyBtn'

const UserForm = props => {
    return (
        <article key={props.id} style={styles.article}>
            <h1 style={styles.header}>Edit Profile</h1>
            <Avatar AvImg={props.picture} ImgAlt='A photo of a person' />
            <form>
                <div style={styles.inputPair}>
                    <div style={styles.input}>
                        <label htmlFor="firstName" style={styles.label}>First Name</label>
                        <input type="text" id="firstName" name="firstName" defaultValue={props.firstName} style={styles.text}></input>
                    </div>
                    <div style={styles.input}>
                        <label htmlFor="lastName" style={styles.label}>Last Name</label>
                        <input type="text" id="lastName" name="lastName" defaultValue={props.lastName} style={styles.text}></input>
                    </div>
                </div>
                <div style={styles.input}>
                    <label htmlFor="street" style={styles.label}>Street</label>
                    <input type="text" id="street" name="street" defaultValue={props.street} style={styles.text}></input>
                </div>
                <div style={styles.inputPair}>
                    <div style={styles.input}>
                        <label htmlFor="city" style={styles.label}>City</label>
                        <input type="text" id="city" name="city" defaultValue={props.city} style={styles.text}></input>
                    </div>
                    <div style={styles.input}>
                        <label htmlFor="state" style={styles.label}>State</label>
                        <input type="text" id="state" name="state" defaultValue={props.state} style={styles.text}></input>
                    </div>
                </div>
                <div style={styles.input}>
                    <label htmlFor="postcode" style={styles.label}>Postcode</label>
                    <input type="text" id="postcode" name="postcode" defaultValue={props.postcode} style={styles.text}></input>
                </div>
                <div style={styles.inputPair}>
                    <div style={styles.input}>
                        <label htmlFor="username" style={styles.label}>Username</label>
                        <input type="text" id="username" name="username" defaultValue={props.username} style={styles.text}></input>
                    </div>
                    <div style={styles.input}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input type="password" id="password" name="password" defaultValue={props.password} style={styles.text}></input>
                    </div>
                </div>
                <div style={styles.input}>
                    <label htmlFor="phone" style={styles.label}>Phone Number</label>
                    <input type="tel" id="phone" name="phone" defaultValue={props.phone} style={styles.text}></input>
                </div>
                <MyBtn btnText="Save" />
            </form>
        </article>
    )
}

export default UserForm

const styles = {
    header: {
        fontSize: '2rem',
        alignSelf: 'center',
    },
    article: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    input: {
        display: 'flex',
        flexDirection: 'column',
        margin: '5px',
    },
    inputPair: {
        display: 'flex',
        flexDirection: 'row',
    },
    label: {
        fontSize: '1rem',
        margin: '2px',
    },
    text: {
        border: '1px solid #3A405A',
        borderRadius: '5px',
        padding: '5px',
        margin: '2px',
        background: '#F0F0F0',
    },
}