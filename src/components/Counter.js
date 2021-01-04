import React from "react";

export default function Counter({
  number,
  value,
  onIncrease,
  onDecrease,
  onSetValue,
}) {
  const onChange = (e) => {
    onSetValue(parseInt(e.target.value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={value} onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}
