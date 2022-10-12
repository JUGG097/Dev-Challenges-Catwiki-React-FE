import React from "react";
import StyledSearchComponent from "../styles/SearchComponent.styled";
import {RiSearch2Line} from "react-icons/ri";

const SearchComponent = () => {
	return <StyledSearchComponent>
    <input type="search" placeholder="Search Breed"/>
    <RiSearch2Line/>
  </StyledSearchComponent>;
};

export default SearchComponent;