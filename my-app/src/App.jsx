import { useEffect, useState } from 'react'
import './App.css'
import phonesData from './phonesData.js'
import SinglePhone from './phone.jsx';

function App() {
  const [ phone, setPhone ] = useState(phonesData);
  
  const price = phone.reduce((acc, phone) => acc + (phone.amount * phone.price), 0)
  const amount = phone.reduce((acc, phone) => acc + parseInt(phone.amount), 0)
  console.log(amount)
    const removePhone = (id) => {
        setPhone(prev => prev.filter(device => device.id !== id)
      )
    }
    const clearCart = () => {
      setPhone([])
    }
    const toggleAmount = (id, number) => {
      setPhone(prev => prev.map(device => device.id === id ? {...device, amount: number} : device));
    }
    //Maknuti useEffect i napraviti constantu
    
   /*  <Button variation="primary">Bernard</Button>
        <Button variation="ghost">Bernard</Button> */

    //Napravi komponentu btn 
    //Ta komponenta treba da primi 2 propsa
    //Variation i clickHandler 
    //Ako primi variation npr ghost znam da je sivi 
    //Ako primi variation primary znam da je plavi 

     
    return (
        <>
          <div className='main'>
              <div className='title'>
                <h1>UseReducer</h1>
                <div className='shopping-cart'>
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" />
                  </svg>
                  <svg id='bubble' xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" />
                  </svg>
                  <h2>{amount}</h2>
                </div>
                
              </div>
              <div className='shop-content'>
                <h2>Your bag</h2>
                {phone.length != 0 ? (
                  <>
                    <ul className='bag-content'>
                      {phone.map(device => {
                          return(
                            <SinglePhone key={device.id} device={device} removePhone={removePhone} toggleAmount={toggleAmount}/>
                          )
                        }
                      )}
                    </ul>
                    <hr></hr>
                    <div className='total-price'>
                      <h5>Total</h5>
                      <h6>${price}</h6>
                    </div>
                    <button className='clear-btn' onClick={clearCart}>Clear cart</button>
                  </>
                  ) : (
                    <p>is currently empty</p>
                  )
                }
                 
              </div>
          </div>
      </>
  )
}

export default App
