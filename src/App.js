import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Books from "./components/Books";
import Book from "./components/Book";
import Characters from "./components/Characters";
import Character from "./components/Character";
import Houses from "./components/Houses";
import House from "./components/House";
import Header from "./components/Header";

function App() {
  return (
    <div className="App bg-gray-50">
      <Header />
      <Routes>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/houses" element={<Houses />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books/:id" element={<Book />}></Route>
        <Route path="/characters/:id" element={<Character />}></Route>
        <Route path="/houses/:id" element={<House />}></Route>
      </Routes>
    </div>
  );
}

export default App;
