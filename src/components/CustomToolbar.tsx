// src/components/CustomToolbar.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const CustomToolbar: React.FC<{ handleDrawerToggle: () => void }> = ({
                                                                         handleDrawerToggle,
                                                                     }) => {
    const [selectedGptModel, setSelectedGptModel] = React.useState('gpt-3');
    const [inputFocused, setInputFocused] = React.useState(false);

    const handleGptModelChange = (
        event: React.ChangeEvent<{ value: unknown }>
    ) => {
        setSelectedGptModel(event.target.value as string);
        setInputFocused(false);
    };

    return (
        <AppBar position="fixed">
            <Toolbar sx={{display: 'flex'}}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon/>
                </IconButton>
                //<Typography variant="h6" sx={{flexGrow: 1}}>
                //QCL Web
                //</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        //justifyContent: 'center',
                        margin: 'auto', // This is the important line
                        flexGrow: 1,
                    }}
                >
                    <FormControl
                        sx={{
                            minWidth: 120,
                        }}
                        onFocus={() => setInputFocused(true)}
                        onBlur={() => setInputFocused(false)}
                    >
                        <InputLabel id="gpt-model-select-label" focused={inputFocused} shrink>
                            {/* Remove the text here to remove the label */}
                        </InputLabel>
                        <Select
                            labelId="gpt-model-select-label"
                            id="gpt-model-select"
                            value={selectedGptModel}
                            onChange={handleGptModelChange}
                            displayEmpty // Add this line to remove the label
                        >
                            <MenuItem value={'gpt-3'}>GPT-3</MenuItem>
                            <MenuItem value={'gpt-4'}>GPT-4</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Toolbar>

        </AppBar>
);
};

export default CustomToolbar;
