
//SubHeader

export interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}
  
  export interface MenuCategory {
    id: number;
    title: string;
    imageUrl: string;
  }
  
  export interface RestaurantMenuResponse {
    data: {
      menuItemsFirstPage: {
        data: MenuItem[];
        totalPages: number;
        currentPage: number;
        activeIndex: number;
        totalElementsCount: number;
      };
      menuCategories: MenuCategory[];
    };
    success: boolean;
    statusCode: number;
    message: string | null;
  }
  
  export const fetchMenuCategories = async (): Promise<RestaurantMenuResponse> => {
    try {
      const response = await fetch('https://restly.deventure.ro/api/Product/InitRestaurantMenu?restaurantId=26');
      const data = await response.json();
      return data as RestaurantMenuResponse;
    } catch (error) {
      console.error('Error fetching menu categories:', error);
      return { data: { menuItemsFirstPage: { data: [], totalPages: 0, currentPage: 0, activeIndex: 0, totalElementsCount: 0 }, menuCategories: [] }, success: false, statusCode: 500, message: 'Internal Server Error' };
    }
  };
  

  //************************************************************************************************************/


  //Menu List

export const ProductMenuList = 'https://restly.deventure.ro/api/Product/GetMenuList';

export interface Product {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  rating: number;
  price: number;
  allergens: string[];
}

export interface ProductListResponse {
  data: {
    activeIndex: number;
    currentPage: number;
    data: Product[];
    totalElementsCount: number;
    totalPages: number;
  };
  success: boolean;
  statusCode: number;
  message: string | null;
}

export const fetchProductList = async (): Promise<ProductListResponse> => {
  try {
    const response = await fetch(ProductMenuList);
    const data = await response.json();
    return data as ProductListResponse;
  } catch (error) {
    console.error('Error fetching product list:', error);
    return { data: { activeIndex: 0, currentPage: 0, data: [], totalElementsCount: 0, totalPages: 0 },
                   success: false, statusCode: 500, message: 'Internal Server Error' };
  }
};


//***************************************************************************************************************** */