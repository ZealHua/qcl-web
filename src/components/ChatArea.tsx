import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import UserIcon from '@mui/icons-material/AccountCircle';
import AiIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuIcon from '@mui/icons-material/Menu';


const messages = [
    {sender: 'user', content: 'Hi there!'},
    {sender: 'ai', content: 'Hello! How can I help you?'},
    // ...
];
const ChatArea: React.FC = () => {
    const inputRef = React.useRef<HTMLInputElement>();

    {/* Add the FormControl component here */
    }
    const [selectedGptModel, setSelectedGptModel] = React.useState('gpt-3');
    const [inputFocused, setInputFocused] = React.useState(false);

    const handleGptModelChange = (
        event: React.ChangeEvent<{ value: unknown }>
    ) => {
        setSelectedGptModel(event.target.value as string);
        setInputFocused(false);
    };
    const handleSendMessage = async () => {
        // Get the text from the input field
        const text = inputRef.current?.value;

        if (text) {
            try {
                // Send a POST request to the API route
                const response = await axios.post('/api/chat', {text});

                // Get the response message from the JSON response
                const aiMessage = response.data.message;

                // Add the AI response to the messages array (you should update your messages state instead of directly modifying it)
                messages.push({sender: 'ai', content: aiMessage});

                // Clear the input field
                if (inputRef.current) {
                    inputRef.current.value = '';
                }
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };
    return (
        <Box sx={{flexGrow: 1, display: 'flex', flexDirection: 'column', p: 0, m: 0}}>
            {/* Add the FormControl component here */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
                m: 0,
                width: '80%',
                justifyContent: 'center',
                position: 'relative'
            }}>

                <FormControl
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

            {/* 聊天內容 */}
            <List sx={{flexGrow: 1, overflowY: 'auto', p: 0, m: 0}}>
                {messages.map((msg, index) => (
                    <ListItem
                        key={index}
                        sx={{
                            justifyContent: 'flex-start',
                            width: '100%',
                            m: 0,
                            p: 0, // Adjust padding to reduce the space between rows
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: 'fit-content',

                                borderRadius: '16px',
                                px: 2,
                                py: 1,
                                m: 1,
                            }}
                        >
                            {msg.sender === 'ai' ? (
                                <AiIcon fontSize="small" sx={{mr: 1, color: 'text.secondary'}}/>
                            ) : (
                                <UserIcon fontSize="small" sx={{mr: 1, color: 'text.secondary'}}/>
                            )}
                            <ListItemText primary={msg.content} sx={{color: 'text.secondary'}}/>
                        </Box>
                    </ListItem>
                ))}
            </List>
                {/* 背景Logo */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: -1,
                    }}
                >
                    <Stack direction="row" spacing={1}>
                        <Typography variant="h5" color="grey.600">
                            量子职业实验室
                        </Typography>
                    </Stack>
                </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 1,
                    //borderTop: '1px solid',
                }}
            >
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    inputRef={inputRef}
                    placeholder="Type your message here..."
                    sx={{
                        borderRadius: '25px',
                        color: 'white', // Add this line to change the text color to white
                        backgroundColor: 'transparent', // Add this line to remove the background color
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderRadius: '25px',
                            },
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <IconButton
                                edge="end"
                                color="primary"
                                onClick={handleSendMessage}
                            >
                                <SendIcon/>
                            </IconButton>
                        ),
                    }}
                />
            </Box>
        </Box>
    );
};

export default ChatArea;
