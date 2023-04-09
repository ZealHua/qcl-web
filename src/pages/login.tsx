import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {
    Button,
    TextField,
    Typography,
    Box,
    IconButton,
    InputAdornment,
    FormControl,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import FooterLinks from '../components/reusable/footlinks';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4285f4',
        },
    },
});

const Login: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // 执行登录逻辑
        router.push('/');
    };

    const handleRegister = () => {
        // 执行注册逻辑
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    width: '100%',
                    padding: 3,
                    backgroundColor: '#f5f5f5',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderRadius: 2,
                        padding: 4,
                        boxShadow: 0,
                        width: '30%',
                    }}
                >
                    <img src="/path/to/your/logo.png" alt="Logo" style={{width: '80px', marginBottom: '16px'}}/>
                    <Typography variant="h6" mb={2}>
                        让每个人都能成就非凡！
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            label="邮箱"
                            type="email"
                            name="email"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormControl fullWidth variant="outlined" margin="normal">
                            <InputLabel htmlFor="outlined-adornment-password">密码</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="密码"
                            />
                        </FormControl>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2}}>
                            <Button variant="contained" color="primary" onClick={handleLogin}>
                                登录
                            </Button>
                            <Button variant="outlined" color="primary" onClick={handleRegister}>
                                注册
                            </Button>
                        </Box>
                    </Box>

                    <FooterLinks/>
                </Box>
            </Box>

        </ThemeProvider>
    );
};

export default Login;

