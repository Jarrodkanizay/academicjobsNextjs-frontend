'use client';

import React, { useState, useEffect } from 'react';

const SearchFilterComponent = ({ data, updateFilteredData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm.length >= 3) {
      // Adjust based on your needs
      const filtered = data.filter(
        (item) =>
          item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.country.toLowerCase().includes(searchTerm.toLowerCase())
        // Add other fields as necessary
      );
      updateFilteredData(filtered);
    } else {
      // updateFilteredData(data); // No filter applied or reset filter
    }
  }, [searchTerm, data, updateFilteredData]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchFilterComponent;
