import React from "react";

function Props1({ chacha }) {
  const  { name, job, image } =chacha;
  return (
    <>
      <div className="w-48 h-62 bg-zinc-100 rounded-md  flex flex-col  overflow-hidden">
        <div className="w-full  h-32   bg-zinc-200">
          <img
            className=" w-full h-full object-cover object-center"
            src={`${image}`}
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-sm font-bold px-3 mt-2">{name}</h1>
          <h2 className="text-xs px-3 font-semibold">{job}</h2>
          <button className="px-4 py-[2px]  ms-3 mt-2 mb-2 bg-blue-500 rounded-md text-white text-sm">
            Add friend
          </button>
        </div>
      </div>
    </>
  );
}

export default Props1;
