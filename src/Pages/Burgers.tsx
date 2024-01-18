import React from 'react';
import ProductCard from '../Components/Common/ProductCard'; 
import Grid from '@mui/material/Grid';

const Burgers: React.FC = () => {
  const cardData = [
    {
      id: 1,
      title: 'Jacks Burger',
      description: 'Sesame bun,beef,bacon,mozarella,hommade,600g',
      price: 8.12,
      image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg',
    },
    {
      id: 1,
      title: 'Jacks Burger',
      description: 'Sesame bun,beef,bacon,mozarella,hommade,600g',
      price: 8.12,
      image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg',
    },
    {
      id: 1,
      title: 'Jacks Burger',
      description: 'Sesame bun,beef,bacon,mozarella,hommade,600g',
      price: 8.12,
      image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg',
    },
    {
      id: 1,
      title: 'Jacks Burger',
      description: 'Sesame bun,beef,bacon,mozarella,hommade,600g',
      price: 8.12,
      image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg',
    },
    {
      id: 1,
      title: 'Jacks Burger',
      description: 'Sesame bun,beef,bacon,mozarella,hommade,600g',
      price: 8.12,
      image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg',
    },
    {
      id: 1,
      title: 'Jacks Burger',
      description: 'Sesame bun,beef,bacon,mozarella,hommade,600g',
      price: 8.12,
      image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg',
    },
    {
      id: 1,
      title: 'Jacks Burger',
      description: 'Sesame bun,beef,bacon,mozarella,hommade,600g',
      price: 8.12,
      image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg',
    },
   
  
  ];

  return (
    <div style={{ maxWidth: '100%', paddingLeft: '30px', backgroundColor: '#eaeff8' }}>
      <div style={{ paddingTop: '32px',paddingBottom:'30px'}}>
        <h1>Burgers</h1>
      </div>
      <Grid container spacing={2}>
        {cardData.map((card) => (
          <Grid key={card.id} item xs={12} sm={6} md={4} lg={3}>
            <ProductCard
              image={card.image}
              title={card.title}
              description={card.description}
              price={card.price}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Burgers;
