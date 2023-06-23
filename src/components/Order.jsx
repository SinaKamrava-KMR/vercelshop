import "./App.css";

export default function Order(props) {
  const count = 1;
  return (
    <div className="order">
      <div className="order_info">
        <img src="./assets/images/dress2.jpg" alt="orderImage" />
        <div className="order_info--title">
          <p>Midi sundress with ruched front</p>
          <div>
            <p>$18.9 x{count}</p>
            <button className="remove-btn">remove</button>
          </div>
        </div>
      </div>

    </div>
  );
}
