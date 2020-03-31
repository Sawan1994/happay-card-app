import React, { useState, useEffect } from "react";

export default function PriceCard({ items }) {
  const [totalSavings, setTotalSavings] = useState(0);

  useEffect(() => {
    let savings = 0;

    items.forEach(item => {
      if (item.original_price) {
        savings += (item.original_price - item.final_price) * item.quantity;
      }
    });

    setTotalSavings(savings);
  }, [items]);

  const getCurrency = price => "$ " + price;

  const getRoundPrice = (price, fixed) =>
    getCurrency(Math.round(price).toFixed(fixed));

  const getTotalPay = () => {
    const totalPay = items.reduce(
      (acc, currValue) => acc + currValue.final_price * currValue.quantity,
      7
    );

    return totalPay;
  };

  return (
    <div className="card price-card">
      <div className="card-body">
        <div className="card-title font-weight-bold pl-2 pr-2">
          Price Details
        </div>
        <hr />
        {items.map((item, index) => (
          <div className="row price-row" key={item.id}>
            <div className="col-6 cell">
              {item.quantity} X{" "}
              {getRoundPrice(
                item.original_price ? item.original_price : item.final_price,
                2
              )}
            </div>
            <div className="col-6 cell justify-content-end">
              {getRoundPrice(
                item.quantity *
                  (item.original_price
                    ? item.original_price
                    : item.final_price),
                2
              )}
            </div>
          </div>
        ))}
        <hr />
        {totalSavings > 0 && (
          <div className="row price-row">
            <div className="col-6">Total savings</div>
            <div className="col-6 text-right text-success">
              - {getRoundPrice(totalSavings, 2)}
            </div>
          </div>
        )}
        <div className="row price-row">
          <div className="col-6">Delivery Fee</div>
          <div className="col-6 text-right">$ 5.00</div>
        </div>
        <div className="row price-row">
          <div className="col-6">Taxes and Charges</div>
          <div className="col-6 text-right">$ 2.00</div>
        </div>
        <hr />
        <div className="row price-row font-weight-bold">
          <div className="col-6">To Pay</div>
          <div className="col-6 text-right">$ {getTotalPay()}</div>
        </div>
        <div className="row price-row">
          <div className="col-12">
            <button className="btn btn-primary w-100">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
}
