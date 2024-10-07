import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const Resume = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section>
            <h2>Resume</h2>

            <a href="/assets/files/Emily Soriano's Resume.pdf" download="Emily Soriano's Resume.pdf" class="resume-link">Download Resume</a>
            
            <p>OR</p>
            
            <a href='https://drive.google.com/file/d/1f6KwNeaGwvNssH7OhxHpoLSe9hcIelp0/view?usp=sharing' target='_blank' 
                rel='noopener noreferrer' class="resume-link">View on Google Drive</a>
            
            <h2>Proficiencies</h2>
            <Box sx={{ width: '100%', textAlign: 'center' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="tech stack tabs"
                    centered
                    sx={{
                        '& .MuiTab-root': {
                            color: 'white',
                        },
                        '& .Mui-selected': {
                            color: 'white',
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#942aeb',
                        },
                    }}
                >
                    <Tab label="Frontend" />
                    <Tab label="Backend" />
                    <Tab label="Tools" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ul>
                        <li>Git</li>
                        <li>Webpack</li>
                        <li>Docker</li>
                        <li>Jest</li>
                    </ul>
                </TabPanel>
            </Box>
        </section>
    );
};

export default Resume;