import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { UsersForm } from './components/UsersForm'
import { set } from 'react-hook-form'
import axios from 'axios'
import UserList from './components/UserList'
import swal from 'sweetalert'
import './styles/swal.css'

function App() {
  const [isUserToUpdate, setIsUserToUpdate] = useState(null)
  const [isShowModal, setIsShowModal] = useState(false)
  const [users, setUsers] = useState([])

  ///? componentes de app ------------------------------------------>
  const BASE_URL = 'https://users-crud.academlo.tech'

  const DEFAULT_VALUES = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: '',
    image_url: '',
  }
  ///?----------------------------------------------------------------->
  const changShowModal = () => setIsShowModal(!isShowModal)

  const getAllUsers = () => {
    const url = `${BASE_URL}/users/`

    axios
      .get(url)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))
  }

  const createUser = (data, reset) => {
    const url = `${BASE_URL}/users/`

    axios
      .post(url, data)
      .then(() => {
        getAllUsers()
        resetModalFomr(reset)
        changShowModal()
        showAlertSucces()
      })
      .catch(() => {
        showAlertError()
      })
  }

  const deleteUser = (id) => {
    const url = `${BASE_URL}/users/${id}/`

    swal({
      icon: 'warning',
      title: '¿Estás seguro que deseas eliminar el usuario?',
      buttons: ['No', 'Sí'],
    })
      .then((res) => {
        if (res) {
          getAllUsers()
          axios
            .delete(url)
            .then(() => {
              getAllUsers()
              swal({
                icon: 'success',
                title: 'Usuario eliminado con éxito',
                button: 'OK',
              })
            })
            .catch((err) => console.log(err))
        } else {
          swal({
            icon: 'warning',
            title: 'No se realizó la acción',
            button: 'OK',
          })
        }
      })

      .catch((err) => console.log(err))
  }

  const updateUser = (data, reset) => {
    const url = `${BASE_URL}/users/${isUserToUpdate.id}/`

    axios
      .patch(url, data)
      .then(() => {
        getAllUsers()
        resetModalFomr(reset)
        showEditUserSuccess()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const resetModalFomr = (reset) => {
    setIsShowModal(false)
    reset(DEFAULT_VALUES)
    setIsUserToUpdate(null)
  }

  const showAlertSucces = () => {
    swal({
      icon: 'success',
      title: 'Usuario creado con éxito',
      button: {
        text: 'OK',
      },
    })
  }

  const showAlertError = () => {
    swal({
      icon: 'error',
      title: 'No se realizó la acción',
      button: 'OK',
    })
  }

  const showEditUserSuccess = () => {
    swal({
      icon: 'success',
      title: 'Usuario editado con éxito',
      button: 'OK',
    })
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <main className='bg-[url(/images/fondo.jpg)] min-h-screen bg-cover bg-center font-["Lato"] text-white'>
      <header>
        <Header changShowModal={changShowModal} />

        <UsersForm
          isShowModal={isShowModal}
          createUser={createUser}
          isUserToUpdate={isUserToUpdate}
          updateUser={updateUser}
          resetModalFomr={resetModalFomr}
          changShowModal={changShowModal}
        />

        <UserList
          users={users}
          deleteUser={deleteUser}
          changShowModal={changShowModal}
          setIsUserToUpdate={setIsUserToUpdate}
        />

        {/* <ModalState /> */}
      </header>
    </main>
  )
}

export default App
