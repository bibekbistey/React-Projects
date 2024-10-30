import React, { useContext } from 'react';
import CardContext from '../context/CardContext';

const Cart = () => {
  const { cart } = useContext(CardContext); 
  const total=cart.reduce((initial,added)=>initial+added.price,0)
  console.log("cart:",cart)// Destructuring to get cart

  return (
    <div>
      <h2 className='font-bold text-xl mb-4'>Cart</h2>
      <div>
        {/* Check if cart has items */}
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className='flex space-x-4 border-b pb-4 mb-4'>
                <img src={item.img} alt={item.name} className='w-16 h-16 object-cover' />
                <div>
                  <p className='font-semibold'>{item.name}</p>
                  <p className='text-gray-600'>NPR: {item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div>Score:{total}</div>
      </div>
    </div>
  );
};

export default Cart;
