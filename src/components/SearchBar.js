import React from "react";
import { FiSearch } from "react-icons/fi";
import { SEARCH_API } from "../utils/SEARCH_API";
import { Search_CDN_IMG } from "../utils/common";
import { SearchShimmer } from "./SearchShimmerUI";

import "./Shimmer.css";

const SearchBar = () => {
 ;
  let res = SEARCH_API[0].info;
  console.log(res);

  if (res.length === 0) {
    
    return <h1> searchbar loaded..." <SearchShimmer /></h1>
  }
  return (
    <div className="container">
      <div className="pt-5 pb-2">
        <div className="row">
          <div className="col-md-12">
            <div className="searchFilter">
              <input
                className="form-control mr-sm-1"
                type="search"
                value=""
                placeholder="Search for restaurant and food"
                aria-label="Search"
              />
              <button className="btn btn-danger" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="recently-search">
        <h6 className="font-weight-bold">Recent Searches</h6>
        <h5 className="text-secondary">
          <FiSearch /> <span> Mozo Pizza - 2x Topping</span>
        </h5>
      </div>
      <div className="Popular-Cuisines">
        <h4 className="font-weight-bolder pt-5 pb-4">Popular Cuisines</h4>
      </div>
      <div className="searchCard">
        <div className="row">
          {res.map((footItem) => {
            return (
              <>
                <div key={footItem} className="col-md-1">
                  <img
                    src={Search_CDN_IMG + footItem.imageId}
                    className="circular_image"
                    alt="serachimg"
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
