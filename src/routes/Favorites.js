import React, { useContext, useEffect, useState } from 'react';
import { FavoritesContext } from '../context/FavoritesContext'; // Correct the path to FavoritesContext
import Card from '../components/Card'; // Correct the path to Card
import { keyframes } from '@mui/material';
import { Container, Box, Grid } from '@mui/material';
import pathh2 from '../images/about.jpg';

// Define animations for geometric shapes
const floatShape1 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(50px, 50px) rotate(90deg); }
  50% { transform: translate(100px, 0) rotate(180deg); }
  75% { transform: translate(50px, -50px) rotate(270deg); }
`;

const floatShape2 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(-50px, 100px) rotate(120deg); }
  66% { transform: translate(50px, 50px) rotate(240deg); }
`;

// New animation for rotating shapes
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  const [mangaList, setMangaList] = useState([]);

  useEffect(() => {
    const fetchMangaDetails = async () => {
      const mangaDetails = await Promise.all(
        favorites.map(async (mangaId) => {
          const response = await fetch(`https://api.mangadex.org/manga/${mangaId}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch manga with ID: ${mangaId}`);
          }
          const data = await response.json();
          return data.data; // Return the manga data
        })
      );
      setMangaList(mangaDetails);
    };

    if (favorites.length > 0) {
      fetchMangaDetails();
    }
  }, [favorites]);

  if (mangaList.length === 0) {
    return <p style={{ marginLeft: '10px' }}>No favorites added yet.</p>; // Added marginLeft here
  }

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        color: 'white',
        padding: 4,
        backgroundImage: `url(${pathh2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0,
        },
      }}
    >
      {/* Floating shapes */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20%',
          animation: `${floatShape1} 20s infinite linear`,
          zIndex: 1,
        }}
      />
      {/*circle*/}
      <Box
        sx={{
          position: 'absolute',
          top: '38%',
          right: '40%',
          width: '150px',
          height: '150px',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          animation: `${floatShape2} 25s infinite linear`,
          zIndex: 1,
        }}
      />
      {/*Square*/}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          right: '7%',
          width: '80px',
          height: '80px',
          border: '2px solid rgba(255, 255, 255, 0.15)', // Add border
          backgroundColor: 'transparent', // Remove background color
          transform: 'rotate(45deg)',
          animation: `${floatShape1} 18s infinite linear reverse`,
          zIndex: 1,
        }}
      />

      {/* Triangle */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          left: '55%',
          width: 0,
          height: 0,
          borderLeft: '50px solid transparent',
          borderRight: '50px solid transparent',
          borderBottom: '86px solid rgba(255, 255, 255, 0.1)',
          animation: `${floatShape2} 22s infinite linear`,
          zIndex: 1,
        }}
      />

      {/* Triangle */}
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          right: '15%',
          width: 0,
          height: 0,
          borderLeft: '50px solid transparent',
          borderRight: '50px solid transparent',
          borderBottom: '86px solid rgba(255, 255, 255, 0.1)',
          animation: `${floatShape2} 22s infinite linear`,
          zIndex: 1,
        }}
      />
            {/* Triangle */}
            <Box
        sx={{
          position: 'absolute',
          top: '35%',
          left: '11%',
          width: 0,
          height: 0,
          borderLeft: '75px solid transparent',
          borderRight: '75px solid transparent',
          borderBottom: '129px solid rgba(255, 255, 255, 0.1)',
          animation: `${floatShape2} 22s infinite linear`,
          zIndex: 1,
        }}
      />

      {/* Plus sign */}
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          right: '35%',
          width: '60px',
          height: '60px',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
          '&::before': {
            top: '0',
            left: '40%',
            width: '20%',
            height: '100%',
          },
          '&::after': {
            top: '40%',
            left: '0',
            width: '100%',
            height: '20%',
          },
          animation: `${rotate} 15s infinite linear`,
          zIndex: 1,
        }}
      />

      {/* X sign */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '80%',
          left: '25%',
          width: '70px',
          height: '70px',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '2px', // Thickness of the X lines
            top: '50%',
            left: '0',
            backgroundColor: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          },
          '&::before': {
            transform: 'translateY(-50%) rotate(45deg)',
          },
          '&::after': {
            transform: 'translateY(-50%) rotate(-45deg)',
          },
          animation: `${floatShape1} 23s infinite linear`,
          zIndex: 1,
        }}
        />
        <Container maxWidth="lg" sx={{ 
          position: 'relative', 
          zIndex: 1,
        }}>
            <Grid container spacing={2} justifyContent="center"> 
                {mangaList.map((manga) => (
                <Grid item xs={6} sm={4} md={2.4} key={manga.id}>
                    <Card 
                    manga={manga}
                    style={{
                        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                        zIndex: 3,
                    }}
                    />
                </Grid>
                ))}
            </Grid>
        </Container>
    </Box>
  );
};

export default Favorites;
