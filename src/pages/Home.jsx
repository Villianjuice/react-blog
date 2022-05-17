import React from 'react';
import MediaCard from '../components/MediaCard';
import Container from '@mui/material/Container';
import faker from '@faker-js/faker';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { setCards } from '../store/action.js';
import store from '../store/store';
import { useSelector } from 'react-redux';

const Home = () => {
  const cards = useSelector((state) => state.cards);

  useEffect(() => {
    if (!cards.length) {
      for (let i = 0; i < 10; i++) {
        store.dispatch(
          setCards({
            id: i + 1,
            name: faker.name.firstName(),
            avatar: faker.image.avatar(),
            desc: faker.lorem.words(10),
          }),
        );
      }
    }
  }, [cards]);

  return (
    <Container maxWidth={'lg'}>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid key={card.id} item xs={3}>
            <MediaCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
