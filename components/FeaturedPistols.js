import useSWR from "swr";
import Loader from "react-loader-spinner";
import ProductCard from './ProductCard';
import { fetcher } from "../utils/fetcher";

export default function FeaturedPistols() {
  const pistols = '5e78806b-a7a8-4538-aa9d-1e930a8e000b';
  const {data, error} = useSWR(`/api/productByCategory?id=${pistols}&limit=2`, fetcher);
  
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
