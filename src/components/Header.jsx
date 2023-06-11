import React from 'react'

const Header = ({ changShowModal }) => {

    const handleClickShowModal = () => { 
        changShowModal()
    }

    return (
        <section className=' flex flex-col items-center py-16 gap-10'>
            <h1 className='font-bold text-3xl text-primary sm:text-5xl'>Lista de usuarios</h1>
            <button onClick={handleClickShowModal} className='font-medium text-[16px] bg-secondary text-black py-2 px-16 rounded-md  hover:bg-primary hover:transition-all duration-300 ease-in sm:text-2xl'>Crear nuevo usuario</button>
        </section>
    )
}

export default Header