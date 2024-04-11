import PropTypes from 'prop-types';
import { useState } from 'react';
import './SearchFilter.css';
const SearchFilter = ({ persons }) => {
    const [searched, setSearched] = useState([]);
  const HandleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue) {
      setSearched([]);
      return;
    }
    const filteredPersons = persons.filter((person) =>
      person.name && person.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearched(filteredPersons);
  };

  return (
    <div className="search-filter-container">
      <div>
        <input className="search-filter-input" type="text" onChange={HandleChange} placeholder="Search for Contacts" />
      </div>
      <div className="search-filter-results">
        <ul>
          {searched.map((person) => (
            <li className="search-filter-result" key={person.name}>{person.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

SearchFilter.propTypes = {
  persons: PropTypes.array.isRequired,
};

export default SearchFilter;

