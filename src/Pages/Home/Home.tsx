import React from 'react';
import ProductCard from '../../Components/Common/ProductCard'; 
import Grid from '@mui/material/Grid';

const Home: React.FC = () => {
  const cardData = [
    {
      id: 1,
      title: 'Jacks  burger',
      description: 'Description for Product 1',
      price: 19.99,
    },
    {
      id: 1,
      title: 'Jacks  burger',
      description: 'Description for Product 1',
      price: 19.99,
    },
    {
      id: 1,
      title: 'Jacks  burger',
      description: 'Description for Product 1',
      price: 19.99,
    },
    {
      id: 1,
      title: 'Jacks  burger',
      description: 'Description for Product 1',
      price: 19.99,
    },
    {
      id: 1,
      title: 'Jacks  burger',
      description: 'Description for Product 1',
      price: 19.99,
    },
    {
      id: 1,
      title: 'Jacks  burger',
      description: 'Description for Product 1',
      price: 19.99,
    },
    {
      id: 1,
      title: 'Jacks  burger',
      description: 'Description for Product 1',
      price: 19.99,
    },
  
  ];

  return (
    <div style={{ maxWidth: '100%',paddingLeft:'30px',backgroundColor:'  #eaeff8'}}>
      <div style={{paddingTop:'30px',paddingBottom:'30px'}}>
        <h1>Burgers</h1>
      </div>
      <Grid container spacing={2}>
        {cardData.map((card) => (
          <Grid key={card.id} item xs={12} sm={6} md={4} lg={3}>
            <ProductCard
              image="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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

export default Home;
