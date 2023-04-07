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


const messages = [
  {sender: 'user', content: 'Hi there!'},
  {sender: 'ai', content: 'Hello! How can I help you?'},
  // ...
];
const ChatArea: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>();
  const handleSendMessage = async () => {
    // Get the text from the input field
    const text = inputRef.current?.value;

    if (text) {
      try {
        // Send a POST request to the API route
        const response = await axios.post('/api/chat', { text });

        // Get the response message from the JSON response
        const aiMessage = response.data.message;

        // Add the AI response to the messages array (you should update your messages state instead of directly modifying it)
        messages.push({ sender: 'ai', content: aiMessage });

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
    <Box sx={{flexGrow: 1, display: 'flex', flexDirection: 'column', p:0, m:0}}>
      <List sx={{flexGrow: 1, overflowY: 'auto', p: 0, m: 0}}>
        {messages.map((msg, index) => (
          <ListItem
            key={index}
            sx={{
              justifyContent: 'flex-start',
              width: '100%',
              m: 0,
              p: '0.5rem 1rem', // Adjust padding to reduce the space between rows
              borderBottom: '1px solid', // Add a border at the bottom of each row
              borderColor: 'divider',
              ':hover': {
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add a box-shadow on hover for 3D effect
                bgcolor: 'background.default',
                fontWeight: 'bold',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: 'fit-content',
                bgcolor: 'background.paper',
                borderRadius: '16px',
                px: 2,
                py: 1,
                m: 1,
              }}
            >
              {msg.sender === 'ai' ? (
                <AiIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
              ) : (
                <UserIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
              )}
              <ListItemText primary={msg.content} sx={{color: 'text.secondary'}} />
            </Box>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 1,
          borderTop: '1px solid',
          borderColor: 'divider',
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
                <SendIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default ChatArea;
