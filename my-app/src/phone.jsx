import Button from "./Button";
import './Button.css'

const SinglePhone = ({device, removePhone, toggleAmount}) => {
    const { id, name, price, amount, image } = device;

    //Iskoristiti phone state posaljem id u app.jsx nadem telefon i iskoristim funckije increase i decrease amount
    return(
        <li className='single-bag' key={id}>
            <img src={image}/>
            <div className='phone-info'>
                <h3>{name}</h3>
                <h4>${price}</h4>
                <button onClick={() => {removePhone(id)}}>Remove</button>
            </div>
            <div className='brackets'>
                <Button variation="primary" onClick={() => toggleAmount(id, 'increase')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 11v6l-5 -4l-5 4v-6l5 -4z" /></svg>
                </Button>
                <span>{amount}</span>
                <Button variation="ghost" onClick={() => toggleAmount(id, 'decrease')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 13v-6l-5 4l-5 -4v6l5 4z" /></svg>
                </Button>
            </div>
        </li>
    
    )
}

export default SinglePhone;