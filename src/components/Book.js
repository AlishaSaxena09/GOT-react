import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams();
  const [book, setBook] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`https://anapioficeandfire.com/api/books/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
        setIsLoading(false);
        console.log(res);
      });
  }, []);

  return (
    <div className=" bg-blue-800 w-full font-oswald p-10">
      <div className="  border-8 border-black m-auto text-center px-2 py-8 bg-white w-fit top-3 flex flex-wrap justif-center">
        <div className="w-1/2">
          <img className="w-80 m-auto" src="/images/got-i.jpg"></img>
        </div>
        <div className="w-1/2 leading-9 pt-10">
          <h1 className=" text-4xl font-extrabold font-cinzel">{book.name}</h1>
          <span>Pages : {book.numberOfPages}</span>
          <p className="text-2xl my-4">Written By {book.authors}</p>
          <p className=" text-lg my-4">Published By {book.publisher}</p>
        </div>
      </div>
    </div>
  );
}
