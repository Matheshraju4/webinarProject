// src/state/counterState.js
"use client";
import { atom } from "recoil";

export const daysCounter = atom({
  key: "daysCounter", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
export const hoursCounter = atom({
  key: "hoursCounter", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
export const minutesCounter = atom({
  key: "minutesCounter", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
export const secondsCounter = atom({
  key: "secondsCounter", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
export const order_id = atom({
  key: "order_id", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
