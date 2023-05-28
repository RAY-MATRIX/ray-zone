import * as React from 'react';
import { styled } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingBox = styled(Box)({
  width: 'calc(100vw - 120px)',
  height: 'calc(100vh - 120px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export default function CircularIndeterminate() {
  return (
    <LoadingBox>
      <CircularProgress sx={{ color: '#AB9178' }} />
    </LoadingBox>
  );
}
