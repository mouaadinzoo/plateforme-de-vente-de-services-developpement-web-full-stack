import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Search = () => {
  const location = useLocation();
  const { products } = location.state || { products: [] };
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(products);
  }, [products]);

  return (
    <div>
      
      <div>
        {searchResults.map((product, index) => (
          <p key={index}>{product.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Search;
