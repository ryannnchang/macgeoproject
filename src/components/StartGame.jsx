// src/components/StartGame.jsx
import { Link } from "react-router-dom";

export default function StartGame() {
  return (
    <>
      <Link to="/game">
        <button className="bg-mcmaster text-white rounded-3xl font-bold text-base px-2">Play Game</button>
      </Link>
    </>
  )
}
