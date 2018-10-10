import * as React from 'react';
import {
    Select,
    FormControl,
    FormHelperText,
    MenuItem,
    InputLabel,
} from 'ui/Select/index';

import listTheme from '../domain/getListTheme';

interface Props {
}

class ThemeSelection extends React.Component<Props,{}> {
    state = {
        age: '',
        name: 'hai',
    };
    
    handleChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    };


    componentWillMount() {
        //need to checkout user login or not 
        // if not login we need to fetch user or change to login page => 
        //logService.log('ThemeManager --- componentWillMount');
    }

    render() {
        return (
            <FormControl>
                <InputLabel htmlFor="age-simple">Age</InputLabel>
                <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-simple',
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        )
    }

    renderMenuItem() {
        
    }
};


export default ThemeSelection;