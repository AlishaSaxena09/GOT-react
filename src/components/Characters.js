import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://www.anapioficeandfire.com/api/characters?pageSize=50`)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res);
        console.log(res);
      });
  }, []);
  return (
    <div className="p-10">
      <h1 className="text-center text-4xl text-black font-oswald font-bold p-3 border-t-2 border-b-2">
        Cast & Characters
      </h1>
      <div className="flex flex-wrap">
        {characters.map((character, i) => {
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img
                className="w-full"
                src="/images/swords.png"
                alt="Sunset in the mountains"
              ></img>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{character.name}</div>
                <p className="text-gray-700 text-base">
                  Played By {character.playedBy}
                </p>
                <Link to={`/characters/${i}`}>More ...</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
