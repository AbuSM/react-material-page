import React from 'react';
import {Typography} from '@mui/material';


export const Heading = ({title}: {title: string}) => (
    <Typography variant="h3" sx={styles}>
        {title}
    </Typography>
)

const styles = {
    position: 'relative',
    marginBottom: '15px',
    paddingBottom: '15px',
    '&::after': {
        position: 'absolute',
        content: '" "',
        background: 'linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);',
        height: '4px',
        width: '60px',
        bottom: 0,
        left: 0
    }
} as const
