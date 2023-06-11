import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const UsersForm = ({ isShowModal, createUser, isUserToUpdate, updateUser, resetModalFomr }) => {

    const { register, handleSubmit, reset } = useForm()

    const submit = (data) => {
        if (!data.birthday) data.birthday = null
        if (!data.image_url) data.image_url = null
        if (isUserToUpdate) {
            updateUser(data, reset)
        } else {
            createUser(data, reset);
        }
    }

    const handleCloseModal = () => {
        resetModalFomr(reset)

    }

    useEffect(() => {
        if (isUserToUpdate) {
            reset(isUserToUpdate)
        }
    }, [isUserToUpdate])

    return (
        <section className={`fixed top-0 left-0 right-0 h-screen bg-gray-500/70 flex justify-center items-center ${isShowModal ? "opacity-100 visible" : "opacity-0 invisible"} transition-opacity`}>
            <form onSubmit={handleSubmit(submit)} className='bg-tertiary w-[290px] p-5 flex flex-col gap-4 rounded-2xl px-10 min-[350px]:w-[330px] min-[400px]:w-[380px] min-[400px]:px-14 min-[700px]:w-[450px] min-[700px]:px-16 min-[1000px]:w-[550px] min-[1000px]:px-24'>
                {/* <h3 className='font-bold text-2xl'> nuevo usuario</h3> */}
                <div className=' flex justify-center '>
                    <img className='h-20 w-20' src="/images/logoUsuario.png" alt="" />
                </div>



                {/* //?nombre */}
                <div className='flex flex-col gap-2 '>
                    <label className='font-normal text-primary text-sm min-[700px]:text-lg' htmlFor="">Nombre</label>
                    <input placeholder='Ingrese su nombre' className='bg-tertiary text-sm outline-none border-2 border-white py-1 px-3 rounded-md min-[700px]:py-2' type="text" {...register("first_name")} />
                </div>


                {/* //?apellido*/}
                <div className='flex flex-col gap-2 '>
                    <label className='font-normal text-primary text-sm min-[700px]:text-lg' htmlFor="">Apellido</label>
                    <input placeholder='Ingrese su Apellido' className='bg-tertiary text-sm outline-none border-2 border-white py-1 px-3 rounded-md min-[700px]:py-2' type="text" {...register("last_name")} />
                </div>

                {/* //?correo */}
                <div className='flex flex-col gap-2 '>
                    <label className='font-normal text-primary text-sm min-[700px]:text-lg' htmlFor="">Correo</label>
                    <input placeholder='Ingrese su Correo' className='bg-tertiary text-sm outline-none border-2 border-white py-1 px-3 rounded-md min-[700px]:py-2' type="email" {...register("email")} />
                </div>

                {/* //?contraseña */}
                <div className='flex flex-col gap-2'>
                    <label className='font-normal text-primary text-sm min-[700px]:text-lg' htmlFor="">Contraseña</label>
                    <input placeholder='Ingrese su Contraseña' className='bg-tertiary text-sm outline-none border-2 border-white py-1 px-3 rounded-md min-[700px]:py-2' type="password" {...register("password")} />
                </div>

                {/* //?cumpleaños*/}
                <div className='flex flex-col gap-2'>
                    <label className='font-normal text-primary text-sm min-[700px]:text-lg' htmlFor="">Cumpleaños </label>
                    <input placeholder='Ingrese su nombre' className='bg-tertiary text-sm outline-none border-2 border-white py-1 px-3 rounded-md min-[700px]:py-2' type="date" {...register("birthday")} />
                </div>

                {/* //?imagen */}
                <div className='flex flex-col gap-2 pb-4'>
                    <label className='font-normal text-primary text-sm min-[700px]:text-lg' htmlFor="">Imagen</label>
                    <input placeholder='Ingrese su nombre' className='bg-tertiary text-sm outline-none border-2 border-white py-1 px-3 rounded-md min-[700px]:py-2' type="text" {...register("image_url")} />
                </div>

                <div className='flex flex-col gap-2 pb-3'>
                    <button className='font-medium text-[15px] bg-secondary hover:bg-primary hover:transition-all duration-300 ease-in text-black py-1 px-16 rounded-md shadow-2xl ' >{isUserToUpdate ? "Guardar cambios editados" : "Guardar usuario"}</button>
                    <button onClick={handleCloseModal} className='hover:text-black hover:bg-quinary hover:transition-all duration-300 ease-in py-1 hover:rounded-md shadow-2xl'>Cancelar</button>
                </div>

            </form>
        </section>
    )
}
