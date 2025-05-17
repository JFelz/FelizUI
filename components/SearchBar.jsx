
import React from "react";

import '../styles/searchBar.css';


export const SearchBar = ({
  userData,
  storedInput,
  handleSearch,
  debounce,
  mode='primary'
}) => {

  return (
    <>
    <div className={`searchbar-container ${mode}`}>
      <input 
      type="text" 
      placeholder="Search..." 
      id="searchBar"
      className={`searchBar ${mode}`}
      onChange={debounce(handleSearch, 700)}
      name="SearchBar"
      />
      <div className="dropdown">
        <div className="SearchDropdown">
          {userData
          .filter((user) => 
            user.firstName === storedInput || 
            user.lastName === storedInput || 
            user.firstName + ' ' + user.lastName === storedInput 
          )
          .map((user) => user ?
          <div className="SearchedUser">
            <picture>
              <source
                srcSet={user.photoURL}
                media="(min-width: 540px)"
                style={{ width: '25px', marginRight: '10px'}}
                alt={`${user.firstName} ${user.lastName}`}
              />
            </picture>
            <img src={user.photoURL} style={{ width: '25px', marginRight: '10px'}} alt={`${user.firstName} ${user.lastName}`}/>
            <a href="/account">
              {user.firstName + ' ' + user.lastName}
            </a>
          </div>
          :
          <div className="SearchedUser">
            <p> Not Found </p>
          </div>
        )}
        </div>
      </div>
    </div>
    </>
  )
}
