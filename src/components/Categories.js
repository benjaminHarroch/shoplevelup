
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../filescss/categories.css"
import styled from '@emotion/styled';

export const Categories = () => {

    const [sort, setSort] = React.useState('');

    
        const handleChange = (event) => {
            setSort(event.target.value);
        };

  const Title = styled.div`

        font-size:1.3em;
        text-align: center;
        color: black;
        letter-spacing: 1.1px;
        font-family: cursive;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
        padding: 1.1em 0;
        &:hover{
            color: #cbd7da;
            cursor: pointer;
        }
`;

  

  return (

    <div  className='categories-container'>

            <FormControl sx={{ m: 10, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">sort by:</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={sort}
                label="Sort by"
                onChange={handleChange}
                >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={"high to low"}>high to low</MenuItem>
                <MenuItem value={"low to hight"}>low to high</MenuItem>
                <MenuItem value={"new collection"}>new collection</MenuItem>
            </Select>
            </FormControl>


            <Title>Categories</Title>


            <Title>BABY</Title>

            <Title>Men</Title>

            <Title>Women</Title>

    </div>

  )
}
