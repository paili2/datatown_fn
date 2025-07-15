import { useState } from 'react';

export const useSearch = (initialValue = '') => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return { searchTerm, handleSearchChange, setSearchTerm };
};
