import Head from 'next/head';
import Loader from "react-loader-spinner";
import { useState, useEffect } from 'react';
import { ProductCard } from '../components';

export default function Products() {
  const initCategoryId = '5e78805c-3240-43d7-b160-33430a8e000b';
  const [currentProducts, setCurrentProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  const handleCategoryChange = async (e) => {
    const { target } = e;
    setLoadingProducts(true);
    fetchProducts(target.value);
  }

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories');
      const cats = await res.json();
      setCategories(cats);
    } catch(err) {
      throw new Error(err);
    }
  }

  const fetchProducts = async (newCategoryId) => {
    try {
      const res = await fetch(`/api/productByCategory?id=${newCategoryId}`);
      const newProducts = await res.json();

      setCurrentProducts(newProducts);
      setLoadingProducts(false);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchCategories();
    fetchProducts(initCategoryId);
  }, []);


  return (
    <div>
      <Head>
        <title>Products | Steel Virtue Group</title>
        <meta name="description" content="With Steel Virtue Group, you’re going to get a fair market price, and know that your family is in good hands." />
      </Head>

      <main className='layout-container'>
        <h1 className="section-title">Products</h1>

        <section>
          <div className="productResultHeader">
            <div className="productResultHeader__category">
              <label className="productResultHeader__label" htmlFor="categories">
                Filter by Category
              </label>
              {categories.length <= 0 && (
                <select style={{ 'width': '279px' }}><option>Rifles</option></select>
              )}
              {categories.length > 0 && (
                <select
                  id="categories"
                  className="productResultHeader__select"
                  onChange={handleCategoryChange}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              )}
            </div>
            <p className="productResultHeader__result-count">
              Showing {currentProducts.length > 0 ? currentProducts.length : 0} results
            </p>
          </div>

          <div className="productCards">
            {/* Loading products */}
            {loadingProducts && (
              <div style={{ 'display': 'flex', 'justifyContent': 'center', 'width': '100%' }}>
                <Loader
                  type="Oval"
                  color="#BF4444"
                  height={60}
                  width={60}
                />
              </div>
            )}
            {/* we have products */}
            {!loadingProducts && currentProducts.length > 0 && 
              currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            }
            {/* No products found */}
            {!loadingProducts && currentProducts.length <= 0 && (
              <p className="h4">No results found</p>
            )}
          </div>
        </section>
      </main>
    </div>
    
  )
}