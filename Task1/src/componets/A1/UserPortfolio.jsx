import React from 'react'
// import image from '../../assets/tempCarphoto.avif'

export default function UserPortfolio({ bio }) {
  const data = {
    name: 'Bhagirathsinh Nakum',
    age: 23,
    image:
      'https://media.licdn.com/dms/image/v2/D4D35AQFqkshe9-_mFQ/profile-framedphoto-shrink_400_400/B4DZpJCOGcGgAc-/0/1762161910429?e=1767070800&v=beta&t=jzPE_n_EnOQ4_XpMIO-FQIUrk-fctjOU2-JL8vvYBzM',
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <h1>User Portfolio</h1>
      <img
        src={data.image}
        alt='User Image'
        width={200}
        height={200}
        style={{ borderRadius: '50%' }}
      />
      <div>
        <h2>Name: {data.name}</h2>
        <p>Age: {data.age}</p>
        <p>Bio: {bio}</p>
      </div>
    </div>
  )
}
