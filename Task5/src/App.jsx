import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import UserCard from './componets/UserCard'
import { Fragment } from 'react'
import { getUsers } from './utils/user.service'

function App() {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const data = await getUsers()
        setUserData(data)
      } catch (error) {
        console.log('Error fetching user data:', error)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 200)
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
