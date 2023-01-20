import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type = 'text' placeholder='Find a user'></input>
      </div>
      <div className="userChat">
        <img src = 'https://images.pexels.com/photos/14699708/pexels-photo-14699708.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='/'></img>
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
