import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../Components/Common/ProductCard';
import ProductDrawer from '../Components/Common/ProductDrawer';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { ProductMenuList } from '../Components/ApiServices/Api';

interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Burgers: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [productMenuList, setProductMenuList] = useState<MenuItem[]>([]);

  useEffect(() => {
    getMenuList();
    // console.log("testing data");
  }, []);

  // const getMenuList = async () => {
  //   const payload = {
  //     Page: 0,
  //     PageSize: 50,
  //     RestaurantId: 37,
  //     Term: "",
  //   };
  //   try {
  //     const res = await axios.post(ProductMenuList, payload);
  //     const productList =
  //       res.data && res.data.data && res.data.data.data.length > 0
  //         ? res.data.data.data
  //         : [];

  //     setProductMenuList(productList);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const CustomImage = 'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';


  const getMenuList = async () => {
    const payload = {
      Page: 0,
      PageSize: 50,
      RestaurantId: 37,
      Term: "",
    };
    try {
      const res = await axios.post(ProductMenuList, payload);
      const productList =
        res.data && res.data.data && res.data.data.data.length > 0
          ? res.data.data.data.map((product: MenuItem) => ({
              ...product,
              image: CustomImage,
            }))
          : [];
  
      setProductMenuList(productList);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  
  const handleCardClick = (product: MenuItem) => {
    setSelectedProduct(product);
    setDrawerOpen(true);
  };

  // const dessertData: MenuItem[] = productMenuList;
  // const saladData: MenuItem[] = productMenuList;

  return (
    <Box sx={{ pt: '15px', pl: '60px', pr: '30px', backgroundColor: '#eaeff8' }}>
      <Box sx={{ pt: 3, pb: 2 }}>
        <h1 style={{ fontSize: '23px', lineHeight: '28px', paddingBottom: '20px' }}>Burgers</h1>
        <Grid container spacing={2}>
          {productMenuList.map((burger: MenuItem) => (
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

      {/* <Box sx={{ pt: 6, pb: 2 }}>
        <h1 style={{ fontSize: '23px', lineHeight: '28px', paddingBottom: '20px' }}>Desserts</h1>
        <Grid container spacing={2}>
          {dessertData.map((dessert: MenuItem) => (
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
      </Box> */}

      {/* <Box sx={{ pt: 6, pb: 2 }}>
        <h1 style={{ fontSize: '23px', lineHeight: '28px', paddingBottom: '20px' }}>Salads</h1>
        <Grid container spacing={2}>
          {saladData.map((salad: MenuItem) => (
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
      </Box> */}

      <ProductDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        product={selectedProduct}
      />
    </Box>
  );
};

export default Burgers;
