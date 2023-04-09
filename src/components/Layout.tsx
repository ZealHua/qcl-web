import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import Toolbar from '@mui/material/Toolbar';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {grey} from '@mui/material/colors';
import {styled} from '@mui/system';
import ChatArea from './ChatArea';
import ConversationDrawer from './ConversationDrawer';
import Profile from './Profile';
import Jobs from './Jobs';

const CustomContainer = styled(Container)({
    m: 0,
    p: 0,
});

const drawerWidth = 240;

// 初始化主题为 darkTheme
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: grey[900],
        },
    },
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: grey[100],
        },
    },
});

const Layout: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState('chat');
    const [theme, setTheme] = useState(darkTheme); // 使用 state 管理主题
    const handleThemeToggle = () => {
        setTheme((currentTheme) => (currentTheme === lightTheme ? darkTheme : lightTheme));
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar/>
            <ConversationDrawer onMenuItemClick={setActiveComponent} onThemeToggle={handleThemeToggle}
                                currentTheme={theme}/>

            {/*<ConversationDrawer onMenuItemClick={setActiveComponent} onThemeToggle={() => setTheme((currentTheme) => (currentTheme === lightTheme ? darkTheme : lightTheme))} />*/}
        </div>
    );

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'chat':
                return <ChatArea/>;
            case 'profile':
                return <Profile/>;
            case 'jobs':
                return <Jobs/>;
            default:
                return <ChatArea/>;
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box sx={{display: 'flex'}}>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
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
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <CustomContainer
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh',
                        boxSizing: 'border-box',
                    }}
                >
                    {renderActiveComponent()}
                </CustomContainer>
            </Box>
        </ThemeProvider>
    );
};

export default Layout;
