import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputGroup, Form, Button } from "react-bootstrap";
import "./Search.css";
import { BsSearch } from "react-icons/bs";
import {
  searchQuery,
  setCurrentPageNumber,
} from "../../redux/actions/movieActions";

const Search = () => {
  const [query, setQuery] = useState("");
  const { currentPageNumber } = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClick = () => {
    dispatch(setCurrentPageNumber(1));
    dispatch(searchQuery(query, currentPageNumber));
  };

  return (
    <div className="container">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search movies  "
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleChange}
          onKeyPress={(e) => e.key === 'Enter' && handleClick()}
          value={query}
        />
        <Button
          variant="primary"
          id="button-addon2 myBtn"
          onClick={handleClick}
        >
          <BsSearch />
        </Button>
      </InputGroup>
    </div>
  );
};

export default Search;
