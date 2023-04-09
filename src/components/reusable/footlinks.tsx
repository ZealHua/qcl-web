import React from 'react';
import { Box, Typography } from '@mui/material';

const FooterLinks: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        mt: 2,
      }}
    >
      <Typography variant="body2">
        <a href="/about-us" style={{ textDecoration: 'none', color: 'inherit' }}>
          我们
        </a>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Typography variant="body2">
          <a href="/help" style={{ textDecoration: 'none', color: 'inherit', marginRight: '8px' }}>
            帮助
          </a>
        </Typography>
        <Typography variant="body2">
          <a href="/privacy" style={{ textDecoration: 'none', color: 'inherit', marginRight: '8px' }}>
            隐私
          </a>
        </Typography>
        <Typography variant="body2">
          <a href="/terms" style={{ textDecoration: 'none', color: 'inherit' }}>
            条款
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterLinks;
