import React from "react";
import generalStyles from "../../app/page.module.css";

export default function Chip({ img, className, children }) {
  return (
    <a className={`${generalStyles.chip} ${className || ""}`}>
      {img && <img src={img} alt={`${children} Chip`} />}
      {children}
    </a>
  );
}
