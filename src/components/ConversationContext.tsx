// 创建一个新文件：src/context/ConversationContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface Conversation {
  id: number;
  title: string;
}

const ConversationContext = createContext<{
  conversations: Conversation[];
  selectedConversation: Conversation | null;
  setSelectedConversation: (conversation: Conversation | null) => void;
}>({
  conversations: [],
  selectedConversation: null,
  setSelectedConversation: () => {},
});

export const useConversation = () => {
  return useContext(ConversationContext);
};

export const ConversationProvider: React.FC = ({ children }) => {
  const [conversations] = useState<Conversation[]>([
    { id: 1, title: 'Conversation 1' },
    { id: 2, title: 'Conversation 2' },
    { id: 3, title: 'Conversation 3' },
  ]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);

  return (
    <ConversationContext.Provider
      value={{
        conversations,
        selectedConversation,
        setSelectedConversation,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};
