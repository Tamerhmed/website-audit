'use client';

import { useState } from 'react';

const ChevronRight = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    className={className}
  >
    <polyline points='9,18 15,12 9,6'></polyline>
  </svg>
);

const X = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    className={className}
  >
    <line x1='18' y1='6' x2='6' y2='18'></line>
    <line x1='6' y1='6' x2='18' y2='18'></line>
  </svg>
);

export default function MobileClothingMenu({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { name: 'Tops & T Shirts', hasSubcategories: true },
    { name: 'Dresses', hasSubcategories: true },
    { name: 'Coats & Jackets', hasSubcategories: true },
    { name: 'Pants', hasSubcategories: false },
    { name: 'Cardigans', hasSubcategories: false },
    { name: 'Knitwear', hasSubcategories: true },
    { name: 'Denim & Jeans', hasSubcategories: true },
    { name: 'Sleepwear', hasSubcategories: true },
    { name: 'Lingerie', hasSubcategories: true },
    { name: 'Swimwear', hasSubcategories: true },
    { name: 'Activewear & Loungewear', hasSubcategories: true },
  ];

  const handleCategoryClick = (category, index) => {
    if (category.hasSubcategories) {
      setActiveCategory(activeCategory === index ? null : index);
    } else {
      console.log(`Navigate to ${category.name}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='absolute inset-0 bg-white z-50 overflow-y-auto rounded-lg border border-gray-200'>
      {/* Header */}
      <div className='flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0'>
        <h2 className='text-lg font-medium text-gray-900'>Clothing</h2>
        <button
          onClick={onClose}
          className='p-2 hover:bg-gray-100 rounded-full transition-colors'
          aria-label='Close menu'
        >
          <X size={24} className='text-gray-600' />
        </button>
      </div>

      {/* View All Link */}
      <div className='p-4 border-b border-gray-100'>
        <button
          className='text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors'
          onClick={() => console.log('View all clothing')}
        >
          VIEW ALL CLOTHING
        </button>
      </div>

      {/* Categories Section */}
      <div className='p-4'>
        <h3 className='text-sm font-medium text-gray-500 uppercase tracking-wider mb-4'>
          CATEGORY
        </h3>

        <div className='space-y-0'>
          {categories.map((category, index) => (
            <div
              key={index}
              className='border-b border-gray-100 last:border-b-0'
            >
              <button
                onClick={() => handleCategoryClick(category, index)}
                className='w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors group'
              >
                <span className='text-base text-gray-900 group-hover:text-gray-600'>
                  {category.name}
                </span>
                {category.hasSubcategories && (
                  <ChevronRight
                    size={20}
                    className={`text-gray-400 transition-transform duration-200 ${
                      activeCategory === index ? 'rotate-90' : ''
                    }`}
                  />
                )}
              </button>

              {/* Subcategories */}
              {category.hasSubcategories && activeCategory === index && (
                <div className='pb-4 pl-4 space-y-2 bg-gray-50'>
                  <div className='text-sm text-gray-600 py-2 hover:text-gray-900 cursor-pointer transition-colors'>
                    View All {category.name}
                  </div>
                  <div className='text-sm text-gray-600 py-2 hover:text-gray-900 cursor-pointer transition-colors'>
                    Popular Items
                  </div>
                  <div className='text-sm text-gray-600 py-2 hover:text-gray-900 cursor-pointer transition-colors'>
                    New Arrivals
                  </div>
                  <div className='text-sm text-gray-600 py-2 hover:text-gray-900 cursor-pointer transition-colors'>
                    Sale Items
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
