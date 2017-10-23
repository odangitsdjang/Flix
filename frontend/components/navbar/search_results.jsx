import React from 'react';
import { Link } from 'react-router-dom';
const showRes = (searchRes, searchInput) => {
    const searchDom = document.getElementById('search-results');
    // console.log(searchInput);
    if (searchDom) {
      if (searchRes && searchInput !== "") {
        searchDom.style.display = 'flex';
      } else {
        searchDom.style.display = 'none';
      }
    }
};

const renderRes = (searchRes) => {
  if (searchRes) {
    const arr = Object.keys(searchRes).map(id=>searchRes[id]);
    return arr.map(res =>
      <Link to={`/users/${res.username}`}>
        <li key={res.key}>
          {res.username}
        </li>
      </Link>
    );
  }
};
const SearchResults = ({ searchRes, searchInput }) => (
  <div id="search-results">
    <div>
      {showRes(searchRes, searchInput)}
      <ul>
        {renderRes(searchRes)}
      </ul>
    </div>
  </div>
);

export default SearchResults;
