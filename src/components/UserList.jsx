import React from 'react'
import User from './User'

const UserList = ({ users, deleteUser, changShowModal, setIsUserToUpdate }) => {
    return (
        <section className='flex flex-col items-center gap-4 pb-10'>

            {
                users.map((user) => <User key={user.id} user={user} deleteUser={deleteUser} changShowModal={changShowModal} setIsUserToUpdate={setIsUserToUpdate} />)
            }

        </section>
    )
}

export default UserList