import React, { useState } from 'react'

export default function Todo() {
  const [inputData, setInputData] = useState('')
  const [list, setList] = useState([])

  const handleInput = (e) => {
    setInputData(e.target.value)
  }

  const submitHandler = () => {
    if (inputData.trim().length === 0) {
      alert('Please enter a valid item')
    } else {
      setList([...list, inputData])
      setInputData('')
    }
  }

  const deleteItems = (index) => {
    const filteredItem = list.filter((item, i) => {
      return i !== index
    })
    setList(filteredItem)
  }

  return (
    <div>
      <h1>Task - 2 Todo </h1>
      <input
        type='text'
        placeholder='Enter List item'
        value={inputData}
        onChange={handleInput}
      />
      <button onClick={submitHandler}>Add</button>
      <h1>Todo List</h1>
      {list.length === 0 ? (
        <p>No items in the list</p>
      ) : (
        list.map((item, index) => {
          return (
            <>
              <div
                key={index}
                style={{
                  padding: '4px',
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                }}
              >
                {item}
                <button
                  onClick={() => {
                    deleteItems(index)
                  }}
                >
                  Delete
                </button>
              </div>
            </>
          )
        })
      )}
    </div>
  )
}
