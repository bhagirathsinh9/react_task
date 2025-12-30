import { useState } from 'react'

export default function App() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    skills: [],
  })
  const [user, setUser] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, gender, skills } = input

    if (!name.trim() || !email.trim() || !password) {
      alert('All fields are required')
      return
    }

    if (!gender) {
      alert('Please select a gender')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address')
      return
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long')
      return
    }

    if (skills.length === 0) {
      alert('Please select at least one skill')
      return
    }
    setUser([...user, input])
    setInput({ name: '', email: '', password: '', gender: '', skills: [] })
  }

  const handleRadio = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setInput((prev) => ({ ...prev, gender: value }))
    }
  }

  const handleCheckBox = (e) => {
    const { value, checked } = e.target

    setInput((prev) => ({
      ...prev,
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value),
    }))
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4'>
      <div className='w-full max-w-md bg-white rounded-xl shadow-xl p-6'>
        <h2 className='text-2xl font-semibold text-center mb-6'>
          Registration Form
        </h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
          {/* Name */}
          <div>
            <label className='block text-sm font-medium mb-1'>Name</label>
            <input
              type='text'
              name='name'
              value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Email */}
          <div>
            <label className='block text-sm font-medium mb-1'>Email</label>
            <input
              type='email'
              name='email'
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Password */}
          <div>
            <label className='block text-sm font-medium mb-1'>Password</label>
            <input
              type='password'
              name='password'
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Gender */}
          <div>
            <label className='block text-sm font-medium mb-1'>Gender</label>
            <div className='flex gap-4'>
              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='gender'
                  value='male'
                  checked={input.gender === 'male'}
                  onChange={handleRadio}
                />
                Male
              </label>
              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='gender'
                  value='female'
                  checked={input.gender === 'female'}
                  onChange={handleRadio}
                />
                Female
              </label>
              <label className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='gender'
                  value='other'
                  checked={input.gender === 'other'}
                  onChange={handleRadio}
                />
                Other
              </label>
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className='block text-sm font-medium mb-1'>Skills</label>
            {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'].map((skill) => (
              <label key={skill} className='flex items-center gap-2 mr-4'>
                <input
                  type='checkbox'
                  value={skill}
                  checked={input.skills.includes(skill)}
                  onChange={handleCheckBox}
                />
                {skill}
              </label>
            ))}
          </div>

          {/* Button */}
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition'
          >
            Register
          </button>
        </form>
      </div>
      {user.map((u, index) => (
        <div
          key={index}
          className='mt-6 w-full max-w-md bg-white rounded-xl shadow-md p-4'
        >
          <h3 className='text-lg font-semibold mb-2'>
            Submitted User {index + 1}
          </h3>

          <p>
            <strong>Name:</strong> {u.name}
          </p>
          <p>
            <strong>Email:</strong> {u.email}
          </p>
          <p>
            <strong>Password:</strong> {u.password}
          </p>
          <p>
            <strong>Gender:</strong> {u.gender}
          </p>
          <p>
            <strong>Skills:</strong> {u.skills.join(', ')}
          </p>
        </div>
      ))}
    </div>
  )
}
