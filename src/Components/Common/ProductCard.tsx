import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price }) => {
  return (
    <Card style={{ width: '93%',fontFamily:'Montserrat, sans-serif',borderRadius:'10px' }}>
      <CardMedia component="img" height="250" style={{padding:'20px 15px 0px 15px', borderRadius: '25px' }} image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" component="div" style={{fontWeight:"700"}}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ fontSize: '1.1rem',marginTop:'5px',width:'90%' }}>
          {description}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
          <Typography variant="h6" style={{fontWeight:'600'}}>€ {price}</Typography>
          <IconButton
            aria-label="add to cart"
            style={{ borderRadius: '50%', border:'1px solid',}}
          >
            <LocalMallOutlinedIcon fontSize="small" />

          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
