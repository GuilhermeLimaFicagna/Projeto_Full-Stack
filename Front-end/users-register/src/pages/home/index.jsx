import './style.css'
import Trash from '../../assets/trash.png'
function Home() {

  const users = [{
    id: '3412341324',
    name: 'gui',
    age: 19,
    email: 'gui@gmail.com'
  },
  {
    id: '34523487',
    name: 'Araujo',
    age: 19,
    email: 'araujo@gmail.com'
  },
  {
    id: '1412341324',
    name: 'Bia',
    age: 18,
    email: 'Bia@gmail.com'
  }]

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
