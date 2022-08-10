import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../partials/Loader";

export default function Book() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://anapioficeandfire.com/api/books`)
      .then((res) => res.json())
      .then((res) => {
        setBooks(res);
        setIsLoading(false);
        console.log(res);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-10">
      <h1 className="text-center text-4xl text-black font-oswald font-bold p-6 ">
        Here you will find every Game of Thrones Book 📖
      </h1>
      <div className="flex flex-wrap justify-center">
        {books.map((book, i) => {
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 items-center">
              <img alt="book" className="w-full" src="/images/got-i.jpg"></img>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.name}</div>
                <p className="text-gray-700 text-base">
                  Written By {book.authors}
                </p>
                <Link to={`/books/${i + 1}`}>More ...</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
