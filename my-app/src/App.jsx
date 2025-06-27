import { useState } from 'react'
import './App.css'
import phonesData from './phonesData.js'
import SinglePhone from './phone.jsx';

function App() {
  const [ phone, setPhone ] = useState(phonesData);

  return (
      <>
        <div className='main'>
            <div className='title'>
              <h1>UseReducer</h1>
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
            </div>
            <div className='shop-content'>
              <h2>Your bag</h2>
                <ul className='bag-content'>
                  {phone.map(device => {
                  
                    return(
                      <SinglePhone key={device.id} device={device}/>
                    )
                  })}
                </ul>
                <hr></hr>
                <div className='total-price'>
                  <h5>Total</h5>
                  <h6>$2199.96</h6>
                </div>
                <button className='clear-btn'>Clear cart</button>
            </div>
        </div>
    </>
  )
}

export default App
