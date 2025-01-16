import React, { useState } from "react";

function Filter({ onFilterChange }) {
  const [showFilters, setShowFilters] = useState(false);

  const availableFilters = {
    color: ["Black", "Blue", "Pink", "Green", "Red", "Grey", "Purple", "White", "Yellow"],
    gender: ["Men", "Women"],
    priceRange: ["0-250", "251-450", "450+"],
    type: ["Polo", "Hoodie"],
  };

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    onFilterChange(name, value, checked);
  };

  return (
    <div className="filter-container">
      <div className="filter-icon-container" onClick={() => setShowFilters(!showFilters)}>
        <span className="filter-icon">⚙️ Filters</span>
      </div>
      {showFilters && (
        <div className="filter-dropdown">
          {Object.keys(availableFilters).map((filterName) => (
            <div key={filterName} className="filter-category">
              <h3>{filterName.charAt(0).toUpperCase() + filterName.slice(1)}</h3>
              {availableFilters[filterName].map((value) => (
                <div key={value}>
                  <input
                    type="checkbox"
                    id={`${filterName}-${value}`}
                    name={filterName}
                    value={value}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={`${filterName}-${value}`}>{value}</label>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;
