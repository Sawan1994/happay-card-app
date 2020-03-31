import React from "react";
import "./counter.css";

export default function Counter({ current, onDecrement, onIncrement, color }) {
  return (
    <div className="counter" style={{ borderColor: color }}>
      <span onClick={onDecrement} style={{ background: color }}>
        -
      </span>
      <span>{current}</span>
      <span onClick={onIncrement} style={{ background: color }}>
        +
      </span>
    </div>
  );
}
