import { createStore, createEvent } from "effector";

export const $counter = createStore<number>(0);

export const incrementCounter = createEvent();
export const decrementCounter = createEvent();
export const rundCounter = createEvent();

$counter
  .on(incrementCounter, (state) => state + 1)
  .on(decrementCounter, (state) => state - 1)
  .on(
    rundCounter,
    (state) => (state = Math.floor(Math.random() * (100 - -100) + -100))
  );
