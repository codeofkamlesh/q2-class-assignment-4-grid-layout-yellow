import React from 'react'
export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-screen ">
    <div className="grid gap-2 grid-cols-[1fr_3fr_1fr] grid-rows-[1fr_4fr_1fr] w-[90%] h-[90%]">
      <div className="border-2 transition-all hover:scale-105 p-3 row-span-3 bg-yellow-400 text-black border-green-500 rounded-md ">
        <h1 className="text-xl font-bold">Side Nav</h1>
      </div>
      <div className="border-2 transition-all hover:scale-105 p-3 col-span-2 bg-yellow-400 text-black border-green-500 rounded-md ">
        <h1 className="text-xl font-bold">Header</h1>
      </div>
      <div className="border-2 transition-all hover:scale-105 p-3 bg-yellow-400 text-black border-green-500 rounded-md ">
        <h1 className="text-xl font-bold">Main</h1>
      </div>
      <div className="border-2 transition-all hover:scale-105 p-3 row-span-2 bg-yellow-400 border-green-500 border-black rounded-md ">
        <h1 className="text-xl font-bold">pic side</h1>
      </div>
      <div className="border-2 transition-all hover:scale-105 p-3 bg-yellow-400 border-green-500 border-black rounded-md ">
        <h1 className="text-xl font-bold">Footer</h1>
      </div>
      </div>
   </div>
  );
}
