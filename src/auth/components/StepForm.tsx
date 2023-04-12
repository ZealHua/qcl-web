// src/auth/components/StepForm.tsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const CustomButton = styled(Button)`
  background-color: #1a73e8;
  color: #ffffff;
  margin-top: 16px;
  &:hover {
    background-color: #1565c0;
  }
`;

interface StepFormProps {
  steps: React.ReactNode[];
  onFinish: () => void;
}

const StepForm: React.FC<StepFormProps> = ({ steps, onFinish }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 3,
        padding: 3,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        注册 ({currentStep + 1}/{steps.length})
      </Typography>
      {steps[currentStep]}
      <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Button onClick={handleBack} disabled={currentStep === 0}>
          返回
        </Button>
        <CustomButton onClick={handleNext}>{currentStep === steps.length - 1 ? '完成' : '下一步'}</CustomButton>
      </Box>
    </Box>
  );
};

export default StepForm;
