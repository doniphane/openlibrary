import React from "react";

const SearchBar = ({ setSearchQuery }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="🔍 Rechercher un livre..."
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;