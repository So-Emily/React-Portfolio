import React from 'react';
import { Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => (
    <footer>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, padding: 2 }}>
            <IconButton
                component="a"
                href="https://github.com/So-Emily"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white', fontSize: '2rem' }}
            >
                <GitHubIcon fontSize="inherit" />
            </IconButton>
            <IconButton
                component="a"
                href="https://www.linkedin.com/in/emily-soriano-171a4313a/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white', fontSize: '2rem' }}
            >
                <LinkedInIcon fontSize="inherit" />
            </IconButton>
        </Box>
    </footer>
);

export default Footer;