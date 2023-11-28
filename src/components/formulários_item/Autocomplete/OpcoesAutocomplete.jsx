import React, { useState } from "react";
import TextField from "@mui/material/TextField"
import { Autocomplete } from "@mui/material";



function OpcoesAutoComplete({ options, onSelectOption }) {
    // const [selectedOption, setSelectedOption] = useState(null);
    // const classes = useStyles()

    return (
        <Autocomplete 
            id="select-option"
            options={options}
            sx={{width: 400}}
            getOptionLabel={(option) => option}
            onChange={(value) => {
                onSelectOption(value)
            }}

            renderInput={(params) => (
                <TextField 
                {...params} 
                label="Selecione uma opção"/>
            )}
        />
    )
}

export default OpcoesAutoComplete;