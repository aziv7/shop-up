import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Product from '../components/Product';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [search, setSearch] = useState('');
  const [allproducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setAllProducts(data);
      });
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className='p-5'>
      <input
        type='text'
        value={search}
        onChange={(e) => {
          const value = e.target.value;
          setSearch(value);

          if (value == '') setProducts(allproducts);
          else
            setProducts(
              allproducts.filter((e) =>
                e.name.toLowerCase().includes(value.toLowerCase())
              )
            );
        }}
        placeholder='Search for products...'
        className='bg-gray-100 w-full py-2 px-4 rounded-xl'
      />
      <div>
        {categories.map((c) => (
          <div key={c}>
            <h2 className='text-2xl capitalize py-5'>{c}</h2>
            <div className='flex -mx-5 overflow-x-scroll snap-x scrollbar-hide'>
              {' '}
              {products
                .filter((p) => p.category)
                .map((p) => (
                  <div className='px-5 snap-start' key={p._id}>
                    <Product img={p.img} name={p.name} price={p.price} />
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className='py-4'></div>
      </div>
    </div>
  );
}
