import React from 'react'

const User = ({ user, deleteUser, changShowModal, setIsUserToUpdate }) => {

    const handleClickDeleteUser = () => {
        deleteUser(user.id)
    }

    const handleclickUpdateUser = () => {
        changShowModal()
        setIsUserToUpdate(user)
    }

    return (
        <article className='bg-quaternary flex flex-wrap gap-3 w-[220px] justify-between rounded-xl p-4 sm:w-[550px] sm:p-5 lg:w-[560px]'>
            <div className='mx-auto sm:my-auto'>
                <img className='h-20 rounded-full' src={user.image_url || 'https://assets.stickpng.com/images/585e4beacb11b227491c3399.png'} alt="usuario" />
            </div>
            <div className='flex flex-col gap-3'>
                <h4 className='text-black font-bold text-base sm:text-xl'>{user.first_name} {user.last_name}</h4>
                <hr />
                <div className='flex flex-wrap gap-3'>
                    <div>
                        <h5 className='text-[#d6d6d6f1] sm:text-lg'>Correo</h5>
                        <span className='text-sm'>{user.email}</span>
                    </div>
                    <div className='sm:pl-5'>
                        <h5 className='text-[#d6d6d6f1] sm:text-lg'>Cumpleaños</h5>
                        <span>{user.birthday || "No Encontrado"}</span>
                    </div>
                </div>

            </div>
            <div className=' flex gap-2'>
                <button onClick={handleClickDeleteUser} className='bg-quinary hover:bg-red-500 hover:transition-all duration-300 ease-in h-10 px-2 rounded-lg '><i className='bx bx-trash text-xl'></i></button>
                <button onClick={handleclickUpdateUser} className=' bg-[#d4d4d4] hover:bg-white hover:transition-all duration-300 ease-in h-10 py-1 px-2 rounded-lg ' ><i className='bx bx-pencil text-gray-500'></i></button>
            </div>
        </article>
    )
}

export default User