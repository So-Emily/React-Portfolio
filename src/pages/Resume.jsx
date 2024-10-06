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
            <a href="/path/to/your/resume.pdf" download>Download Resume</a>
            
            <h3>Proficiencies</h3>
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
                        <li>Material UI</li>
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                        <li>Insomnia</li>
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ul>
                        <li>GitHub</li>
                        <li>GitLab</li>
                        <li>VS Code</li>
                        <li>Slack</li>
                        <li>Trello</li>
                        
                    </ul>
                </TabPanel>
            </Box>
        </section>
    );
};

export default Resume;