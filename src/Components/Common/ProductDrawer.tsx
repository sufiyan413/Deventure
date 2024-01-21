import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';
import YouMayLikeCard from './YouMayLikeCard'; 
import Input from '@mui/material/Input'; 

interface ProductDrawerProps {
  open: boolean;
  onClose: () => void;
  product: any;
}

const drawerStyles = {
  width: '444px',
  padding: '30px 42px 42px 42px',
  backgroundColor: '#F8FAFD',
} as React.CSSProperties;

const headerStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
} as React.CSSProperties;

const contentStyles = {
  display: 'flex',
  flexDirection: 'column',
} as React.CSSProperties;

const h6Styles = {
  fontWeight: 700,
  fontSize: '23px',
  lineHeight: '28.04px',
} as React.CSSProperties;

const productInfoStyles = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '10px',
  alignItems: 'flex-start',
} as React.CSSProperties;

const titleStyles = {
  marginTop: '20px',
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '21.94px',
} as React.CSSProperties;

const descriptionStyle = {
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
} as React.CSSProperties;

const imageStyles = {
  width: '100%',
  marginTop: '20px',
  marginBottom: '10px',
  borderRadius: '7px',
  maxHeight: '270px',
} as React.CSSProperties;

const priceStyles = {
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '21.94px',
} as React.CSSProperties;

const titlePriceContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
} as React.CSSProperties;

const extrasContainerStyles = {
  marginTop: '20px',
} as React.CSSProperties;

const checkboxContainerStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
} as React.CSSProperties;

const checkboxStyles = {
  display: 'flex',
  alignItems: 'center',
} as React.CSSProperties;

const checkboxNameStyles = {
  marginLeft: '10px',
} as React.CSSProperties;

const youMayAlsoLikeContainerStyles = {
  marginTop: '20px',
} as React.CSSProperties;

const specificPreferencesContainerStyles = {
  marginTop: '20px',
} as React.CSSProperties;

const inputStyles = {
  borderRadius: '4px',
  backgroundColor: '#FFFFFF',
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  marginTop: '8px',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '17.07px',
} as React.CSSProperties;

const ProductDrawer: React.FC<ProductDrawerProps> = ({ open, onClose, product }) => {
  if (!product) return null;

  const youMayAlsoLikeData = [
    {
      id: 16,
      title: 'Coca Cola',
      price: 4.22,
      image:
        'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 16,
      title: 'Special Drink',
      price: 4.22,
      image:
        'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 16,
      title: 'Coca Cola',
      price: 4.22,
      image:
        'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];


  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ ...drawerStyles, width: '100%', maxWidth: '500px' }}>
        <div style={headerStyles}>
          <Typography variant="h6" sx={h6Styles}>
            Product Details
          </Typography>
          <IconButton onClick={onClose} sx={h6Styles}>
            <CloseIcon />
          </IconButton>
        </div>
        <div style={contentStyles}>
          <div style={productInfoStyles}>
            <div style={titlePriceContainerStyles}>
              <Typography variant="h6" sx={titleStyles}>
                {product.title}
              </Typography>
              <Typography variant="h6" sx={priceStyles}>
                € {product.price}
              </Typography>
            </div>
            <img src={product.image} alt={product.title} style={imageStyles} />
            <Typography variant="body2" sx={descriptionStyle}>
              {product.description}
            </Typography>
          </div>
          <div style={extrasContainerStyles}>
            <Typography variant="h6" sx={titleStyles}>
              Extras
            </Typography>
            <div style={checkboxContainerStyles}>
              <div style={checkboxStyles}>
                <Checkbox />
                <Typography variant="body1" sx={checkboxNameStyles}>
                  Bacon
                </Typography>
              </div>
              <Typography variant="h6" sx={priceStyles}>
                € 2.50
              </Typography>
            </div>
            <div style={checkboxContainerStyles}>
              <div style={checkboxStyles}>
                <Checkbox />
                <Typography variant="body1" sx={checkboxNameStyles}>
                  Egg
                </Typography>
              </div>
              <Typography variant="h6" sx={priceStyles}>
                € 2.50
              </Typography>
            </div>
            <div style={checkboxContainerStyles}>
              <div style={checkboxStyles}>
                <Checkbox />
                <Typography variant="body1" sx={checkboxNameStyles}>
                  Wedges
                </Typography>
              </div>
              <Typography variant="h6" sx={priceStyles}>
                € 2.50
              </Typography>
            </div>
          </div>
          <div style={youMayAlsoLikeContainerStyles}>
            <Typography variant="h6" sx={titleStyles}>
              You may also like
            </Typography>
            <div style={{ display: 'flex', marginTop: '20px' }}>
              {youMayAlsoLikeData.map((item) => (
                <YouMayLikeCard key={item.id} title={item.title} image={item.image} price={item.price} />
              ))}
            </div>
          </div>
          <div style={specificPreferencesContainerStyles}>
            <Typography variant="h6" sx={titleStyles}>
              Specific Preferences
            </Typography>
            <Input placeholder="Add description..." style={inputStyles} />
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ProductDrawer;
