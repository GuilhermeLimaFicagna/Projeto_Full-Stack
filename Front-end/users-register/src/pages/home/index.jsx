import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.png'
import api from '../../services/api'

function Home() {
  // to list
  const [users, setUsers] = useState([])

  // to capture and create
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  // functions
  async function GetUsers() {
    const usersApi = await api.get('/users');
    setUsers(usersApi.data)
  }

  async function postUsers() {
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

    GetUsers()
  }

  async function DeleteUsers(id) {
    await api.delete(`/users/${id}`)

    GetUsers()
  }

  useEffect(() => {
    GetUsers();
  }, []);


  return (
    <div className='container'>
      <form action="">
        <h1>User Register</h1>
        <input type="text" placeholder="Type your name" id="name" ref={inputName} />
        <input type="number" placeholder="Type your age" id="age" ref={inputAge} />
        <input type="email" placeholder="Type your email" id="email" ref={inputEmail} />

        <button type='button' onClick={postUsers}>register</button>
      </form>

      {/* User List */}
      {users.map(user => (
        <div key={user.id} className='cards'>
          <div>
            <p>Name: <span>{user.name}</span></p>
            <p>Age: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>

          <button onClick={() => DeleteUsers(user.id)}>
            <img src={Trash} alt="" />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
