'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, Button, Paper, Grid, Box } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import RobotIcon from '@mui/icons-material/SmartToy';

const NotFound = () => {
  const router = useRouter();

  const colors = {
    darkBlue: '#040430',     // Full solid background
    cyberBlue: '#00f0ff',
    gray: '#e0e0e0',
    white: '#ffffff',
    errorRed: '#ff4d4f',
  };

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      backgroundColor: colors.darkBlue,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      py: 4,
    },
    paper: {
      p: 6,
      textAlign: 'center',
      maxWidth: 600,
      width: '100%',
      borderRadius: 3,
      backgroundColor: colors.white,
      border: `1px solid ${colors.cyberBlue}`,
      boxShadow: `0 0 25px ${colors.cyberBlue}40`,
      position: 'relative',
      zIndex: 2,
    },
    title: {
      fontWeight: 800,
      mb: 2,
      color: colors.darkBlue,
      background: `linear-gradient(90deg, ${colors.darkBlue}, ${colors.cyberBlue})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subtitle: {
      mb: 4,
      color: colors.darkBlue,
    },
    button: {
      mt: 3,
      px: 5,
      py: 1.5,
      fontWeight: 700,
      background: `linear-gradient(45deg, ${colors.darkBlue}, ${colors.cyberBlue})`,
      color: colors.white,
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: `0 0 15px ${colors.cyberBlue}`,
      },
      transition: 'all 0.3s ease',
    },
    robotIcon: {
      fontSize: '4rem',
      color: colors.cyberBlue,
      mb: 2,
      animation: 'float 3s ease-in-out infinite',
    },
    signalIcon: {
      fontSize: '2rem',
      color: colors.errorRed,
      verticalAlign: 'middle',
      ml: 1,
    },
    connectionGrid: {
      display: 'flex',
      justifyContent: 'center',
      gap: 2,
      my: 4,
    },
    connectionNode: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: colors.gray,
      '&:nth-of-type(3)': {
        background: colors.errorRed,
        boxShadow: `0 0 10px ${colors.errorRed}`,
      },
    },
    floatingElements: {
      position: 'absolute',
      opacity: 0.1,
      color: colors.cyberBlue,
    },
    floatingRobot1: {
      top: '15%',
      left: '10%',
      animation: 'float 6s ease-in-out infinite',
    },
    floatingRobot2: {
      bottom: '10%',
      right: '10%',
      animation: 'float 5s ease-in-out infinite 1s',
    },
    floatingChip: {
      top: '30%',
      right: '20%',
      animation: 'float 4s ease-in-out infinite 0.5s',
    },
    keyframes: `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
    `,
  };

  return (
    <>
      <style>{styles.keyframes}</style>

      {/* Floating Icons */}
      <ScienceIcon sx={{ ...styles.floatingElements, ...styles.floatingRobot1, fontSize: '5rem' }} />
      <RobotIcon sx={{ ...styles.floatingElements, ...styles.floatingRobot2, fontSize: '6rem' }} />
      <SettingsInputAntennaIcon sx={{ ...styles.floatingElements, ...styles.floatingChip, fontSize: '4rem' }} />

      <Container maxWidth={false} sx={styles.container}>
        <Paper elevation={0} sx={styles.paper}>
          <RobotIcon sx={styles.robotIcon} />
          <Typography variant="h2" sx={styles.title}>
            404 - Page Not Found
          </Typography>

          <Box sx={styles.connectionGrid}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Box key={i} sx={styles.connectionNode} />
            ))}
          </Box>

          <Typography variant="body1" sx={{ mb: 4, color: colors.darkBlue }}>
            +
            Page unreachable.
          </Typography>

          <Button
            variant="contained"
            sx={styles.button}
            onClick={() => router.push('/')}
            endIcon={<SettingsInputAntennaIcon />}
          >
             Home
          </Button>

       
        </Paper>
      </Container>
    </>
  );
};

export default NotFound;
