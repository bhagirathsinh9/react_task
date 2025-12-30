import { useState } from 'react'
import './App.css'
import UserData from './Componets/UserCard'
import { useEffect } from 'react'
import axios from 'axios'
import UserCard from './Componets/UserCard'
import { Fragment } from 'react'

function App() {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        )
        setUserData(res.data)
        console.log(res.data)
      } catch (error) {
        console.log('Error fetching user data:', error)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      }
    }

    fetchUsers()
  }, [])


  return (
    <Fragment>
      <h1 className='text-center text-2xl p-3 my-3'>List Of User</h1>
      {loading ? (
        <p className='text-center text-xl text-black'>Loading...</p>
      ) : (
        <UserCard userData={userData} />
      )}
    </Fragment>
  )
}

export default App
