"use client";
import { Typography, Button } from "@mui/material";
import { useUnit } from "effector-react";
import React from "react";
import { $counter } from "@/stores/counter/counter";
export default function About() {
  const count = useUnit($counter);
  return (
    <div className="container">
      <Typography variant="h3" className="page">
        Вы на страницу About
      </Typography>
      <div className="display_flex">
        <Typography variant="h1" className="count">
          Число: {count}
        </Typography>
      </div>
    </div>
  );
}
