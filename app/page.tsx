"use client";
import { Typography, Button } from "@mui/material";
import { useUnit } from "effector-react";
import React from "react";
import "./page.scss";
import {
  $counter,
  incrementCounter,
  decrementCounter,
  rundCounter,
} from "@/stores/counter/counter";
export default function Home() {
  const count = useUnit($counter);
  return (
    <div className="container">
      <Typography variant="h3" className="page">
        Вы на страницу Home
      </Typography>
      <div className="display_flex">
        <Typography variant="h1" className="count">Число: {count}</Typography>
        <div className="button_container">
          <Button variant="contained" onClick={() => incrementCounter()}>
            +
          </Button>
          <Button variant="contained" onClick={() => decrementCounter()}>
            -
          </Button>
          <Button variant="contained" onClick={() => rundCounter()}>
            rundom
          </Button>
        </div>
      </div>
    </div>
  );
}
