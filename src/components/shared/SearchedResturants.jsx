import React from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";

//Component
import ResturantsPage from "./ResturantsPage";

//Style
import style from "./SearchedResturants.module.css";

//Query
import { GET_RESTURANTS } from "../../qraphql/queries";

const SearchedResturants = () => {
  const state = useSelector((state) => state.searchState);

  const { loading, data, error } = useQuery(GET_RESTURANTS);

  //Function for selectedResturants according category
  let matchesOnCategory = { resturants: [] };
  const resturantsC = data?.resturants;
  for (let i = 0; i < resturantsC.length; i++) {
    if (resturantsC[i].category.includes(state.inputValue)) {
      matchesOnCategory.resturants.push(resturantsC[i]);
    }
  }

  //Function for selectedResturants according name
  let matchesOnName = { resturants: [] };
  const resturantsN = data?.resturants;
  for (let i = 0; i < resturantsN.length; i++) {
    if (resturantsN[i].name.includes(state.inputValue)) {
      matchesOnName.resturants.push(resturantsN[i]);
    }
  }

  const searchedData = matchesOnName.resturants.length
    ? matchesOnName
    : matchesOnCategory;

  return (
    <div className={style.container}>
      <ResturantsPage
        loading={loading}
        data={searchedData}
        error={error}
        isSearched={true}
      />
    </div>
  );
};

export default SearchedResturants;
