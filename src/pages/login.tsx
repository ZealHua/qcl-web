import React from 'react';
import { Container, Box, Typography, Link, Button, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import AuthForm from '../auth/components/AuthForm';

const CustomContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f2ef;
`;

const CustomHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 0;
`;

const CustomTypography = styled(Typography)`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 16px;
`;

const CustomButton = styled(Button)`
  margin-top: 16px;
`;

const LoginPage = () => {
  const fields = [
    {
      label: 'Email',
      type: 'email',
      value: '',
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
    },
    {
      label: 'Password',
      type: 'password',
      value: '',
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // ...
  };

  return (
    <CustomContainer maxWidth="md">
      <CssBaseline />
      <CustomHeader>
        <Typography variant="h6" component="div">
          YourLogo
        </Typography>
        <Button variant="outlined" color="primary" href="/register">
          Join now
        </Button>
      </CustomHeader>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '70vh',
          padding: '0 48px',
        }}
      >
        <Box>
          <Typography variant="h4" component="div" gutterBottom>
            Welcome back
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Sign in to continue
          </Typography>
        </Box>
        <Box>
          <AuthForm fields={fields} title="" buttonText="Sign in" onSubmit={handleSubmit} />
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Link href="/forgot-password" underline="hover">
              Forgot password?
            </Link>
          </Box>
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default LoginPage;
