import { React } from 'react';

export const drawerStyles = {
  width: '444px',
  padding: '30px 42px 42px 42px',
  backgroundColor: '#F8FAFD',
} as React.CSSProperties;

export const headerStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
} as React.CSSProperties;

export const contentStyles = {
  display: 'flex',
  flexDirection: 'column',
} as React.CSSProperties;

export const h6Styles = {
  fontWeight: 700,
  fontSize: '23px',
  lineHeight: '28.04px',
} as React.CSSProperties;

export const productInfoStyles = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '10px',
  alignItems: 'flex-start',
} as React.CSSProperties;

export const titleStyles = {
  marginTop: '20px',
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '21.94px',
} as React.CSSProperties;

export const descriptionStyle = {
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
} as React.CSSProperties;

export const imageStyles = {
  width: '100%',
  marginTop: '20px',
  marginBottom: '10px',
  borderRadius: '7px',
  maxHeight: '270px',
} as React.CSSProperties;

export const priceStyles = {
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '21.94px',
} as React.CSSProperties;

export const titlePriceContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems:'end',
  width: '100%',
} as React.CSSProperties;

export const extrasContainerStyles = {
  marginTop: '20px',
} as React.CSSProperties;

export const checkboxContainerStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
} as React.CSSProperties;

export const checkboxStyles = {
  display: 'flex',
  alignItems: 'center',
} as React.CSSProperties;

export const checkboxNameStyles = {
  marginLeft: '10px',
} as React.CSSProperties;

export const youMayAlsoLikeContainerStyles = {
  marginTop: '20px',
} as React.CSSProperties;

export const specificPreferencesContainerStyles = {
  marginTop: '20px',
} as React.CSSProperties;

export const inputStyles = {
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

export const counterSectionStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap:'10px',
  justifyContent: 'space-between',
  marginTop: '20px',
};

export const counterButtonStyles = (clicked: boolean): React.CSSProperties => ({
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  border: '1px solid #0B96D2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: clicked ? '#0B96D2' : 'white',
  color: clicked ? 'white' : '#0B96D2',
  cursor: 'pointer',
});

export const counterNumberStyles = (clicked: boolean): React.CSSProperties => ({
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  border: '1px solid #0B96D2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor : 'white',
  color:  'gray',
});

export const addToCartButtonStyles: React.CSSProperties = {
  width: '186px',
  height: '52px',
  backgroundColor: '#00D9FF',
  borderRadius: '500px',
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  marginTop: '20px',
  fontWeight:'700',
  fontSize:'18px',
  lineHeight:'21.94px'
};
export const rowContainer: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};