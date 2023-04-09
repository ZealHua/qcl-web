import React, {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import {styled} from '@mui/system';
import Stack from '@mui/material/Stack';

const CustomDrawer = styled(Drawer)({
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: 240,
    },
});

interface ConversationDrawerProps {
    onMenuItemClick: (menuItem: string) => void;
    onThemeToggle: () => void; // 新增属性，用于切换主题
}

const ConversationDrawer: React.FC<ConversationDrawerProps> = ({onMenuItemClick, onThemeToggle}) => {
    const [selected, setSelected] = useState('chat');

    const handleMenuItemClick = (menuItem: string) => {
        onMenuItemClick(menuItem);
        setSelected(menuItem);
    };

    // 当点击主题选择按钮时，执行父组件传递的 onThemeToggle 函数
    const handleThemeToggle = () => {
        onThemeToggle();
    };

    return (
        <CustomDrawer variant="permanent" anchor="left">
            <Toolbar>
                <Stack direction="row" spacing={1} justifyContent="center">
                    <Typography variant="h5" sx={{color: 'grey.600'}}>
                        量子
                        <span style={{color: 'orange'}}>职业</span>
                        实验室
                    </Typography>
                </Stack>
            </Toolbar>
            <Divider/>
            <List sx={{paddingTop: 0, paddingBottom: 0}}>
                <ListItem
                    button
                    onClick={() => handleMenuItemClick('chat')}
                    selected={selected === 'chat'}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                        },
                        marginTop: 2,
                        marginBottom: 2,
                        ...(selected === 'chat' && {
                            backgroundColor: 'primary.light',
                            borderLeft: '4px solid',
                            borderColor: 'primary.main',
                        }),
                    }}
                >
                    <ListItemIcon>
                        <ChatIcon sx={{color: 'primary.main'}}/>
                    </ListItemIcon>
                    <ListItemText primary="小梦AI"
                                  sx={{fontSize: '1.2rem', fontWeight: 'bold', color: 'text.primary'}}/>
                </ListItem>
                <ListItem
                    button
                    onClick={() => handleMenuItemClick('profile')}
                    selected={selected === 'profile'}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                        },
                        marginTop: 2,
                        marginBottom: 2,
                        ...(selected === 'profile' && {
                            backgroundColor: 'primary.light',
                            borderLeft: '4px solid',
                            borderColor: 'primary.main',
                        }),
                    }}
                >
                    <ListItemIcon>
                        <AccountBoxIcon sx={{color: 'primary.main'}}/>
                    </ListItemIcon>
                    <ListItemText primary="个人主页"
                                  sx={{fontSize: '1.2rem', fontWeight: 'bold', color: 'text.primary'}}/>
                </ListItem>
                <ListItem
                    button
                    onClick={() => handleMenuItemClick('jobs')}
                    selected={selected === 'jobs'}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                        },
                        marginTop: 2,
                        marginBottom: 2,
                        ...(selected === 'jobs' && {
                            backgroundColor: 'primary.light',
                            borderLeft: '4px solid',
                            borderColor: 'primary.main',
                        }),
                    }}
                >
                    <ListItemIcon>
                        <WorkIcon sx={{color: 'primary.main'}}/>
                    </ListItemIcon>
                    <ListItemText primary="招聘广场"
                                  sx={{fontSize: '1.2rem', fontWeight: 'bold', color: 'text.primary'}}/>
                </ListItem>
            </List>
            {/* 主题切换按钮 */}
            <ListItem
                button
                onClick={handleThemeToggle}
            >
                <ListItemIcon>
                    <SettingsIcon sx={{color: 'primary.main'}}/>
                </ListItemIcon>
                <ListItemText primary="主题选择" sx={{fontSize: '1.2rem', fontWeight: 'bold', color: 'text.primary'}}/>
            </ListItem>
            {/* 可以在这里继续添加其他菜单项，例如：我的账户、寻求帮助、退出登录 */}
        </CustomDrawer>
    );
};
export default ConversationDrawer;