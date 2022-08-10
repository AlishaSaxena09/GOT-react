import React from "react";
import { Link } from "react-router-dom";
import { CARDS_DATA } from "../utils/constants";

export default function Home() {
  return (
    <div>
      <main className="m-10 p-10 text-center font-oswald">
        <div className="flex justify-center">
          <h1 className="text-5xl font-extrabold  my-8">
            Welcome to the world of GOT !
          </h1>
          <img alt="got" src="/images/swords.png" className="w-20"></img>
        </div>

        <p className="text-lg font-light text-left">
          Trouble is brewing in Westeros. For the inhabitants of this world,
          control of the Iron Throne holds the lure of great power. But in a
          land where seasons can last a lifetime, winter is coming...and beyond
          the Great Wall that protects them, a forgotten evil has returned. HBO
          presents this epic series based on the book series A Song of Ice and
          Fire by George R.R. Martin.
        </p>
      </main>
      <div className="flex p-10 m-10 justify-between">
        {CARDS_DATA.map(({ heading, image, description, path }) => {
          return (
            <div className="shadow-md w-1/4 p-4 font-oswald bg-white">
              <h3 className=" font-bold text-2xl text-center">{heading}</h3>
              <div className="my-4  ">
                <img alt="got" src={image}></img>
              </div>
              <p className="my-4">{description}</p>
              <Link to={path}>
                <button className=" font-bold py-2 px-4 border border-black rounded m-auto">
                  More
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
