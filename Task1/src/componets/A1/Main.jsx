import React from 'react'
import UserPortfolio from './UserPortfolio'

export default function Main() {
  const bio =
    'Hello I am a  MERN Stack developer with a passion for creating innovative solutions.'
  return (
    <>
      <UserPortfolio bio={bio} />
    </>
  )
}
