import "./App.css";

export default function Modal(props) {
  return (
    <div className="modal-wrapper">
      <div className="background"></div>
      <div className="modal">
        <img src="./assets/images/dress2.jpg" alt="modal product" />
        <div className="modal-details">
          <button className="modal-close-btn">X</button>
          <p className="modal-title">Midi sundress with ruched front</p>
          <p>This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.</p>
          <div className="modal-price-details">
            <p>Price : $18.9</p>
            <button className="ModalcaddToCartBtn">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
  );
}
