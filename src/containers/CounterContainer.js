import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase, setDiff } from "../modules/Counter";

export default function CounterContainer() {
  const { number, value } = useSelector((state) => ({
    number: state.counter.number,
    value: state.counter.value,
  }));

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetValue = (diff) => dispatch(setDiff(diff));
  return (
    <Counter
      number={number}
      value={value}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetValue={onSetValue}
    />
  );
}
