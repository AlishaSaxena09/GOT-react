import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Book() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://anapioficeandfire.com/api/books`)
      .then((res) => res.json())
      .then((res) => {
        setBooks(res);
        console.log(res);
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-center text-4xl text-black font-oswald font-bold p-3 border-t-2 border-b-2">
        Here you will find every Game of Thrones Book 📖
      </h1>
      <div className="flex flex-wrap">
        {books.map((book, i) => {
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 ">
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
