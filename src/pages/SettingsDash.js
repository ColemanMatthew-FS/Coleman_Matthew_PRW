import React, {useEffect, useState} from 'react'
import UserForm from '../components/UserForm'

function SettingsDash() {
    /*const [profileState, updateProfile] = useState([
        {
            userData: [],
            isLoaded: true
        }
    ])*/
    const [userData, updateUser] = useState([])
    const [isLoaded, updateLoaded] = useState([{isLoaded: true}])
    //this runs when the program first starts
    useEffect(() => {
        //if the program has not run, it initializes
            const loaded = isLoaded[0].isLoaded
            if(loaded) {
                fetchData()
            }
            else {
                console.log("State not loaded")
            }
        })
    async function fetchData(){
        //fetches data from the API
        await fetch('https://randomuser.me/api/')
        .then(response => response.json())
        //Maps our data into a new array
        .then(responseJSON => responseJSON.results.map( user =>({
            firstName: `${user.name.first}`,
            lastName: `${user.name.last}`,
            street: `${user.location.street.number + ' ' + user.location.street.name}`,
            city: `${user.location.city}`,
            state: `${user.location.state}`,
            postcode: `${user.location.postcode}`,
            username: `${user.login.username}`,
            password: `${user.login.password}`,
            phone: `${user.phone}`,
            picture: `${user.picture.large}`
        })))
        //The state is updated with that data, and will no longer run again
        .then(data => updateUser([{
            userData: data
        }]))
        .then(data => updateLoaded([{isLoaded: false}]))
        .catch(err => console.log(err))
    }
    return (
        <section style={styles.container}>
            {/* Maps our state into a new form */}
            {!isLoaded[0].isLoaded ? userData[0].userData.map(user => { const {firstName, lastName, street, city, state, postcode, username, password, phone, picture} = user
            return <UserForm 
                    key={username}
                    firstName={firstName}
                    lastName={lastName}
                    street={street}
                    city={city}
                    state={state}
                    postcode={postcode}
                    username={username}
                    password={password}
                    phone={phone}
                    picture={picture}
                    />}): console.log("Still loading")}
        </section>
    )
}

export default SettingsDash

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '99vh',
        alignItems: 'center'
    }
}