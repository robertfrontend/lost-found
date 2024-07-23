"use client";
import React from "react";
import { List } from "../example";
import Image from "next/image";
import Fuse from "fuse.js";

const Feed = () => {
  const [list, setList] = React.useState([]);
  const [textsearch, setTextSearch] = React.useState("");

  React.useEffect(() => {
    setList(List);
  }, []);

  const options = {
    includeScore: true,
    keys: ["title", "location", "secondType"],
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setTextSearch(value);

    if (value == "") {
      setList(List);
    } else {
      const fuse = new Fuse(List, options);

      const result = fuse.search(value);

      const newArray = result.map((element) => element.item);
      console.log(newArray, "result");

      setList(newArray);
    }
  };

  const resetList = () => {
    setTextSearch("");
    setList(List);
  };

  return (
    <section>
      <input
        type="text"
        placeholder="search"
        value={textsearch}
        className="py-2 px-2 pl-4 w-full border-[#c8d6e56e] border-[1px] rounded-md my-4"
        onChange={handleSearch}
      />
      <button onClick={resetList}>Reset</button>

      <div className="grid grid-cols-2 md:grid-cols-3">
        {list.map((dt, index) => (
          <div
            key={index}
            className={`w-[95%] md:w-full min-h-[25vh] p-4 border-[1px] border-[#c8d6e56e] rounded-md flex flex-col justify-center items-center my-2`}
          >
            <img
              src={dt.photo}
              alt=""
              className="w-[100%] h-[10vh] md:h-[30vh] object-cover rounded-md mt-2"
            />
            <div className="pt-2 text-gray-600">
              <p className="text-[14px]">{dt.title}</p>
              <p className="text-[14px] mt-2 text-blue-500">📍 {dt.location}</p>

              <div className="justify-center items-center pt-2">
                <button className="button">I am the owner</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feed;
