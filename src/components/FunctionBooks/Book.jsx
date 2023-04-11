import React, { useContext } from "react";
import { CustomContext } from "../../hooks/useContext/Context";
import s from "./Book.module.css";

export function Book(props) {
  const { removeBook } = useContext(CustomContext);

  const handlClick = () => {
    return removeBook(props.id)
  }

  return (
    <h2 className={s.book} onClick={handlClick}>
      {props.title}
    </h2>
  );
}
