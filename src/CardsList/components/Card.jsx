import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addToCart, removeFromCart } from "../actions/actionCreator";
import Counter from "../../CommonModule/Counter";

function Card({ cardDetail, addToCart, removeFromCart, selectedCards }) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const current = selectedCards.find(card => card.id === cardDetail.id);
    let quantity = 0;

    if (current !== undefined) {
      quantity = current.quantity;
    }

    setQuantity(quantity);
  }, [cardDetail, selectedCards]);

  const getDiscount = (original_price, final_price) => {
    if (original_price === undefined) {
      return null;
    }

    return (
      <span className="ribbon">
        <span className="ribbon-content">
          {((original_price - final_price) / original_price) * 100}% OFF
        </span>
      </span>
    );
  };

  const getCurrency = price => "$ " + price;

  const getRoundPrice = (price, fixed) =>
    getCurrency(Math.round(price).toFixed(fixed));

  return (
    <div className="col-4 p-4" key={cardDetail.id}>
      <div className="row">
        <div className="col-12 wrapper">
          <img
            className="img-fluid card-image"
            src={cardDetail.img_url}
            alt={cardDetail.name}
          />
          {getDiscount(cardDetail.original_price, cardDetail.final_price)}
        </div>
      </div>
      <div className="row pl-2 pr-2 pt-4 pb-2 font-weight-bold">
        <div className="col-6 text-capitalize">{cardDetail.name}</div>
        <div className="col-6 text-right">
          <span className="text-secondary">
            <strike>
              {cardDetail.hasOwnProperty("original_price")
                ? getRoundPrice(cardDetail.original_price, 2)
                : ""}
            </strike>
          </span>{" "}
          <span className="fs-17">
            {getRoundPrice(cardDetail.final_price, 2)}
          </span>
        </div>
      </div>
      <div className="row pl-2 pr-2 text-secondary">
        <div className="col-11">{cardDetail.description}</div>
      </div>
      <div className="row mt-4 pl-2 pr-2">
        <div className="col-12 ">
          {quantity <= 0 ? (
            <button
              className="btn btn-outline-primary w-100 font-weight-bold"
              onClick={() => addToCart(cardDetail.id)}
            >
              Add to Cart
            </button>
          ) : (
            <Counter
              current={quantity}
              onDecrement={() => removeFromCart(cardDetail.id)}
              onIncrement={() => addToCart(cardDetail.id)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  selectedCards: state.cardListReducer.selectedCards
});
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ addToCart, removeFromCart }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
