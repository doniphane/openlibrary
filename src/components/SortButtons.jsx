import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const SortButtons = ({ books, setBooks }) => {
    const sortByDate = () => {
        const sorted = [...books].sort(
            (a, b) => (b.first_publish_year || 0) - (a.first_publish_year || 0)
        );
        setBooks(sorted);
    };

    const sortByAlpha = () => {
        const sorted = [...books].sort((a, b) => {
            const titleA = a.title?.toLowerCase() || "";
            const titleB = b.title?.toLowerCase() || "";
            return titleA.localeCompare(titleB);
        });
        setBooks(sorted);
    };

    return (
        <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
            <Button variant="contained" onClick={sortByDate}>
                Trier par date
            </Button>
            <Button variant="contained" onClick={sortByAlpha}>
                Trier A → Z
            </Button>
        </Stack>
    );
};

export default SortButtons;