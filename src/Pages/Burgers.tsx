
import React from 'react';
import { useQuery } from 'react-query';
import ProductCard from '../Components/Common/ProductCard';
import ProductDrawer from '../Components/Common/ProductDrawer';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { ProductMenuList } from '../ApiServices/Api';
import CircularLoader from '../Components/Common/CircularLoader';
import ErrorDisplay from '../Components/Common/ErrorDisplay';
import { useBurgerStore } from '../Store/BurgerStore'; 

interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Burgers: React.FC = () => {
  const {
    drawerOpen,
    selectedProduct,
    setDrawerOpen,
    setSelectedProduct,
  } = useBurgerStore();

  const queryKey = 'menuList';

  const { data: productMenuList = [], isLoading, isError } = useQuery(
    queryKey,
    async () => {
      const payload = {
        Page: 0,
        PageSize: 50,
        RestaurantId: 37,
        Term: '',
      };

      const response = await fetch(ProductMenuList, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const result = await response.json();
      return result?.data?.data || [];
    }
  );

  const customImage = 'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  const handleCardClick = (product: MenuItem) => {
    setSelectedProduct(product);
    setDrawerOpen(true);
  };

  const filteredProductMenuList = productMenuList.filter(
    (product: MenuItem) => !(product.price >= 10 && product.price <= 14)
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      {isLoading && <CircularLoader />}
      {isError && <ErrorDisplay message="No data found" />}

      {!isLoading && !isError && (
        <Box sx={{ pt: '15px', pl: '60px', pr: '30px', backgroundColor: '#eaeff8' }}>
          <Box sx={{ pt: 3, pb: 2 }}>
            <h1 style={{ fontSize: '23px', lineHeight: '28px', paddingBottom: '20px' }}>Burgers</h1>
            <Grid container spacing={2}>
              {filteredProductMenuList.map((burger: MenuItem) => (
                <Grid key={burger.id} item xs={12} sm={6} md={4} lg={3}>
                  <ProductCard
                    image={customImage}
                    title={burger.title}
                    description={burger.description}
                    price={burger.price}
                    onCardClick={() => handleCardClick(burger)}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          <ProductDrawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            product={selectedProduct}
            customImage={customImage}
            extrasData={productMenuList}
          />
        </Box>
      )}
    </Box>
  );
};

export default Burgers;
