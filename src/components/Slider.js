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

export default function MinimumDistanceSlider() {
  const [value1, setValue1] = React.useState([0, 1000]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    
    <ThemeProvider theme={theme}>
        <Box>
        <label> Precio</label>
            <Slider
                getAriaLabel={() => 'Prices'}
                value={value1}
                onChange={handleChange1}
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
