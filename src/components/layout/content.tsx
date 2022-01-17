import React from 'react';
import {Box, Card, CardContent, CircularProgress, Container, IconButton, TextField, Typography} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";
import {Button, Heading, Section} from '../ui';
import logo from '../../assets/intro-bg.jpg';
import about from '../../assets/about.jpg';


export const Content = () => {
    return (
        <Box>
            <Box sx={styles}>
                <Box sx={{width: '500px', textAlign: 'center'}}>
                    <Typography mb={5} variant="h3" >Получите ответ по кредиту за 5 минут</Typography>
                    <Button title="Заявка"/>
                </Box>
            </Box>
                <Section isBgGray={true}>
                    <Box sx={{display: 'flex', gap: '50px'}}>
                        <Box component="img" src={about} />
                        <Box>
                            <Heading title="О нас"/>
                            <Box component="p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem esse explicabo fuga fugiat harum impedit in nihil omnis placeat, provident quae quam sint voluptas. Consequatur explicabo incidunt nulla vel voluptate.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem esse explicabo fuga fugiat harum impedit in nihil omnis placeat, provident quae quam sint voluptas. Consequatur explicabo incidunt nulla vel voluptate.
                            </Box>
                        </Box>
                    </Box>
                </Section>
                <Section>

                </Section>
        </Box>
    )
}

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '900px',
    background: `url(${logo}) center center no-repeat`,
    backgroundSize: 'cover'
} as const
