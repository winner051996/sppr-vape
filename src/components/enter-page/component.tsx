import { Button } from '@material-ui/core';
import React, { FunctionComponent } from 'react';

export const EnterPage: FunctionComponent = () => {
    return (
        <div>
            <Button variant="contained" color="secondary" href="#contained-buttons">
                Link
            </Button>
        </div>
    );
}