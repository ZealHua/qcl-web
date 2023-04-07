// 在 src/components/ConversationDrawer.tsx 中
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useConversation } from './ConversationContext';

const ConversationDrawer = () => {
  const { conversations, setSelectedConversation } = useConversation();

  const handleConversationClick = (conversationId) => {
    const selected = conversations.find((conv) => conv.id === conversationId);
    setSelectedConversation(selected || null);
  };

  return (
    <List>
      {conversations.map((conversation) => (
        <ListItem
          button
          key={conversation.id}
          onClick={() => handleConversationClick(conversation.id)}
        >
          <ListItemText primary={conversation.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default ConversationDrawer;
