import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function valuetext(value) {
  return `${value}`;
}

const minDistance = 10;

const theme = createTheme({
    palette: {
      primary: {
        main: '#1aa46c',
      },
    },
  });

export default function MinimumDistanceSlider(props) {
  const booksMinPrice = props.booksMinPrice
  const booksMaxPrice = props.booksMaxPrice
  const [value, setValue] = React.useState([0, 10000]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
      booksMinPrice(value[0]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
      booksMaxPrice(value[1])
    }
  };

  return (
    
    <ThemeProvider theme={theme}>
        <Box>
        <label> Precio</label>
            <Slider
                getAriaLabel={() => 'Prices'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                step={100}
                min={0}
                max={10000}
                
            />
        </Box>
    </ThemeProvider>
    
  );
}
