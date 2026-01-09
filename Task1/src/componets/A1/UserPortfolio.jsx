import React from 'react'
import image from '../../assets/bhagirathnakum.avif'

export default function UserPortfolio({ bio }) {
  const data = {
    name: 'Bhagirathsinh Nakum',
    age: 23,
    image: image,
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
