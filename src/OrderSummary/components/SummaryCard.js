import React from "react";
import Counter from "../../CommonModule/Counter";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  addToCart,
  removeFromCart
} from "../../CardsList/actions/actionCreator";

function SummaryCard({ items, addToCart, removeFromCart }) {
  return (
    <div className="card pt-4 pb-4 pl-2 pr-2 bg-light w-100">
      <div className="card-body">
        <div className="card-title">
          <div className="row mb-2 text-uppercase font-weight-bold pl-2 pr-2">
            <div className="col-3 text-center">S.No.</div>
            <div className="col-5">Items</div>
            <div className="col-4 text-center">Qty</div>
          </div>
        </div>
        <hr />
        {items.map((item, index) => (
          <div
            className="row pt-3 pb-3  d-flex align-items-center"
            key={item.id}
          >
            <div className="col-3 text-center">{index + 1}.</div>
            <div className="col-5 text-capitalize">{item.name}</div>
            <div className="col-4 text-center">
              <Counter
                current={item.quantity}
                onDecrement={() => removeFromCart(item.id)}
                onIncrement={() => addToCart(item.id)}
                color="#4C5363"
              />
            </div>
          </div>
        ))}
        <hr />
        <div className="row">
          <div className="col-12">
            <Link to="/">
              <button className="btn btn-link font-weight-bold">+ Add more items</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ addToCart, removeFromCart }, dispatch)
});

export default connect(null, mapDispatchToProps)(SummaryCard);
