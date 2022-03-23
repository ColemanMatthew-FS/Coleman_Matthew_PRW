import React, {useEffect, useState} from 'react'
import UserForm from '../components/UserForm'

function SettingsDash() {
    //userData is initially null to stop the page from trying to render it while it is empty
    const [userData, updateUser] = useState(null)
    //this runs when the program first starts
    useEffect(() => {
        async function fetchData(){
            //fetches data from the API
            const response = await fetch('https://randomuser.me/api/')
            .catch(err => console.log(err))
            const data = await response.json()
            //Maps our data into a new array
            const user = data.results.map( user =>({
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
            }))
            //The state is updated with that data, and will no longer run again
            updateUser([{
                userData: user
            }])
        }
        fetchData()
        }, [])
    
    return (
        <section style={styles.container}>
            {/* Maps our state into a new form */}
            {/* the && operator makes sure that this code only runs when userData is not null */}
            {userData && <UserForm 
                    key={userData[0].userData[0].username}
                    firstName={userData[0].userData[0].firstName}
                    lastName={userData[0].userData[0].lastName}
                    street={userData[0].userData[0].street}
                    city={userData[0].userData[0].city}
                    state={userData[0].userData[0].state}
                    postcode={userData[0].userData[0].postcode}
                    username={userData[0].userData[0].username}
                    password={userData[0].userData[0].password}
                    phone={userData[0].userData[0].phone}
                    picture={userData[0].userData[0].picture}
                    />}
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