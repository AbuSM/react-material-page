import React from 'react';
import {Box, Container} from '@mui/material';

export const Section = ({isBgGray = false, children}: {isBgGray?: boolean, children: any}) => {
    return (
        <Box sx={{...styles, bgcolor: isBgGray ? '#f6f6f6': 'white'}}>
            <Container maxWidth="lg">
                {children}
            </Container>
        </Box>
    );
}

const styles = {
    marginTop: '100px',
    padding: '100px 0'

} as const
