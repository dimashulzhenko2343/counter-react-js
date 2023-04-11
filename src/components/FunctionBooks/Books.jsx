import React, { useContext } from "react";
import { CustomContext } from "../../hooks/useContext/Context";
import { Book } from "./Book";

export function Books() {
  const { books = [] } = useContext(CustomContext);
  console.log(books)
  return <div className="books">
    {
        books.map((book) => {
          return  <Book key={book.id} {...book} />
        })
    }
  </div>;
}
