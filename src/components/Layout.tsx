// src/components/Layout.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import Toolbar from '@mui/material/Toolbar';
import ChatArea from './ChatArea';
import ConversationDrawer from './ConversationDrawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CustomToolbar from './CustomToolbar';
import { grey } from '@mui/material/colors';
const drawerWidth = 240;

const theme = createTheme({
  palette: {
    mode: 'dark', // Set the color mode to 'dark'
    background: {
      default: grey[900], // Set the background color to a shade of gray
    },
  },
});


const Layout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <ConversationDrawer />
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*<AppBar position="fixed">
          <CustomToolbar />
      </AppBar>*/}
      <Box sx={{ display: 'flex' }}>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Container
          component="main"
          sx={{
            flexGrow: 1,
            p: 0,
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            boxSizing: 'border-box',
            marginTop: '64px',
          }}
        >
          <ChatArea />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;

