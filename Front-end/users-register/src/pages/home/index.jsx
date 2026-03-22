import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.png'
import api from '../../services/api'

function Home() {
  
  const [users, setUsers] =  useState([])

  async function GetUsers() {
    const usersApi = await api.get('/users');
    setUsers(usersApi.data)
  }

  useEffect(() => {
    GetUsers();
  }, []);


  return (
    <div className='container'>
      <form action="">
        <h1>User Register</h1>
        <input type="text" placeholder="Type your name" id="name" />
        <input type="number" placeholder="Type your age" id="age" />
        <input type="email" placeholder="Type your email" id="email" />

        <button type='button'>register</button>
      </form>

      {/* User List */}
      {users.map(user => (
        <div key={user.id} className='cards'>
          <div>
            <p>Name: <span>{user.name}</span></p>
            <p>Age: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>

          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
