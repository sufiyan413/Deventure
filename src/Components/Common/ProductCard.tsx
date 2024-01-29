import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Box from '@mui/material/Box';
import {
            cardStyle,
            cardMediaStyle,
            descriptionStyle,
            priceBoxStyle,
            priceStyle,
} from '../Styles/ProductCard'; 


interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  onCardClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price, onCardClick }) => {
  return (
    <Card style={cardStyle} onClick={onCardClick}>
      <CardMedia component="img" height="250" style={cardMediaStyle} image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" component="div" style={{ fontWeight: "700" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={descriptionStyle}>
          {description}
        </Typography>

        <Box style={priceBoxStyle}>
          <Typography variant="h6" style={priceStyle}>€ {price}</Typography>
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
