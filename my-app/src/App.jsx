import { useState } from 'react'
import './App.css'
import phonesData from './phonesData.js'

function App() {
  

  return (
    <>
      <div className='main'>
        <div className='title'>
          <h1>UseReducer</h1>
          <img></img>
        </div>
        <div className='shop-content'>
          <h2>Your bag</h2>
          <ul className='bag-content'>
            <li className='single-bag'>
              <img src="https://www.course-api.com/images/cart/phone-1.png"/>
              <div className='phone-info'>
                <h3>Samsung galaxy S8</h3>
                <h4>$399.99</h4>
                <button>Remove</button>
              </div>
              <div className='brackets'>
                <button>
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 11v6l-5 -4l-5 4v-6l5 -4z" /></svg>
                </button>
                <span>1</span>
                <button>
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 13v-6l-5 4l-5 -4v6l5 4z" /></svg>
                </button>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </>
  )
}

export default App
