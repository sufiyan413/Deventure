import React, { useState } from 'react';
import ProductCard from '../Components/Common/ProductCard';
import ProductDrawer from '../Components/Common/ProductDrawer';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

const Burgers: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const burgerData = [
    {
      id: 1,
      title: 'Jack’s Burger',
      description: 'Sesame bun, beef, bacon, mozzarella, homemade, 600g',
      price: 8.12,
      image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg',
    },
    {
      id: 2,
      title: 'Old Town Burger',
      description: 'Sesame bun, beef, bacon, cheddar, tomatoes, onion, 600g',
      price: 8.12,
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Veggie Fresh Burger',
      description: 'Sesame Bun, Baby Spinach, Pumpkin, Eggplant, 600g',
      price: 8.12,
      image: 'https://images.pexels.com/photos/17971406/pexels-photo-17971406/free-photo-of-veg-burger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'Cheese Meltdown Burger',
      description: 'Sesame Bun, Beef, Bacon, Parmesan, Cheddar, 600g',
      price: 8.12,
      image: 'https://images.pexels.com/photos/3915906/pexels-photo-3915906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      title: 'Mr. Chili Pepper ',
      description: 'Sesame bun, beef, bacon, mozzarella, homemade, 600g',
      price: 8.12,
      image: 'https://images.pexels.com/photos/8879375/pexels-photo-8879375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 6,
      title: 'Laid Back Chicken Burger',
      description: 'Sesame bun, beef, bacon, cheddar, tomatoes, onion, 600g',
      price: 8.12,
      image: 'https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 7,
      title: 'Run Away Gorgonzola ',
      description: 'Sesame Bun, Baby Spinach, Pumpkin, 600g',
      price: 8.12,
      image: 'https://images.pexels.com/photos/12034622/pexels-photo-12034622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },


  ];

  const dessertData = [
    {
      id: 8,
      title: 'Home Creams',
      description: '200g',
      price: 6.99,
      image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 9,
      title: 'Gray Pudding with Fruit Jam',
      description: '150g',
      price: 6.99,
      image: 'https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 10,
      title: 'Caramelized apple pie and ice cream',
      description: '200g',
      price: 6.99,
      image: 'https://images.pexels.com/photos/221083/pexels-photo-221083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 11,
      title: 'Chocolate Lava Cake & Ice Cream',
      description: '150 g',
      price: 6.99,
      image: 'https://images.pexels.com/photos/703115/pexels-photo-703115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const saladData = [
    {
      id: 12,
      title: 'Classic Caesar Salad',
      description: 'Romaine lettuce, croutons, parmesan cheese, Caesar dressing',
      price: 7.99,
      image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 13,
      title: 'Greek Salad',
      description: 'Mixed greens, cherry tomatoes, cucumber, feta cheese, olives,',
      price: 8.99,
      image: 'https://images.pexels.com/photos/13467083/pexels-photo-13467083.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      id: 14,
      title: 'Greek Salad',
      description: 'Mixed greens, cherry tomatoes, cucumber, feta cheese, olives,',
      price: 8.99,
      image: 'https://images.pexels.com/photos/764925/pexels-photo-764925.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      id: 15,
      title: 'Greek Salad',
      description: 'Mixed greens, cherry tomatoes, cucumber, feta cheese, olives,',
      price: 8.99,
      image: 'https://images.pexels.com/photos/1833334/pexels-photo-1833334.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    }
  ];

  const handleCardClick = (product: any) => {
    setSelectedProduct(product);
    setDrawerOpen(true);
  };

  return (
    <Box sx={{ pt: '15px', pl: '60px', pr: '30px', backgroundColor: '#eaeff8' }}>
      <Box sx={{ pt: 3, pb: 2 }}>
        <h1 style={{ fontSize: '23px', lineHeight: '28px', paddingBottom: '20px' }}>Burgers</h1>
        <Grid container spacing={2}>
          {burgerData.map((burger) => (
            <Grid key={burger.id} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard
                image={burger.image}
                title={burger.title}
                description={burger.description}
                price={burger.price}
                onCardClick={() => handleCardClick(burger)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ pt: 6, pb: 2 }}>
        <h1 style={{ fontSize: '23px', lineHeight: '28px', paddingBottom: '20px' }}>Desserts</h1>
        <Grid container spacing={2}>
          {dessertData.map((dessert) => (
            <Grid key={dessert.id} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard
                image={dessert.image}
                title={dessert.title}
                description={dessert.description}
                price={dessert.price}
                onCardClick={() => handleCardClick(dessert)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ pt: 6, pb: 2 }}>
        <h1 style={{ fontSize: '23px', lineHeight: '28px', paddingBottom: '20px' }}>Salads</h1>
        <Grid container spacing={2}>
          {saladData.map((salad) => (
            <Grid key={salad.id} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard
                image={salad.image}
                title={salad.title}
                description={salad.description}
                price={salad.price}
                onCardClick={() => handleCardClick(salad)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <ProductDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        product={selectedProduct}
      />
    </Box>
  );
};

export default Burgers;



