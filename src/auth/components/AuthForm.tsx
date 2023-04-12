import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Fade from '@mui/material/Fade';

interface AuthFormProps {
  fields: Array<{
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }>;
  title: string;
  buttonText: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

// Customize TextField colors here
const CustomTextField = styled(TextField)`
  & .MuiInputLabel-root {
    color: rgba(0, 0, 0, 0.54); // Label color
  }

  & .MuiInputBase-root {
    color: rgba(0, 0, 0, 0.87); // Input text color
  }

  & .MuiInput-underline:before {
    border-bottom: 1px solid rgba(0, 0, 0, 0.42); // Border color before focus
  }

  & .MuiInput-underline:after {
    border-bottom: 2px solid #1a73e8; // Border color after focus
  }

  & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid rgba(0, 0, 0, 0.87); // Border color on hover
  }
`;

// Customize Button colors here
const CustomButton = styled(Button)`
  background-color: #1a73e8; // Button background color
  color: #ffffff; // Button text color
  margin-top: 16px;
  &:hover {
    background-color: #1565c0; // Button background color on hover
  }
`;

const AuthForm: React.FC<AuthFormProps> = ({ fields, title, buttonText, onSubmit }) => {
  return (
    <Fade in={true} timeout={1000}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#ffffff', // Background color of the form container
          borderRadius: 3,
          padding: 3,
        }}
        onSubmit={onSubmit}
      >
        <Typography variant="h4" align="center" gutterBottom style={{ color: 'rgba(0, 0, 0, 0.87)' }}> {/* Title color */}
          {title}
        </Typography>
        {fields.map((field, index) => (
          <CustomTextField
            key={index}
            label={field.label}
            type={field.type}
            value={field.value}
            onChange={field.onChange}
            fullWidth
            required
            margin="normal"
          />
        ))}
        <CustomButton type="submit" variant="contained">
          {buttonText}
        </CustomButton>
      </Box>
    </Fade>
  );
};

export default AuthForm;
