import { FormControl, Radio, RadioGroup } from "@mui/joy";
import Box from "@mui/joy/Box";
import { styled } from '@mui/system'
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize'
import BodyInput from "./BodyInput";

export default function BodyTab() {
    return (
        <Box>
            <FormControl sx={{
              marginBottom: "2%"
            }}>
                <RadioGroup orientation="horizontal">
                    <Radio label='none' value='solid' />
                    <Radio label='form-data' value='solid' />
                    <Radio label='x-www-form-urlencoded' value='solid' />
                    <Radio label='raw' value='solid' />
                    <Radio label='binary' value='solid' />
                    <Radio label='GraphQL' value='solid' />
                </RadioGroup>
            </FormControl>
            <BodyInput></BodyInput>
        </Box>
    )
}

const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

const TextareaAutosize = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    resize: none;
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
    `,
    )