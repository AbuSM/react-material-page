import React, {Fragment, useState} from 'react';
import {API_KEY, API_URL} from "../../constants";
import {Box, Card, CardContent, CircularProgress, Container, IconButton, TextField, Typography} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";


export const Content = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        if (e.target.value === '') {
            setData(null);
        }
    }

    const handlePress = (e) => {
        if (e.code === 'Enter') {
            const value = e.target.value;
            setLoading(true);
            fetch(`${API_URL}weather?appid=${API_KEY}&units=metric&q=${value}`)
                .then(res => res.json())
                .then(setData)
                .finally(() => setLoading(false));
        }
    }

    const card = (
        <Fragment>
            <CardContent>
                <Box sx={{display: 'flex', gap: 5}}>
                    <Box>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Погода на сегодня
                        </Typography>
                        <Typography variant="h4" component="div">
                            {data?.name}
                        </Typography>
                        <Typography variant="h3">
                            {data?.main?.temp}°C
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6">
                            Влажность
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            {data?.main?.humidity}%
                        </Typography>
                        <Typography variant="h6">
                            Ветер
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            {data?.wind?.speed}км/ч
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Fragment>
    );

    return (
        <Container sx={{margin: '20px auto'}}>
            <Box sx={{display: 'flex', gap: "10px"}}>
                <TextField id="outlined-search"
                           label="Введите город для поиска"
                           type="search"
                           autoComplete="off"
                           fullWidth
                           onChange={handleChange}
                           onKeyPress={handlePress}
                           InputProps={{
                               endAdornment: (
                                   <IconButton>
                                       <SearchOutlined/>
                                   </IconButton>
                               ),
                           }}
                />
            </Box>
            <Box sx={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {loading ? <CircularProgress/> :
                    data && (data?.cod === "404" ? 'Ничего не найдено((' : (
                        <Box>
                            <Card variant="outlined">{card}</Card>
                        </Box>
                    ))
                }
            </Box>
        </Container>
    )
}
