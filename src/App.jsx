import React, { useEffect, useState } from "react";
import BookCard from "./components/BookCard";
import SearchBar from "./components/SearchBar";
import SortButtons from "./components/SortButtons";
import RangeSlider from "./components/RangeSlider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function App() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(12);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs);
        setFilteredBooks(data.docs);
      });
  }, []);

  useEffect(() => {
    const result = books.filter((book) =>
      book.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(result);
  }, [searchQuery, books]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        📚 OpenLibrary
      </Typography>

      <SearchBar setSearchQuery={setSearchQuery} />
      <SortButtons books={filteredBooks} setBooks={setFilteredBooks} />
      <RangeSlider count={displayCount} setCount={setDisplayCount} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem", marginTop: "2rem" }}>
        {filteredBooks.slice(0, displayCount).map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </Container>
  );
}

export default App;
