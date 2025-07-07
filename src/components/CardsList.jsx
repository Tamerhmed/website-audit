'use client';
import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import Image from 'next/image';

const CardsList = () => {
  const [designType, setDesignType] = useState('myer');

  const products = [
    {
      id: 1,
      name: 'Delicate Lace Sneaker',
      originalPrice: 99.95,
      salePrice: 48.3,
      discount: 30,
      rating: 4.5,
      reviews: 8,
      image: '/img/improvments/card-img-1.png', // Fixed path
      colors: ['black', 'navy'],
      isWishlisted: false,
      brand: 'TakingShape',
    },
    {
      id: 2,
      name: 'Delicate Lace Sneaker',
      originalPrice: 129.99,
      salePrice: 62.3,
      discount: 30,
      rating: 4.2,
      reviews: 15,
      image: '/img/improvments/card-img-1.png', // Fixed path
      colors: ['black', 'blue', 'pink'],
      isWishlisted: true,
      brand: 'Cotton Collection',
    },
    {
      id: 3,
      name: 'Delicate Lace Sneaker',
      originalPrice: 89.99,
      salePrice: 41.3,
      discount: 30,
      rating: 4.7,
      reviews: 23,
      image: '/img/improvments/card-img-1.png', // Fixed path
      colors: ['black'],
      isWishlisted: false,
      brand: 'ActiveWear',
    },
    {
      id: 4,
      name: 'Delicate Lace Sneaker',
      originalPrice: 119.99,
      salePrice: 48.3,
      discount: 30,
      rating: 4.8,
      reviews: 107,
      image: '/img/improvments/card-img-1.png', // Fixed path
      colors: ['black', 'white', 'navy', 'blue'],
      isWishlisted: false,
      brand: 'Summer Collection',
    },
  ];

  const MyerStyleCard = ({ product }) => (
    <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300'>
      <div className='relative w-full h-80'>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
        />
        <button className='absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow z-10'>
          <Heart
            className={`w-5 h-5 ${
              product.isWishlisted
                ? 'fill-red-500 text-red-500'
                : 'text-gray-400'
            }`}
          />
        </button>
      </div>

      <div className='p-4'>
        <div className='text-sm text-gray-600 mb-1'>{product.brand}</div>
        <h3 className='font-medium text-gray-900 mb-2 line-clamp-2'>
          {product.name}
        </h3>

        <div className='flex items-center gap-2 mb-2'>
          <span className='text-lg font-bold text-gray-900'>
            ${product.salePrice}
          </span>
          <span className='text-sm text-gray-500 line-through'>
            ${product.originalPrice}
          </span>
        </div>

        <div className='flex items-center gap-1 mb-3'>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className='text-sm text-gray-600 ml-1'>
            ({product.reviews})
          </span>
        </div>

        <div className='flex gap-2 mb-3'>
          {product.colors.map((color, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full border-2 ${
                color === 'black'
                  ? 'bg-black'
                  : color === 'navy'
                  ? 'bg-blue-900'
                  : color === 'blue'
                  ? 'bg-blue-500'
                  : color === 'pink'
                  ? 'bg-pink-400'
                  : 'bg-white'
              } border-gray-300`}
            />
          ))}
        </div>

        {/* Badges in lower content area */}
        <div className='flex flex-col gap-2'>
          <span className='bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded w-fit'>
            Clearance
          </span>
          <span className='bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded w-fit'>
            Take a further {product.discount}% off
          </span>
        </div>
      </div>
    </div>
  );

  const TopLeftBadgeCard = ({ product }) => (
    <div className='relative'>
      {/* Badge positioned outside and above the card */}
      <div className='absolute -top-2 -left-2 z-10'>
        <div className='bg-yellow-400 text-black px-2 py-1 rounded-md shadow-md border-2 border-yellow-500 min-w-[60px] text-center'>
          <div className='text-[9px] font-bold leading-tight'>EXTRA</div>
          <div className='text-sm font-black leading-none'>
            {product.discount}%
          </div>
          <div className='text-[9px] font-bold leading-tight'>OFF</div>
        </div>
      </div>

      <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300'>
        <div className='relative w-full h-80'>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
          />
          <button className='absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow z-10'>
            <Heart
              className={`w-5 h-5 ${
                product.isWishlisted
                  ? 'fill-red-500 text-red-500'
                  : 'text-gray-400'
              }`}
            />
          </button>
        </div>

        <div className='p-4'>
          <div className='flex items-center gap-2 mb-3'>
            {product.colors.map((color, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-full border-2 ${
                  color === 'black'
                    ? 'bg-black'
                    : color === 'navy'
                    ? 'bg-blue-900'
                    : color === 'blue'
                    ? 'bg-blue-500'
                    : color === 'pink'
                    ? 'bg-pink-400'
                    : 'bg-white'
                } border-gray-300`}
              />
            ))}
          </div>

          <h3 className='font-medium text-gray-900 mb-2 line-clamp-2'>
            {product.name}
          </h3>

          <div className='flex items-center gap-2 mb-2'>
            <span className='text-lg font-bold text-yellow-600'>
              ${product.salePrice}
            </span>
            <span className='text-sm text-gray-500 line-through'>
              was ${product.originalPrice}
            </span>
          </div>

          <div className='flex items-center gap-1'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className='text-sm text-blue-600 ml-1 underline cursor-pointer'>
              {product.reviews} Reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-4'>
            Product Cards Redesign Demo
          </h1>
          <p className='text-gray-600 mb-6'>
            Toggle between different card designs to see the styling variations
          </p>

          <div className='flex gap-4 mb-6'>
            <button
              onClick={() => setDesignType('myer')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                designType === 'myer'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Myer Style Design
            </button>
            <button
              onClick={() => setDesignType('topleft')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                designType === 'topleft'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Top-Left Badge Design
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <div key={product.id}>
              {designType === 'myer' ? (
                <MyerStyleCard product={product} />
              ) : (
                <TopLeftBadgeCard product={product} />
              )}
            </div>
          ))}
        </div>

        <div className='mt-12 bg-white rounded-lg p-6 shadow-sm'>
          <h2 className='text-xl font-semibold mb-4'>Design Differences</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <h3 className='font-medium text-gray-900 mb-2'>
                Myer Style Design
              </h3>
              <ul className='text-sm text-gray-600 space-y-1'>
                <li>• Brand name sits right above the product title</li>
                <li>
                  • Sale and clearance tags are down in the main content area
                </li>
                <li>
                  • All the badges stack up neatly under the color options
                </li>
                <li>• Nice clean look with just a touch of shadow for depth</li>
                <li>
                  • Product images stay clean - no badges covering them up
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-medium text-gray-900 mb-2'>
                Top-Left Badge Design
              </h3>
              <ul className='text-sm text-gray-600 space-y-1'>
                <li>
                  • Bright yellow badge pops up outside the main card area
                </li>
                <li>• Shows "EXTRA 30% OFF" in smaller, easy-to-read text</li>
                <li>
                  • Badge hovers above everything else with a nice drop shadow
                </li>
                <li>• Color options sit right above the product name</li>
                <li>• Sale prices get that eye-catching yellow highlight</li>
                <li>
                  • Review links are blue and underlined so you know they're
                  clickable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsList;
