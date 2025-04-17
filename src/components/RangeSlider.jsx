import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";


const RangeSlider = ({ count, setCount }) => {
    return (
        <Box sx={{ width: 300, mx: "auto", mb: 3 }}>
            <Typography gutterBottom>
                Nombre de livres à afficher : {count}
            </Typography>
            <Slider
                value={count}
                onChange={(e, value) => setCount(value)}
                min={1}
                max={100}
                step={1}
                valueLabelDisplay="auto"
            />
        </Box>
    );
};

export default RangeSlider;