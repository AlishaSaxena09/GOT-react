import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Character() {
  const { id } = useParams();
  const [character, setCharacter] = useState("");

  useEffect(() => {
    fetch(`https://anapioficeandfire.com/api/characters/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setCharacter(res);
        console.log(res);
      });
  }, [id]);

  return (
    <div className=" bg-green-800 w-full font-oswald">
      <div className="  border-8 border-black m-auto text-center px-2 py-8 bg-white w-fit top-3 flex flex-wrap justif-center">
        <div className="w-1/2">
          <img alt="got" className="w-80 m-auto" src="/images/got-i.jpg"></img>
        </div>
        <div className="w-1/2 leading-9 pt-10">
          <h1 className=" text-6xl font-extrabold font-cinzel">
            {character.name}
          </h1>
          <p className="text-2xl my-4">Played By {character.playedBy}</p>
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
