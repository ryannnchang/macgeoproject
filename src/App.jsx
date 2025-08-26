import StartGame from "./components/StartGame";

export default function App() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen gap-3">
    <h1 className="text-6xl text-shadow-lg">
      <span className="text-mcmaster font-bold ">mac</span>
      <span className="text-black">Guessr</span>
    </h1>
    <StartGame />
    <h1 className='text-gray-600'>About</h1>
    <h1 className='text-gray-600'>Contact</h1>
  </div>
  );
}
