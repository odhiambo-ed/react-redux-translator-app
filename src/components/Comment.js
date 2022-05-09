import React from 'react'

const { faker } = require('@faker-js/faker');

function Comment(props) {
  return (
          <div className="comment">
              <a href="/" className='avatar'>
                  <img alt="avatar" src={props.userImage} />
              </a>
              <div className="content">
                  <a href="/" className='author'>
                      {props.author}
                  </a>
                  <div className="metadata">
                      <span className='date'>Today at 6.00pm</span>
                  </div>
                  <div className="text">Excellent!!! Keep it up</div>
              </div>
          </div>
  )
}

export default Comment