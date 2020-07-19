import React from 'react';
import Fuse from 'fuse.js';
import { useState } from 'react';
const DEFAULT_SEARCH_CONFIG = {
  isCaseSensitive: false,
  findAllMatches: false,
  includeMatches: false,
  includeScore: false,
  useExtendedSearch: false,
  minMatchCharLength: 0,
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  keys: ['label']
};
function fuzzySearch({ fuse, data, term }) {
  const result = fuse.search(`${term}`);
  return term ? result.map(res => res.item) : data;
}

export default ({ data, options }) => {
  const [query, setQuery] = useState('');
  // merge default and new config
  const fuseOptions = {
    ...DEFAULT_SEARCH_CONFIG,
    ...options
  };

  const fuse = new Fuse(data, fuseOptions);

  const results = fuzzySearch({ data, term: query, fuse });

  const reset = () => setQuery('');

  return { results, setQuery, query, reset };
}
