import useSWR from "swr";
import Loader from "react-loader-spinner";
import ProductCard from './ProductCard';
import { fetcher } from "../utils/fetcher";

export default function FeaturedPistols() {
  const ammo = '5e788080-8060-45c6-8ea7-33430a8e000b';
  const {data, error} = useSWR(`/api/productByCategory?id=${ammo}&limit=2`, fetcher);
  
  if (error) {
    return '';
  }
  if (!data) {
    return (
      <div style={{ 'display': 'flex', 'justifyContent': 'center', 'width': '100%' }}>
        <Loader
          type="Oval"
          color="#BF4444"
          height={40}
          width={40}
        />
      </div>
    );
  }
  return (
    <>
      {data.map((product, index) =>
        index < 2
        ? <ProductCard key={index} product={product} />
        : ''
      )}
    </>
  );
}
