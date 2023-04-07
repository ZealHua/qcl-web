// components/Layout.tsx
import React from 'react';
import { Container, Box } from '@mui/material';
import {maxWidth} from "@mui/system";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        {children}
      </Box>
    </Container>
  );
}

export default Layout;
