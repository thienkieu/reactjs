import * as React from 'react';
import TextField from '@material-ui/core/TextField';

const InputText = (props) => {
    return (
        <TextField
            label={props.label}
            value={props.value}
            onChange={props.handleChange}
        />
    )
}

export { InputText, TextField }
