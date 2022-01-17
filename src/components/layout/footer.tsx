import React from 'react';
import {Box, Container} from '@mui/material';


export const Footer = () => {
    return (
        <Box>
            <Container sx={{textAlign: 'center', padding: '10px'}}>
                © {new Date().getFullYear()} zypl.ai
            </Container>
        </Box>
    )
}
