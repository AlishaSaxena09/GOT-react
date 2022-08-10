import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function House() {
  const { id } = useParams();
  const [house, setHouse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`https://anapioficeandfire.com/api/houses/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setHouse(res);
        setIsLoading(false);
        console.log(res);
      });
  }, []);

  return (
    <div className=" bg-red-800 w-full font-oswald">
      <div className="  border-8 border-black m-auto text-center px-2 py-8 bg-white w-fit top-3 flex flex-wrap justif-center">
        <div className="w-1/2">
          <img className="w-80 m-auto" src="/images/got-i.jpg"></img>
        </div>
        <div className="w-1/2 leading-9 pt-10">
          <h1 className=" text-4xl font-extrabold font-cinzel">{house.name}</h1>
          <p className="text-2xl my-4">Played By {house.region}</p>
          <p className=" text-lg my-4">{house.titles}</p>
          <p className=" text-lg my-4">{house.coatOfArms}</p>
          <p className="">{house.words}</p>
          <p>Founded By {house.founded}</p>
        </div>
      </div>
    </div>
  );
}
