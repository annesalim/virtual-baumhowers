import { useState } from 'react';
import './App.css';

const menuItems = [
  { id: 1, name: "Cheeseburger", price: 8.99 },
  { id: 2, name: "Spicy Chicken Wings", price: 7.49 },
  { id: 3, name: "House Salad", price: 6.99 },
  { id: 4, name: "Craft Beer", price: 4.99 },
];

function Menu() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const placeOrder = async () => {
    try {
      const res = await fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart }),
      });

      if (res.ok) {
        alert('Order placed!');
        setCart([]); // Clear cart
      } else {
        alert('Failed to place order');
        console.log("Failed request:", res);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="menu-section">
      <h2>Our Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      {cart.length > 0 && (
        <div className="cart">
          <h3>Your Cart:</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>{item.name} - ${item.price.toFixed(2)}</li>
            ))}
          </ul>
          <button onClick={placeOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
}

export default Menu;