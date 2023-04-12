import React from 'react';
import AuthForm from './AuthForm';

const LoginForm = ({ onLoginSuccess }) => {
  const fields = [
    {
      label: '邮箱',
      type: 'email',
      name: 'email',
    },
    {
      label: '密码',
      type: 'password',
      name: 'password',
    },
  ];

  const handleSubmit = async (values) => {
    try {
      await api.post('/api/login', values);
      onLoginSuccess();
    } catch (error) {
      throw new Error('登录失败，请检查输入信息。');
    }
  };

  return (
    <AuthForm
      title="登录"
      fields={fields}
      onSubmit={handleSubmit}
      submitButtonText="登录"
    />
  );
};

export default LoginForm;
