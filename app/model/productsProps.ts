 type ProductsProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageSrc: string[];
  imageAlt: string;
  interval?: number;
  className?: string;
};

export default ProductsProps;