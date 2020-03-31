import React, { useState, useEffect } from "react";
import Back from "./Back";
import SummaryCard from "./SummaryCard";
import "../styles/orderSummary.css";
import PriceCard from "./PriceCard";
import { connect } from "react-redux";

function OrderSummary({ selectedCards }) {
  const [numOfItems, setNumOfItems] = useState(0);

  useEffect(() => {
    setNumOfItems(selectedCards.length);
  }, [selectedCards]);

  return (
    <>
      <div className="row mb-4">
        <div className="col-12">
          <Back />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-6">
          <p className="summary-title">Order Summary ( {numOfItems} items )</p>
        </div>
      </div>

      <div className="row">
        <div className="col-7 d-flex align-items-stretch">
          <SummaryCard items={selectedCards} />
        </div>
        <div className="col-5">
          <PriceCard items={selectedCards} />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  selectedCards: state.cardListReducer.selectedCards
});

export default connect(mapStateToProps)(OrderSummary);
