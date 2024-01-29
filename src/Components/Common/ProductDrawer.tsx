import React, {  useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';
import YouMayLikeCard from './YouMayLikeCard';
import CustomInput from './CustomInput';
import * as styles from '../Styles/ProductDrawerStyles';
import { MenuItem } from '../../ApiServices/Api';
import { useHeaderStore } from '../../Store/HeaderStore.ts';

interface ProductDrawerProps {
  open: boolean;
  onClose: () => void;
  product: any;
  customImage: any;
  extrasData: MenuItem[];
}

const ProductDrawer: React.FC<ProductDrawerProps> = ({ open, onClose, product, customImage, extrasData }) => {
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
      id: 17,
      title: 'Special Drink',
      price: 4.22,
      image:
        'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 18,
      title: 'Coca Cola',
      price: 4.22,
      image:
        'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const [description, setDescription] = useState<string>('');
  const [counter, setCounter] = useState<number>(1);
  const [isIncreaseClicked, setIsIncreaseClicked] = useState<boolean>(false);
  const [isDecreaseClicked, setIsDecreaseClicked] = useState<boolean>(false);

  const handleIncrease = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setIsIncreaseClicked(true);
    setIsDecreaseClicked(false);
  };

  const handleDecrease = () => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
      setIsDecreaseClicked(true);
      setIsIncreaseClicked(false);
    }
  };

  const handleAddToCart = () => {
    const cartContent = counter; 
    useHeaderStore.getState().setShowBadge(true, cartContent);
  };

  const filteredExtrasData = extrasData.filter((extra) => extra.price >= 10 && extra.price <= 14);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ ...styles.drawerStyles, width: '100%', maxWidth: '500px' }}>
        <div style={styles.headerStyles}>
          <Typography variant="h6" sx={styles.h6Styles}>
            Product Details
          </Typography>
          <IconButton onClick={onClose} sx={styles.h6Styles}>
            <CloseIcon />
          </IconButton>
        </div>
        <div style={styles.contentStyles}>
          <div style={styles.productInfoStyles}>
            <div style={styles.titlePriceContainerStyles}>
              <Typography variant="h6" sx={styles.titleStyles}>
                {product.title}
              </Typography>
              <Typography variant="h6" sx={styles.priceStyles}>
                € {product.price}
              </Typography>
            </div>
            <img src={customImage} alt={product.title} style={styles.imageStyles} />
            <Typography variant="body2" sx={styles.descriptionStyle}>
              {product.description}
            </Typography>
          </div>
          <div style={styles.extrasContainerStyles}>
            <Typography variant="h6" sx={styles.titleStyles}>
              Extras
            </Typography>
            {filteredExtrasData.map((extra) => (
              <div style={styles.checkboxContainerStyles} key={extra.id}>
                <div style={styles.checkboxStyles}>
                  <Checkbox />
                  <Typography variant="body1" sx={styles.checkboxNameStyles}>
                    {extra.title}
                  </Typography>
                </div>
                <Typography variant="h6" sx={styles.priceStyles}>
                  € {extra.price.toFixed(2)}
                </Typography>
              </div>
            ))}
          </div>
          <div style={styles.youMayAlsoLikeContainerStyles}>
            <Typography variant="h6" sx={styles.titleStyles}>
              You may also like
            </Typography>
            <div style={{ display: 'flex', marginTop: '20px' }}>
              {youMayAlsoLikeData.map((item) => (
                <YouMayLikeCard key={item.id} title={item.title} image={item.image} price={item.price} />
              ))}
            </div>
          </div>
          <div style={styles.specificPreferencesContainerStyles}>
            <Typography variant="h6" sx={styles.titleStyles}>
              Specific Preferences
            </Typography>
            <CustomInput
              label="Add description..."
              value={description}
              onChange={(value) => setDescription(value)}
              width="100%"
              height="40px"
              padding="8px"
              margin="10px"
              borderStyle="none"
              borderRadius="8px"
              backgroundColor="white"
              color="gray"
            />
          </div>
          <div style={styles.rowContainer}>
            <div style={styles.counterSectionStyles}>
              <div style={styles.counterButtonStyles(isDecreaseClicked)} onClick={handleDecrease}>
                -
              </div>
              <div style={styles.counterNumberStyles(isIncreaseClicked)}>{counter}</div>
              <div style={styles.counterButtonStyles(isIncreaseClicked)} onClick={handleIncrease}>
                +
              </div>
            </div>
            <div style={styles.addToCartButtonStyles} onClick={handleAddToCart}>
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ProductDrawer;



