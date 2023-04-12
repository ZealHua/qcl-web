// src/auth/components/RegisterForm.tsx
import React from 'react';
import TextField from '@mui/material/TextField';
import StepForm from './StepForm';

const RegisterForm = () => {
  const step1 = (
    <div>
      <TextField label="邮箱" type="email" fullWidth required margin="normal" />
      <TextField label="密码" type="password" fullWidth required margin="normal" />
    </div>
  );

  const step2 = (
    <div>
      <TextField label="姓名" type="text" fullWidth required margin="normal" />
      <TextField label="电话" type="tel" fullWidth required margin="normal" />
    </div>
  );

  const steps = [step1, step2];

  const onFinish = () => {
    console.log('注册完成');
  };

  return <StepForm steps={steps} onFinish={onFinish} />;
};

export default RegisterForm;
