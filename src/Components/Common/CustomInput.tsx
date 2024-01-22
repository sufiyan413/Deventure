import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

interface CustomInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  borderStyle?: string;
  borderRadius?: string;
  backgroundColor?: string; 
  color?: string; 
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChange,
  width = '100%',
  height,
  padding,
  margin,
  borderStyle,
  borderRadius,
  backgroundColor, 
  color, 
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      variant="outlined"
      value={value}
      onChange={handleChange}
      fullWidth
      InputProps={{
        style: {
          color: color || 'black', 
          backgroundColor: backgroundColor || 'white', 
          width: width,
          height: height,
          padding: padding,
          margin: margin,
          borderStyle: borderStyle,
          borderRadius: borderRadius,
        },
      }}
      InputLabelProps={{
        shrink: false,
      }}
      placeholder={label}
    />
  );
};

export default CustomInput;
