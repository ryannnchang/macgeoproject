import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <Link to="/">
      <button className="bg-mcmastergray text-white rounded-lg font-bold font-Inter p-2">Home</button>
    </Link>
  )
}