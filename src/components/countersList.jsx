import { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    {
      id: 0,
      value: 0,
      name: "Ненужная вещь",
    },
    {
      id: 1,
      value: 1,
      name: "Ложка",
    },
    {
      id: 2,
      value: 1,
      name: "Вилка",
    },
    {
      id: 3,
      value: 1,
      name: "Тарелка",
    },
    {
      id: 4,
      value: 1,
      name: "Набор минималиста",
    },
  ];
  const [counters, setCounters] = useState(initialState);

  const handlerDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id);
    setCounters(newCounters);
  };

  const handlerReset = () => {
    setCounters(initialState);
  };

  const handlerIncrement = (id) => {
    const incrementArray = counters.map((counter) => {
      if (id === counter.id) {
        counter.value += 1;
      }
      return counter;
    });
    setCounters(incrementArray);
  };

  const handlerDecrement = (id) => {
    const decrementArray = counters.map((counter) => {
      if (id === counter.id && counter.value > 0) {
        counter.value -= 1;
      }
      return counter;
    });
    setCounters(decrementArray);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handlerDelete}
          onIncrement={handlerIncrement}
          onDecrement={handlerDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2 ms-4" onClick={handlerReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
