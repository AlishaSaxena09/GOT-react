import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Characters() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch(`https://www.anapioficeandfire.com/api/houses?pageSize=50`)
      .then((res) => res.json())
      .then((res) => {
        setHouses(
          res
            .map((house, i) => {
              return { ...house, id: i };
            })
            .sort((a, b) => {
              return b.swornMembers.length - a.swornMembers.length;
            })
        );
        console.log(res);
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-center text-4xl text-black font-oswald font-bold p-3 ">
        Houses Of GOT
      </h1>
      <div className="flex flex-wrap justify-center">
        {houses.map((house, i) => {
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img
                className="w-full"
                src="/images/swords.png"
                alt="Sunset in the mountains"
              ></img>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{house.name}</div>
                <p className="text-gray-700 text-base">{house.region}</p>
                <Link to={`/houses/${house.id}`}>More ...</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
