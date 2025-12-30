import React from 'react'

export default function UserCard({ userData }) {
  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {userData?.slice(0, 6).map((user) => (
        <div
          key={user.id}
          className='max-w-4xl p-6 mx-auto bg-white border rounded-xl shadow-md hover:shadow-lg transition'
        >
          {/* Header */}
          <div className='mb-4'>
            <h2 className='text-xl font-semibold text-gray-800'>{user.name}</h2>
            <p className='text-sm text-gray-500'>@{user.username}</p>
          </div>

          {/* Contact Info */}
          <div className='space-y-2 text-sm text-gray-700'>
            <p>
              <span className='font-medium'>📧 Email:</span> {user.email}
            </p>
            <p>
              <span className='font-medium'>📞 Phone:</span> {user.phone}
            </p>
            <p>
              <span className='font-medium'>🌐 Website:</span>{' '}
              <a
                href={`https://${user.website}`}
                target='_blank'
                rel='noreferrer'
                className='text-blue-600 hover:underline'
              >
                {user.website}
              </a>
            </p>
          </div>

          {/* Address */}
          <div className='mt-4 text-sm text-gray-700'>
            <p className='font-medium'>📍 Address</p>
            <p>
              {user?.address?.street}, {user?.address?.suite}
            </p>
            <p>
              {user?.address?.city} - {user?.address?.zipcode}
            </p>
          </div>

          {/* Company */}
          <div className='mt-4 p-3 bg-gray-100 rounded-lg'>
            <p className='font-medium text-gray-800'>🏢 Company</p>
            <p className='text-sm'>{user?.company?.name}</p>
            <p className='text-xs italic text-gray-600'>
              "{user?.company?.catchPhrase}"
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
