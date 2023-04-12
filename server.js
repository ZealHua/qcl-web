import {register, login} from './src/auth/utils/api';

const express = require('express');
const next = require('next');
const {createProxyMiddleware} = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({dev});
const nextHandler = nextApp.getRequestHandler();

const PORT = process.env.PORT || 3000;

nextApp.prepare().then(() => {
    const app = express();

    // Register and Loginlegacy API
    app.post('/api/register', async (req, res) => {
        try {
            const result = await register(req.body.email, req.body.password, req.body.password2);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({message: '注册失败，请检查输入信息。'});
        }
    });

    app.post('/api/login', async (req, res) => {
        try {
            const result = await login(req.body.email, req.body.password);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({message: '登录失败，请检查输入信息。'});
        }
    });

    // API route for chat
    app.use('/api/chat', createProxyMiddleware({
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        pathRewrite: {
            '^/api/chat': '/chat/',
        },
    }));

    app.all('*', (req, res) => {
        return nextHandler(req, res);
    });

    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
});
