import React from 'react';

const showRes = (searchRes) => {
    const searchDom = document.getElementById('search-results');
    if (searchDom) {
      if (searchRes) {
        searchDom.style.display = 'flex';
      } else {
        searchDom.style.display = 'none';
      }
    }
};

const renderRes = (searchRes) => {
  const arr = Object.keys(searchRes).map(id=>searchRes[id]);
  return arr.map(res => <div key={res.key}>
    {res.username}
  </div>);
};
const SearchResults = ({ searchRes }) => (
  <div id="search-results">
    {showRes(searchRes)}
    {renderRes(searchRes)}
  </div>
);

export default SearchResults;
