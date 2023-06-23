import './App.css'
import Order from './Order'
export default function Cart() {
  const cardNum = 1;
  return (
    <section className='cart'>
      <p className='cart-title'>You have {cardNum} in the Cart</p>
      <div className='orders-wrapper'>
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
      <div className="order_info--price">
        <p>Total: $18.90</p>
        <button>Proceed</button>
      </div>
    </section>
  )


}