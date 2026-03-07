import './style.css'
import Trash from '../../assets/trash.png'
function Home() {
  return (
    <div className='container'>
      <form action="">
        <h1>User Register</h1>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="age">Age</label>
        <input type="number" id="age" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </form>

      <div className='list'>
        <div>
          <p>Name: </p>
          <p>Age: </p>
          <p>Email: </p>
        </div>

        <button>
          <img src={Trash} alt=""/>
        </button>
      </div>

    </div>
  )
}

export default Home
