
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { UsersForm } from './components/UsersForm'
import { set } from 'react-hook-form'
import axios from 'axios'
import UserList from './components/UserList'

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
    image_url: ''
  }
  ///?----------------------------------------------------------------->
  const changShowModal = () => setIsShowModal(!isShowModal)

  const getAllUsers = () => {
    const url = `${BASE_URL}/users/`

    axios.get(url)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))
  }

  const createUser = (data, reset) => {
    const url = `${BASE_URL}/users/`

    axios.post(url, data)
      .then(() => {
        getAllUsers()
        resetModalFomr(reset)
      })
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    const url = `${BASE_URL}/users/${id}/`

    axios.delete(url)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))

  }

  const updateUser = (data, reset) => {
    const url = `${BASE_URL}/users/${isUserToUpdate.id}/`

    axios.patch(url, data)
      .then(() => {
        getAllUsers()
        resetModalFomr(reset)
      })
      .catch((err) => console.log(err))
  }

  const resetModalFomr = (reset) => {
    setIsShowModal(false)
    reset(DEFAULT_VALUES)
    setIsUserToUpdate(null)
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
        />


        <UserList users={users} deleteUser={deleteUser} changShowModal={changShowModal} setIsUserToUpdate={setIsUserToUpdate} />
      </header>
    </main>
  )
}

export default App
