import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Box from '@mui/material/Box';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  onCardClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price, onCardClick }) => {
  return (
    <Card style={{ width: '94%', borderRadius: '10px' }} onClick={onCardClick}>
      <CardMedia component="img" height="250" style={{ padding: '20px 15px 0px 15px', borderRadius: '25px' }} image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" component="div" style={{ fontWeight: "700" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ fontSize: '1.1rem', marginTop: '5px', width: '90%' }}>
          {description}
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="20px">
          <Typography variant="h6" style={{ fontWeight: '600' }}>€ {price}</Typography>
          <IconButton
            aria-label="add to cart"
            style={{ borderRadius: '50%', border: '1px solid' }}
          >
            <LocalMallOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
