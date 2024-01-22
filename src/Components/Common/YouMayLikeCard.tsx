import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface YouMayLikeCardProps {
  title: string;
  image: string;
  price: number;
}

const YouMayLikeCard: React.FC<YouMayLikeCardProps> = ({ title, image, price }) => {
  const [checked, setChecked] = useState(false);

  const cardStyles = {
    width: '145px',
    height: '160px',
    margin: '0 10px',
    position: 'relative',
  } as React.CSSProperties;

  const checkboxContainerStyles = {
    position: 'absolute',
    top: '8px',
    right: '8px',
    zIndex: 1,
    borderRadius: '50%', 
    backgroundColor: 'white',
    width: '22px',
    height: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    cursor: 'pointer',
  } as React.CSSProperties;

  const checkboxStyles = {
    borderRadius: '50%', 
    display: checked ? 'block' : 'none',
    color: '#2196F3', 
  } as React.CSSProperties;

  const imageCardStyles = {
    width: '134.56px',
    height: '78px',
    borderRadius: '8px 8px 0 0',
  } as React.CSSProperties;

  const titleCardStyles = {
    fontWeight: 600,
    fontSize: '14px',
    marginTop: '10px',
    lineHeight: '17.07px',
    textAlign: 'center',
  } as React.CSSProperties;

  const priceCardStyles = {
    fontWeight: 700,
    fontSize: '16px',
    marginTop: '10px',
    lineHeight: '19.5px',
    textAlign: 'center',
  } as React.CSSProperties;

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <Card style={cardStyles}>
      <div style={checkboxContainerStyles} onClick={handleCheckboxChange}>
        <CheckCircleIcon style={checkboxStyles} />
      </div>
      <img src={image} alt={title} style={imageCardStyles} />
      <Typography variant="body1" sx={titleCardStyles}>
        {title}
      </Typography>
      <Typography variant="h6" sx={priceCardStyles}>
        € {price}
      </Typography>
    </Card>
  );
};

export default YouMayLikeCard;


