import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../partials/Loader";

export default function Character() {
  const { id } = useParams();
  const [character, setCharacter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://anapioficeandfire.com/api/characters/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setCharacter(res);
        setIsLoading(false);
        console.log(res);
      });
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className=" bg-gray-50 w-full font-oswald p-10">
      <div className="  rounded-lg shadow-lg m-auto text-center px-2 py-8 bg-white w-fit top-3 flex flex-wrap justif-center items-center">
        <div className="w-1/2 p-4">
          <img alt="got" className="w-80 m-auto" src="/images/got-i.jpg"></img>
        </div>
        <div className="w-1/2 leading-9 pt-10">
          {character.name ? (
            <h1 className=" text-6xl font-extrabold font-cinzel">
              {character.name}
            </h1>
          ) : null}
          {character.playedBy ? (
            <p className="text-2xl my-4">{character.playedBy}</p>
          ) : null}
          {character.titles ? (
            <p className=" text-lg my-4">{character.titles}</p>
          ) : null}
          {character.born ? <p>Born {character.born}</p> : null}
          {character.culture ? <p>Culture of {character.culture}</p> : null}
        </div>
      </div>
    </div>
  );
}
