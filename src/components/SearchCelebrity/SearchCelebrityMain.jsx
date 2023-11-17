import React, { useState } from "react";
import { categories as _CATEGORIES, searchCelebrity } from "../../Data";
import axios from "axios";
import apiUrl from "../../utils/url";

const SearchCelebrityMain = () => {
  const [categories, setCategories] = useState("");

  console.log("categories");
  console.log(categories);

  const [celebrityName, setCelebrityName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/celebrity/search?celebrityName=${celebrityName}&categories=${categories}`
      );

      if (response.data.status) {
        setSearchResults(response.data.data);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="bg-black px-10 py-10">
      <div className="text-white">
        <h1 className="pb-6 font-medium md:font-semibold text-2xl text-center ">
          Search Celebrity
        </h1>
        {/* Search */}
        <div className="flex justify-between items-center gap-1 sm:gap-3 w-full  md:w-2/4 mx-auto p-1 my-5 border-[1px] rounded-[100px] border-[#fff]">
          <img
            src="/images/hero__search.png"
            alt="logo"
            className="ml-2 md:ml-3 w-[30px] md:w-unset"
          />

          <input
            type="text"
            placeholder="Search Your Favourite creator"
            className="outline-none md:text-base text-sm w-full h-full px-2 bg-transparent focus:bg-transparent text-[#fff]"
            value={celebrityName}
            onChange={(e) => {
              setCelebrityName(e.target.value);
              handleSearch();
            }}
          />

          <button className="bg-[#D42978] text-[#fff] rounded-3xl py-2 px-3 sm:px-4 sm:text-base text-sm">
            Search
          </button>
        </div>

        <div className="flex md:flex-wrap overflow-x-scroll no-scrollbar md:overflow-hidden py-2 md:py-4">
          {_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="mr-2 md:mr-4 my-2 cursor-pointer px-4 py-2 rounded-3xl whitespace-nowrap"
              style={{
                backgroundColor:
                  category === categories ? "#D42978" : "#292929",
              }}
              onClick={() => {
                setCategories(category);
                handleSearch();
              }}
            >
              {category}
            </div>
          ))}
        </div>

        <div className="w-full flex flex-row   flex-wrap ">
          {searchResults.length > 0 ? (
            searchResults.map((item, _) => (
              <div
                key={item._id}
                className="lg:w-[45%] w-full m-2 rounded-xl p-4 bg-[#202020] "
              >
                <div className="flex flex-row items-center">
                  <div className="h-[4vmax] w-[4vmax] rounded-full mr-3">
                    <img
                      src={item?.celebrityImage?.url}
                      alt="priya"
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <h2 className="font-bold">{item?.name}</h2>
                </div>

                <p className="mt-2">{item?.description}</p>
              </div>
            ))
          ) : (
            <p className="text-xl text-[#fff]">No Celebrity found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchCelebrityMain;
