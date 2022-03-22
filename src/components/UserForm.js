import React from 'react'
import Avatar from './Avatar'
import MyBtn from './buttons/MyBtn'

const UserForm = props => {
    return (
        <article key={props.id} style={styles.article}>
            <h1 style={styles.header}>Edit Profile</h1>
            <Avatar AvImg={props.picture} ImgAlt='A photo of a person' />
            <div style={styles.inputPair}>
                <div style={styles.input}>
                    <label for="firstName" style={styles.label}>First Name</label>
                    <input type="text" id="firstName" name="firstName" value={props.firstName} style={styles.text}></input>
                </div>
                <div style={styles.input}>
                    <label for="lastName" style={styles.label}>Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={props.lastName} style={styles.text}></input>
                </div>
            </div>
            <div style={styles.input}>
                <label for="street" style={styles.label}>Street</label>
                <input type="text" id="street" name="street" value={props.street} style={styles.text}></input>
            </div>
            <div style={styles.inputPair}>
                <div style={styles.input}>
                    <label for="city" style={styles.label}>City</label>
                    <input type="text" id="city" name="city" value={props.city} style={styles.text}></input>
                </div>
                <div style={styles.input}>
                    <label for="state" style={styles.label}>State</label>
                    <input type="text" id="state" name="state" value={props.state} style={styles.text}></input>
                </div>
            </div>
            <div style={styles.input}>
                <label for="postcode" style={styles.label}>Postcode</label>
                <input type="text" id="postcode" name="postcode" value={props.postcode} style={styles.text}></input>
            </div>
            <div style={styles.inputPair}>
                <div style={styles.input}>
                    <label for="username" style={styles.label}>Username</label>
                    <input type="text" id="username" name="username" value={props.username} style={styles.text}></input>
                </div>
                <div style={styles.input}>
                    <label for="password" style={styles.label}>Password</label>
                    <input type="password" id="password" name="password" value={props.password} style={styles.text}></input>
                </div>
            </div>
            <div style={styles.input}>
                <label for="phone" style={styles.label}>Phone Number</label>
                <input type="tel" id="phone" name="phone" value={props.phone} style={styles.text}></input>
            </div>
            <MyBtn btnText="Save" />
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