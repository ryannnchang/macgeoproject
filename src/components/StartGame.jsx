// src/components/StartGame.jsx
import { Link } from "react-router-dom";

export default function StartGame() {
  return (
    <>
      <Link to="/game">
        <button className="bg-mcmaster text-white">Play Game</button>
      </Link>
    </>
  )
}
