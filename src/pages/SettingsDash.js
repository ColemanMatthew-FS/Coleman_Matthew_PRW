import React, {useState} from 'react'
import UserForm from '../components/UserForm'

function SettingsDash() {
    const [userData] = useState([
        
    ])
    componentDidMount() {
        const loaded = this.state.isLoaded
        if(loaded) {
            console.log("State loaded!")
        }
        else {
            console.log("State not loaded")
        }
    }
    return (
        <section style={styles.container}>
            <UserForm />
        </section>
    )
}

export default SettingsDash

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '99vh',
    }
}