import { useState } from "react";

const SinglePhone = ({device, removePhone, foundPhone}) => {
    const { id, name, price, amount, image } = device;

    const [ getAmount, setAmount ] = useState(parseInt(amount));

    const changeAmount = (key, id) => {
        let newAmount = getAmount;
            if(key === 1){
                newAmount = getAmount + 1;
                setAmount(newAmount)
            }
            if(key === 2){
                if(amount > 0){
                    newAmount = getAmount - 1;
                    setAmount(newAmount)
                }
            }

        foundPhone(id, newAmount)
    }
    
    return(
        <li className='single-bag' key={id}>
            <img src={image}/>
            <div className='phone-info'>
                <h3>{name}</h3>
                <h4>${price}</h4>
                <button onClick={() => {removePhone(id)}}>Remove</button>
            </div>
            <div className='brackets'>
                <button key={1} onClick={(() => {changeAmount(1, id)})}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 11v6l-5 -4l-5 4v-6l5 -4z" /></svg>
                </button>
                <span>{getAmount}</span>
                <button key={2} onClick={(() => {changeAmount(2, id)})}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 13v-6l-5 4l-5 -4v6l5 4z" /></svg>
                </button>
            </div>
        </li>
    
    )
}

export default SinglePhone;