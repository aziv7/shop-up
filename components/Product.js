import React from 'react';

const Product = ({ img, name, price }) => {
  return (
    <div className='w-64'>
      <div className='bg-blue-100 p-5 rounded-xl'>
        <img src={`/products/${img}`} alt={name} />
      </div>
      <div className='mt-2'>
        <h3 className='font-bold text-lg'>{name} </h3>
      </div>
      <p className='text-sm mt-1 leading-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt atque
        corrupti aperiam deleniti perferendis maiores culpa distinctio, iste
        quibusdam, libero iure natus, id obcaecati porro aliquid placeat iusto
        maxime ut?
      </p>
      <div className='mt-1  flex justify-between'>
        <div className='text-2xl font-bold '>${price} </div>
        <button className='bg-emerald-400 rounded-lg group text-white py-1 px-3'>
          <span className='hidden transition-all ease-in-out duration-400 group-hover:inline'>
            Add to cart
          </span>{' '}
          <span className='transition-all ease-in-out duration-200 '>+</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
