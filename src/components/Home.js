import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-between flex-wrap p-6 shadow-xl">
        <div className="w-80">
          <img alt="got" src="/images/got-logo.jpeg"></img>
        </div>
        <ul className="flex mr-8 font-cinzel ">
          <Link to="/books">
            <li className="mr-8 text-lg font-medium hover:text-xl">Books</li>
          </Link>
          <Link to="/characters">
            <li className="mr-8 text-lg font-medium hover:text-xl">
              Characters
            </li>
          </Link>
          <Link to="/houses">
            <li className="mr-8 text-lg font-medium hover:text-xl">Houses</li>
          </Link>
        </ul>
      </nav>
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
        <div className=" border-4 border-blue-800 w-1/4 p-4 font-oswald">
          <h3 className=" font-bold text-2xl text-center">Books of GOT</h3>
          <div className="my-4  ">
            <img alt="got" src="/images/books.webp"></img>
          </div>
          <p className="my-4">
            Although there are 5 Game of Thrones books published, author George
            R.R. Martin intends for there to be 7 by the time the series is
            finished. He's been working on the sixth book, The Winds of Winter,
            for literally a decade.
          </p>
          <Link to="/books">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 border border-blue-800 rounded m-auto">
              More
            </button>
          </Link>
        </div>
        <div className=" border-4 border-green-800 w-1/4 p-4 font-oswald">
          <h3 className=" font-bold text-2xl text-center">Characters of Got</h3>
          <div className="my-4  ">
            <img alt="got" src="/images/charac.webp"></img>
          </div>
          <p className="my-4">
            Though A Game of Thrones is a book of fantasy, it lacks the clear
            moral boundaries between good and evil found in many classic stories
            of the genre. Who is the most morally virtuous character, and who is
            despicable?
          </p>
          <Link to="/characters">
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 border border-green-800 rounded m-auto">
              More
            </button>
          </Link>
        </div>
        <div className=" border-4 border-red-800 w-1/4 p-4 font-oswald">
          <h3 className=" font-bold text-2xl text-center">The Houses of GOT</h3>
          <div className="my-4  ">
            <img alt="got" src="/images/houses.webp"></img>
          </div>
          <p className="my-4">
            Building on certain themes that prevail over Game of Thrones’ story,
            some fans theorized that the major houses in the series each
            represent the seven deadly sins from the bible: Envy, gluttony,
            greed, lust, pride, sloth, and wrath.
          </p>
          <Link to="/houses">
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 border border-red-800 rounded m-auto">
              More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
