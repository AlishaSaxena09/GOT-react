import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../partials/Loader";

export default function House() {
  const { id } = useParams();
  const [house, setHouse] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://anapioficeandfire.com/api/houses/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setHouse(res);
        setIsLoading(false);
        console.log(res);
      });
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className=" bg-gray-50 w-full font-oswald pt-10">
      <div className="  rounded-lg shadow-lg items-center m-auto text-center px-2 py-8 bg-white w-fit top-3 flex flex-wrap justif-center">
        <div className="w-1/2">
          <img
            alt="houses"
            className="w-80 m-auto"
            src="/images/got-i.jpg"
          ></img>
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
