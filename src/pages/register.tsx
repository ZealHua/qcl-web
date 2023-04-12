// src/auth/pages/RegisterPage.tsx
import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import RegisterForm from '../../src/auth/components/RegisterForm';
import LogoAnimation from '../../components/LogoAnimation';

const RegisterPage = () => {
  return (
    <Container maxWidth="xs">
      <Box sx={{ padding: 3 }}>

        <RegisterForm />
      </Box>
    </Container>
  );
};

export default RegisterPage;
