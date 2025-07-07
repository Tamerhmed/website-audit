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
          <h2 className='text-xl font-bold text-gray-900 mb-6 flex items-center'>
            Key Strengths I Identified
          </h2>
          <div className='space-y-4'>
            <div className='bg-white p-5 rounded-lg shadow-sm border border-green-200'>
              <p className='text-gray-800 font-medium'>
                "When I analyzed the cross-selling strategy, I found that
                'Complete the Look' section is incredibly effective at driving
                higher order values."
              </p>
            </div>
            <div className='bg-white p-5 rounded-lg shadow-sm border border-green-200'>
              <h3 className='font-semibold text-green-700 mb-3'>
                Comprehensive Product Information
              </h3>
              <p className='text-gray-700'>
                "I was impressed by how all the essential details - fit, colors,
                sizes, pricing, and quantity selection - are clearly presented
                in one place."
              </p>
            </div>
            <div className='bg-white p-5 rounded-lg shadow-sm border border-green-200'>
              <h3 className='font-semibold text-green-700 mb-3'>
                Strategic Delivery Incentives
              </h3>
              <p className='text-gray-700'>
                "The Click & Collect option with free delivery plus a $10
                voucher creates a compelling value proposition that reduces cart
                abandonment."
              </p>
            </div>
            <div className='bg-white p-5 rounded-lg shadow-sm border border-green-200'>
              <h3 className='font-semibold text-green-700 mb-3'>
                Strong Visual Design
              </h3>
              <p className='text-gray-700'>
                "The interface maintains excellent brand consistency with a
                clean, professional layout that doesn't overwhelm users."
              </p>
            </div>
            <div className='bg-white p-5 rounded-lg shadow-sm border border-green-200'>
              <h3 className='font-semibold text-green-700 mb-3'>
                Transparent Pricing Model
              </h3>
              <p className='text-gray-700'>
                "What I really appreciated was the clear cost breakdown and
                prominent promo code placement - no hidden fees or confusion."
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
                So when I was looking at the user experience, I noticed that
                customers have to manually type in quantities and then click an
                'UPDATE' button, which feels pretty clunky. I thought, why not
                implement those intuitive plus and minus buttons instead? Users
                can just tap to increase or decrease quantities - it's much more
                seamless. What's interesting is that this functionality already
                exists on the product pages, so from a UX consistency
                standpoint, it makes perfect sense to roll it out across the
                entire site. It would definitely streamline the shopping
                experience and reduce friction for customers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
