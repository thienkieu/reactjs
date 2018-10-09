import * as React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const DefaultButton = (props) => {
    return (
        <Button variant="contained" className={props.className} color="primary">{props.children}</Button>
    )
}

const StyledButton = styled(DefaultButton)`
    && {
        height:200px;
        color:red;
    }
`;

export {
    DefaultButton,
    StyledButton
}