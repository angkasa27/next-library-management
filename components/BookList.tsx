import clsx, { ClassValue } from "clsx";
import React from "react";
import BookCard from "./BookCard";

interface Props {
  title: string;
  books: Book[];
  containerClassName?: ClassValue;
}

const BookList = ({ title, books, containerClassName }: Props) => {
  if (books.length < 3) return <></>;
  return (
    <section className={clsx(containerClassName)}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
