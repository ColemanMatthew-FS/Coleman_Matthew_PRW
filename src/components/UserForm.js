import React from 'react'
import MyIcons from './MyIcons'
import ImageUrl from '../images/generic-avatar-1.jpeg'

const UserForm = props => {
    return (
        <article key={props.id} style={styles.article}>
            <MyIcons IconImg={ImageUrl} ImgAlt='A generic avatar' />
            <div>
                <p>{props.firstName}</p>
                <p>{props.lastName}</p>
            </div>
        </article>
    )
}

export default UserForm

const styles = {
    article: {

    }
}