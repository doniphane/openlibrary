import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


const BookCard = ({ book }) => {
    const title = book.title || "Titre inconnu";
    const author = book.author_name?.[0] || "Auteur inconnu";
    const edition = book.edition_count || "?";
    const cover = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "/openlibrary/placeholder.png";

    return (
        <Card sx={{ maxWidth: 280, margin: "auto" }}>
            <CardMedia
                component="img"
                height="480"
                image={cover}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    👤 {author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    📚 {edition} éditions publiées
                </Typography>
            </CardContent>
        </Card>
    );
};

export default BookCard;
