import React, { useState, useEffect } from 'react';
 // We'll create this CSS file

const Cart = () => {
  const [checkoutStage, setCheckoutStage] = useState('cart');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showPaymentNotification, setShowPaymentNotification] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('orderHistory')) || [];
    setOrderHistory(history);
  }, []);

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseInt(item.price.replace('₹', ''), 10);
    return total + price * item.quantity;
  }, 0);

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.reload();
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.reload();
  };

  const handleProceedToCheckout = () => {
    setCheckoutStage('payment');
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentSuccess('processing');

    setTimeout(() => {
      setPaymentSuccess(true);
      setShowPaymentNotification(true);

      const bill = {
        id: Date.now(),
        items: [...cartItems],
        total: totalPrice,
        paymentMethod,
        date: new Date().toLocaleString(),
        status: 'completed'
      };

      const existingHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
      const updatedHistory = [...existingHistory, bill];
      localStorage.setItem('orderHistory', JSON.stringify(updatedHistory));
      setOrderHistory(updatedHistory);

      setTimeout(() => {
        localStorage.removeItem('cart');
        setCheckoutStage('bill');
      }, 2000);
    }, 1500);
  };

  const handleRefund = (orderId) => {
    if (window.confirm('Are you sure you want to refund this order?')) {
      const updatedHistory = orderHistory.map(order =>
        order.id === orderId ? { ...order, status: 'refunded' } : order
      );

      localStorage.setItem('orderHistory', JSON.stringify(updatedHistory));
      setOrderHistory(updatedHistory);
      alert('Refund processed successfully!');
    }
  };

  useEffect(() => {
    if (showPaymentNotification) {
      const timer = setTimeout(() => {
        setShowPaymentNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPaymentNotification]);

  const generateBill = () => {
    const latestOrder = orderHistory[orderHistory.length - 1];

    return (
      <div className="bill-container">
        <h2>🧾 Order Receipt</h2>
        <p className="success-message">Thank you for your payment!</p>
        
        <div className="order-summary">
          <h3>Order Summary</h3>
          <ul>
            {latestOrder.items.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price} × {item.quantity}
              </li>
            ))}
          </ul>
          
          <div className="order-total">
            <p>Total Paid: ₹{latestOrder.total}</p>
            <p>Payment Method: {latestOrder.paymentMethod}</p>
            <p>Date: {latestOrder.date}</p>
            <p>Status: {latestOrder.status}</p>
          </div>
        </div>
        
        <div className="button-group">
          <button onClick={() => window.location.reload()} className="btn back-btn">
            Back to Shop
          </button>
          <button onClick={() => setShowHistory(true)} className="btn history-btn">
            View Order History
          </button>
        </div>
      </div>
    );
  };

  const renderOrderHistory = () => (
    <div className="history-container">
      <h2>📋 Your Order History</h2>
      <button 
        onClick={() => setShowHistory(false)} 
        className="btn back-btn"
      >
        Back to Current Order
      </button>
      
      {orderHistory.length === 0 ? (
        <p className="empty-message">No order history found</p>
      ) : (
        <div className="order-list">
          {orderHistory.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <h3>Order #{order.id}</h3>
                <span className={`status-badge ${order.status}`}>
                  {order.status}
                </span>
              </div>
              
              <p>Date: {order.date}</p>
              <p>Total: ₹{order.total}</p>
              <p>Payment Method: {order.paymentMethod}</p>
              
              <div className="order-items">
                <p>Items:</p>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} - ₹{item.price} × {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
              
              {order.status === 'completed' && (
                <button 
                  onClick={() => handleRefund(order.id)}
                  className="btn refund-btn"
                >
                  Request Refund
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderPaymentForm = () => (
    <div className="payment-container">
      <h2>Payment</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div className="form-group">
          <label>
            Choose Payment Method:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">-- Select --</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="UPI">UPI</option>
            </select>
          </label>
        </div>

        {paymentMethod === 'UPI' && (
          <div className="form-group">
            <label>
              UPI ID:
              <input type="text" placeholder="yourname@upi" required />
            </label>
          </div>
        )}

        {['Credit Card', 'Debit Card'].includes(paymentMethod) && (
          <>
            <div className="form-group">
              <label>
                Card Number:
                <input 
                  type="text" 
                  placeholder="1234 5678 9012 3456" 
                  required 
                />
              </label>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>
                  Expiry Date:
                  <input type="text" placeholder="MM/YY" required />
                </label>
              </div>
              
              <div className="form-group">
                <label>
                  CVV:
                  <input type="text" placeholder="123" required />
                </label>
              </div>
            </div>
          </>
        )}

        <div className="total-amount">
          <p>Total Amount: ₹{totalPrice}</p>
        </div>

        <div className="button-group">
          <button 
            type="submit" 
            className="btn pay-btn"
            disabled={paymentSuccess === 'processing'}
          >
            {paymentSuccess === 'processing' ? 'Processing...' : 'Pay Now'}
          </button>
          
          <button 
            onClick={() => setCheckoutStage('cart')} 
            className="btn back-btn"
          >
            Back to Cart
          </button>
        </div>
      </form>
    </div>
  );

  const renderCart = () => (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              
              <div className="quantity-control">
                <span>Qty:</span>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
            
            <button 
              onClick={() => removeFromCart(item.id)} 
              className="btn remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-footer">
        <div className="cart-total">
          <p>Total: ₹{totalPrice}</p>
        </div>
        
        <button 
          onClick={handleProceedToCheckout} 
          className="btn checkout-btn"
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>
          {checkoutStage === 'cart' && '🛒 Your Cart'}
          {checkoutStage === 'payment' && '💳 Checkout'}
          {checkoutStage === 'bill' && '✅ Order Placed'}
        </h1>
      </div>

      {showHistory ? (
        renderOrderHistory()
      ) : (
        <>
          {checkoutStage === 'cart' && cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              {orderHistory.length > 0 && (
                <button 
                  onClick={() => setShowHistory(true)} 
                  className="btn view-history-btn"
                >
                  View Order History
                </button>
              )}
            </div>
          ) : (
            <>
              {checkoutStage === 'cart' && renderCart()}
              {checkoutStage === 'payment' && renderPaymentForm()}
              {checkoutStage === 'bill' && generateBill()}
            </>
          )}
        </>
      )}

      {showPaymentNotification && (
        <div className="notification">
          <div className="notification-content">
            <p>✅ Payment Successful</p>
            <p>₹{totalPrice} paid via {paymentMethod}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;