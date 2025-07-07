import Image from 'next/image';
import shoppingBagImage from '../../public/img/improvments/shopping-bag-1.png';

export default function ShoppingBag() {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
      <h1 className='text-3xl font-bold text-gray-900 mb-6'>
        Shopping Bag & Checkout
      </h1>

      <div className='mb-8'>
        <Image
          src={shoppingBagImage}
          alt='TakingShape Mobile Navigation Menu'
          className='w-full h-auto rounded-lg shadow-lg'
          priority
        />
      </div>

      <div className='space-y-8'>
        <section>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-green-500 pb-2'>
            Key Strengths
          </h2>
          <div className='grid gap-4'>
            <div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-500'>
              <h3 className='font-semibold text-green-800 mb-2'>
                Excellent Cross-Selling
              </h3>
              <p className='text-gray-700'>
                "Complete the Look" section effectively drives higher order
                values
              </p>
            </div>
            <div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-500'>
              <h3 className='font-semibold text-green-800 mb-2'>
                Comprehensive Product Info
              </h3>
              <p className='text-gray-700'>
                Clear display of fit, color, size, price, and quantity details
              </p>
            </div>
            <div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-500'>
              <h3 className='font-semibold text-green-800 mb-2'>
                Smart Delivery Options
              </h3>
              <p className='text-gray-700'>
                Click & Collect with FREE delivery plus $10 voucher bonus
              </p>
            </div>
            <div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-500'>
              <h3 className='font-semibold text-green-800 mb-2'>
                Clean Design
              </h3>
              <p className='text-gray-700'>
                Professional, uncluttered layout with strong brand consistency
              </p>
            </div>
            <div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-500'>
              <h3 className='font-semibold text-green-800 mb-2'>
                Transparent Pricing
              </h3>
              <p className='text-gray-700'>
                Clear breakdown of costs and prominent promo code field
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2'>
            Priority Improvements Needed
          </h2>

          <div className='mb-6'>
            <h3 className='text-xl font-semibold text-orange-800 mb-3'>
              High Impact Changes
            </h3>
            <div className='bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500'>
              <h4 className='font-semibold text-orange-800 mb-2'>
                Quantity Control
              </h4>
              <p className='text-gray-700'>
                Replace "UPDATE" button with intuitive +/- icons for easier
                quantity changes
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
